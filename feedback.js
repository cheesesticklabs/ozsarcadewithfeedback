(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const connected = !!window.google?.script?.run;
  const schoolURL = 'https://script.google.com/a/macros/unitedcharter.org/s/AKfycbxjyXwSuRgTQzaRj5kYpXRVUVkNXuASD_ha6McSLQd2RS9Ce18pNmbWCn0CzVt_PhrX/exec';
  const key = 'oz-arcade-feedback-only-v1';
  const counts = new Map();
  let drafts = {}, target = null, checking = null, busy = false, menuVersion = 0, readVersion = 0;
  let lastTrigger = null;
  try { drafts = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch {}
  const uuid = () => crypto.randomUUID ? crypto.randomUUID() : 'review_' + Date.now() + '_' + Math.random().toString(36).slice(2);
  const esc = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function persist() { try { localStorage.setItem(key,JSON.stringify(drafts)); } catch {} }
  function call(method,...args) {
    if (!connected) return Promise.reject(new Error('Shared feedback is available in the school version.'));
    return new Promise((resolve,reject) => {
      let settled = false;
      const timeout = setTimeout(() => { settled = true; reject(new Error('The connection timed out. Your draft is still here. Retry to check or save it.')); },35000);
      google.script.run.withSuccessHandler(result => { if (!settled) { clearTimeout(timeout);resolve(result); } })
        .withFailureHandler(error => { if (!settled) { clearTimeout(timeout);reject(new Error(error?.message || 'Could not connect. Please retry.')); } })[method](...args);
    });
  }
  function schoolLink(container,message) {
    container.textContent = message + ' ';
    if (!connected) {
      const link = document.createElement('a'); link.href = schoolURL; link.target = '_blank'; link.rel = 'noopener'; link.textContent = 'Open school version';container.append(link);
    }
  }
  function label(button,gameId) {
    const count = counts.get(gameId);
    button.textContent = `Check feedback (${Number.isInteger(count) ? count : '—'})`;
    if (button.dataset.feedbackTitle) button.setAttribute('aria-label',`${button.textContent} on ${button.dataset.feedbackTitle}`);
    if (Number.isInteger(count)) button.dataset.count = String(count); else delete button.dataset.count;
    button.title = Number.isInteger(count) ? `${count} reviews received` : 'Review count has not loaded. Open the school version for shared feedback.';
  }
  function updateLabels() {
    document.querySelectorAll('[data-feedback-game]').forEach(button => label(button,button.dataset.feedbackGame));
  }
  async function refreshCounts(ids,version) {
    if (!connected || !ids.length) return;
    try {
      const result = await call('getFeedbackCounts',ids);if(!result.ok)throw new Error(result.error);
      Object.entries(result.counts).forEach(([id,count])=>counts.set(id,count));
      if (version === menuVersion) updateLabels();
    } catch(error) {
      if (version === menuVersion) document.querySelectorAll('[data-feedback-game]').forEach(button => button.title = 'Count unavailable: ' + error.message);
    }
  }
  function addControls() {
    const version = ++menuVersion;
    if (!activeStudent) return;
    const period = String(activePeriod), name = activeStudent, list = games[`${period}/${name}`] || [];
    [...grid.children].forEach((card,index) => {
      const game = list[index]; if (!game) return;
      const cabinet = document.createElement('article');cabinet.className='game-cabinet';
      const controls = document.createElement('div');controls.className='feedback-controls';
      const leave=document.createElement('button');leave.type='button';leave.textContent='Leave feedback';leave.setAttribute('aria-label',`Leave feedback on ${game.title}`);
      const check=document.createElement('button');check.type='button';check.dataset.feedbackGame=game.url;check.dataset.feedbackTitle=game.title;label(check,game.url);
      leave.onclick=()=>openForm({period,name,game},leave);check.onclick=()=>openReviews({period,name,game},check);
      card.replaceWith(cabinet);cabinet.append(card,controls);controls.append(leave,check);
    });
    refreshCounts(list.map(game=>game.url),version);
  }
  function rememberDraft() {
    if (!target || busy) return;
    const form=$('#leave-form'), draft=drafts[target.game.url] ||= {id:uuid()};
    ['reviewerName','reviewerPeriod','worked','observation','improvement'].forEach(field=>draft[field]=form.elements[field].value);
    persist();
  }
  function openForm(item,trigger) {
    target=item;lastTrigger=trigger;
    const form=$('#leave-form'),draft=drafts[item.game.url] || {};
    ['reviewerName','reviewerPeriod','worked','observation','improvement'].forEach(field=>form.elements[field].value=draft[field] || '');
    $('#leave-game').textContent=`${item.game.title} · ${item.name} · Period ${item.period}`;
    $('#leave-status').textContent='';
    if (!connected) schoolLink($('#leave-status'),'This local copy can save a draft. Submit from the school version.');
    $('#leave-feedback').showModal();form.elements.reviewerName.focus();
  }
  function closeForm() { if(busy)return;rememberDraft();$('#leave-feedback').close();lastTrigger?.focus(); }
  async function submit(event) {
    event.preventDefault();if(busy||!target)return;
    rememberDraft();const item=target,draft={...drafts[item.game.url]};
    const payload={...draft,creatorPeriod:item.period,creatorName:item.name,gameId:item.game.url,gameTitle:item.game.title};
    busy=true;$('#submit-feedback').disabled=true;$('#leave-status').textContent='Submitting feedback…';
    $('#leave-form').querySelectorAll('input,textarea').forEach(field=>field.disabled=true);
    try {
      const result=await call('submitReview',payload);if(!result.ok)throw new Error(result.error);
      counts.set(item.game.url,result.count);updateLabels();
      delete drafts[item.game.url];persist();
      $('#leave-status').textContent='Feedback submitted. Thank you!';$('#leave-form').reset();
      target=null;
      $('#leave-feedback').close();lastTrigger?.focus();
    } catch(error) { schoolLink($('#leave-status'),error.message); }
    finally { busy=false;$('#submit-feedback').disabled=false;$('#leave-form').querySelectorAll('input,textarea').forEach(field=>field.disabled=false); }
  }
  async function openReviews(item,trigger) {
    checking=item;if(trigger)lastTrigger=trigger;
    const version=++readVersion;
    $('#check-game').textContent=`${item.game.title} · ${item.name} · Period ${item.period}`;
    if(!$('#check-feedback').open)$('#check-feedback').showModal();
    $('#feedback-records').textContent='Loading feedback…';
    try {
      const result=await call('getReviews',item.game.url);if(version!==readVersion)return;if(!result.ok)throw new Error(result.error);
      counts.set(item.game.url,result.reviews.length);updateLabels();
      $('#feedback-records').innerHTML=result.reviews.length?result.reviews.map(review=>`<article class="feedback-record"><h3>${esc(review.reviewerName)} · Period ${esc(review.reviewerPeriod)}</h3><p><strong>What worked well</strong>${esc(review.worked)}</p><p><strong>What the player noticed</strong>${esc(review.observation)}</p><p><strong>Suggested improvement</strong>${esc(review.improvement)}</p></article>`).join(''):'<p>No feedback yet. Be the first to leave a review.</p>';
    }catch(error){if(version===readVersion)schoolLink($('#feedback-records'),error.message);}
  }
  document.addEventListener('arcade-render',addControls);addControls();
  $('#leave-form').addEventListener('input',rememberDraft);$('#leave-form').onsubmit=submit;
  $('#leave-feedback .feedback-close').onclick=closeForm;
  $('#leave-feedback').addEventListener('cancel',event=>{event.preventDefault();closeForm();});
  function closeReviews(){++readVersion;$('#check-feedback').close();lastTrigger?.focus();}
  $('#check-feedback .feedback-close').onclick=closeReviews;
  $('#check-feedback').addEventListener('cancel',event=>{event.preventDefault();closeReviews();});
  $('#refresh-feedback').onclick=()=>checking&&openReviews(checking);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&activeStudent)refreshCounts((games[`${activePeriod}/${activeStudent}`]||[]).map(game=>game.url),menuVersion);});
})();
