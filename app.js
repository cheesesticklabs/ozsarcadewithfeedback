const rosters = {
  2: ['Anaya','Kofi A','Derely','Cristian','Ivannah','Chelsea','Chris','Elijah','Alexandra','Jadee','Jayden','Gabriel','Ata','Kofi N','Amy','Evelyn','Kenneth','Amanda','Judith','Milo','Emilie','Fauziya','Valerie'],
  5: ['Abdul','Prince','Seydou','Abrahim','Summer','Issa','India','Ilannah','Colin','Yeronni','Rover','Cameron','Jayden','Lebron','Keith','Mamady','Daniel','Nathan','Sergio','Bryan','Alie','Joshua'],
  6: ['Angel','Johan','Jacob','Francis','Lynn','Melanie','Adrian','Joseph','Melina','Kemil','Jahseal'],
  7: ['Pedro','Kienan','Danny','Sean','Jhoriel','Rosselyn','Siah','Chad','Suso','Valerie']
};
// Each student has an array of games, keyed by period/name. Append new games to that array.
const games = {
  '5/Abrahim': [{ title: 'Dark School Obby', url: 'games/period-5/abrahim/dark-school-obby/index.html', screenshot: 'screenshots/abrahim-dark-school-obby.svg' }],
  '5/Issa': [{ title: 'Cap Gun Graveyard — Local Split-Screen Co-op', url: 'games/period-5/issa/cap-gun-graveyard/index.html', screenshot: 'screenshots/issa-cap-gun-graveyard.svg' }],
  '5/Yeronni': [{ title: 'X-Wing: Dogfight', url: 'games/period-5/yeronni/x-wing-dogfight/index.html', screenshot: 'screenshots/yeronni-x-wing-dogfight.svg' }],
  '5/Sergio': [
    { title: 'Bell Under the Cup', url: 'games/period-5/sergio/bell-under-the-cup/index.html', screenshot: 'screenshots/sergio-bell-under-the-cup.svg' },
    { title: 'Chroma Snap', url: 'games/period-5/sergio/chroma-snap/index.html', screenshot: 'screenshots/sergio-chroma-snap.svg' }
  ],
  '7/Danny': [
    { title: 'Mirror Match — Local Two Player', url: 'games/period-7/danny/mirror-match-local/index.html', screenshot: 'screenshots/danny-mirror-match-local.svg' },
    { title: 'Mirror Match — Echo Duel', url: 'games/period-7/danny/mirror-match-echo/index.html', screenshot: 'screenshots/danny-mirror-match-echo.svg' }
  ],
  '7/Sean': [
    { title: 'Last One Standing — Cyber Arena', url: 'games/period-7/sean/last-one-standing/index.html', screenshot: 'screenshots/sean-last-one-standing.svg' },
    { title: 'Overlord Whiskers 2187', url: 'games/period-7/sean/overlord-whiskers-2187/index.html', screenshot: 'screenshots/sean-overlord-whiskers-2187.svg' }
  ],
  '7/Jhoriel': [
    { title: 'Haunted Mansion: The Great Escape', url: 'games/period-7/jhoriel/haunted-mansion/index.html', screenshot: 'screenshots/jhoriel-haunted-mansion.svg' },
    { title: 'Zombie Base Tycoon', url: 'games/period-7/jhoriel/zombie-base-tycoon/index.html', screenshot: 'screenshots/jhoriel-zombie-base-tycoon.svg' }
  ],
  '7/Siah': [{ title: 'Rooftop Squad', url: 'games/period-7/siah/rooftop-squad/index.html', screenshot: 'screenshots/siah-rooftop-squad.svg' }],
  '7/Chad': [
    { title: 'Tag & Escape — Two Player', url: 'games/period-7/chad/tag-and-escape/index.html', screenshot: 'screenshots/chad-tag-and-escape.svg' },
    { title: 'Inferno: Town Burner', url: 'games/period-7/chad/inferno-town-burner/index.html', screenshot: 'screenshots/chad-inferno-town-burner.svg' }
  ],
  '7/Suso': [{ title: 'Rogue Dino Catcher', url: 'games/period-7/suso/rogue-dino-catcher/index.html', screenshot: 'screenshots/suso-rogue-dino-catcher.svg' }],
  '7/Valerie': [{ title: 'Snip & Style Salon — Two Player', url: 'games/period-7/valerie/snip-and-style/index.html', screenshot: 'screenshots/valerie-snip-and-style.svg' }],
  '2/Valerie': [
    { title: 'Errand Town 3D', url: 'games/period-2/valerie/index.html', screenshot: 'screenshots/valerie-preview.webp' },
    { title: 'Giftie Grove — No WebGL', url: 'games/period-2/valerie/giftie-grove/index.html', screenshot: 'screenshots/valerie-giftie-grove.svg' },
  ],
  '6/Kemil': [
    { title: 'Veteran Line', url: 'games/period-6/kemil/veteran-line/index.html', screenshot: 'screenshots/kemil-veteran-line.svg' },
    { title: 'ANNIHILATOR', url: 'games/period-6/kemil/annihilator/index.html', screenshot: 'screenshots/kemil-annihilator.svg' }
  ],
  '6/Joseph': [{ title: 'Tap Pets', url: 'games/period-6/joseph/tap-pets/index.html', screenshot: 'screenshots/joseph-tap-pets.svg' }],
  '6/Jahseal': [
    { title: 'Power Fighters', url: 'games/period-6/jahseal/power-fighters/index.html', screenshot: 'screenshots/jahseal-power-fighters.svg' },
    { title: 'Brawl Maker', url: 'games/period-6/jahseal/brawl-maker/index.html', screenshot: 'screenshots/jahseal-brawl-maker.svg' }
  ],
  '6/Jacob': [{ title: 'Neon Dash Duo — Solo & Two Player', url: 'games/period-6/jacob/neon-dash-duo/index.html', screenshot: 'screenshots/jacob-neon-dash-duo.svg' }],
  '5/Mamady': [
    { title: 'Dribble & Pass: Derby Day (3D View)', url: 'games/period-5/mamady/derby-day-3d/index.html', screenshot: 'screenshots/mamady-derby-day.svg', previewAlt: 'Derby Day 3D view gameplay screenshot' },
    { title: 'Dribble & Pass: Derby Day (Striker Edition)', url: 'games/period-5/mamady/striker-edition/index.html', screenshot: 'screenshots/mamady-striker-edition.svg', previewAlt: 'Derby Day Striker Edition top-down gameplay screenshot' }
  ],
  '5/Daniel': [{ title: 'Eagle Escape — Red Light, Green Light', url: 'games/period-5/daniel/eagle-escape/index.html', screenshot: 'screenshots/daniel-eagle-escape.svg' }],
  '5/Nathan': [{ title: 'DUEL — Two Player Shooter', url: 'games/period-5/nathan/duel-shooter/index.html', screenshot: 'screenshots/nathan-duel-shooter.svg' }],
  '5/Rover': [{ title: 'AFTERIMAGE — Two Player Horror', url: 'games/period-5/rover/afterimage/index.html', screenshot: 'screenshots/rover-afterimage.svg' }],
  '5/Jayden': [{ title: 'Ranger Breakout: 2 Players', url: 'games/period-5/jayden/ranger-breakout/index.html', screenshot: 'screenshots/jayden-ranger-breakout.svg' }],
  '2/Jayden': [
    { title: 'Abandoned School Escape', url: 'games/period-2/jayden/abandoned-school-escape/index.html', screenshot: 'screenshots/jayden-abandoned-school.svg', previewAlt: 'Abandoned School Escape title screen screenshot' },
  ],
  '5/Keith': [{ title: 'Champions Hoops 1v1', url: 'games/period-5/keith/champions-hoops/index.html', screenshot: 'screenshots/keith-champions-hoops.svg' }],
  '2/Ata': [{ title: 'Last Zone Standing 3D', url: 'games/period-2/ata/last-zone-standing/index.html', screenshot: 'screenshots/ata-last-zone-standing.svg' }],
  '2/Jadee': [{ title: 'The Funhouse Is Watching: Circus Deluxe', url: 'games/period-2/jadee/funhouse-circus/index.html', screenshot: 'screenshots/jadee-funhouse-circus.svg', previewAlt: 'The Funhouse Is Watching Circus Deluxe two-player gameplay screenshot' }],
  '2/Anaya': [
    { title: 'Haunted School Showdown', url: 'games/period-2/anaya/haunted-school-showdown/index.html', screenshot: 'screenshots/anaya-haunted-school.svg', previewAlt: 'Haunted School Showdown gameplay: Wonder Woman versus Scarlet Witch' },
    { title: 'Haunted Shark Hunt', url: 'games/period-2/anaya/shark-hunt/index.html', screenshot: 'screenshots/anaya-shark-hunt.svg', previewAlt: 'Haunted Shark Hunt gameplay screenshot' }
  ],
  '6/Melanie': [
    { title: 'Hollow — Ward 09', url: 'games/period-6/melanie/hollow/index.html', screenshot: 'screenshots/melanie-hollow-preview.svg', previewAlt: 'Hollow Ward 09 gameplay screenshot' },
    { title: 'Dead Quiet', url: 'games/period-6/melanie/dead-quiet/index.html', screenshot: 'screenshots/melanie-dead-quiet.svg' }
  ],
  '5/Prince': [{ title: 'Green Meter Soccer', url: 'games/period-5/prince/green-meter-soccer/index.html', screenshot: 'screenshots/prince-green-meter-soccer.svg' }],
  '5/Ilannah': [{ title: 'Spike Dash', url: 'games/period-5/ilannah/spike-dash/index.html', screenshot: 'screenshots/ilannah-spike-dash.svg' }],
  '6/Angel': [
    { title: 'Dead Drop — Extraction', url: 'games/period-6/angel/index.html', screenshot: 'screenshots/angel-preview.webp' },
    { title: 'Escape the Zombie', url: 'games/period-6/angel/escape-the-zombie/index.html', screenshot: 'screenshots/angel-escape-the-zombie.svg' }
  ],
  '2/Ivannah': [
    { title: 'Candy Coast Sprint', url: 'games/period-2/ivannah/index.html', screenshot: 'screenshots/ivannah-preview.webp' },
    { title: 'Night Shift at Pizza Palace', url: 'games/period-2/ivannah/pizza-palace/index.html', screenshot: 'screenshots/ivannah-pizza-palace.svg' }
  ],
  '2/Chelsea': [{ title: 'Tower of Dread 3D', url: 'games/period-2/chelsea/tower-of-dread/index.html', screenshot: 'screenshots/chelsea-tower-of-dread.svg' }],
  '2/Judith': [{ title: 'Kawaii Chomp', url: 'games/period-2/judith/index.html', screenshot: 'screenshots/judith-preview.webp' }],
  '2/Kofi A': [
    { title: 'Marceline: Rise of the Vampire Queen', url: 'games/period-2/kofi-a/index.html', screenshot: 'screenshots/kofi-a-night-hunt.svg' },
    { title: 'Steven Universe: Fusion Dance Battle', url: 'games/period-2/kofi-a/fusion-dance-battle/index.html', screenshot: 'screenshots/kofi-a-fusion-dance.svg' },
    { title: 'Marceline: Night Hunt', url: 'games/period-2/kofi-a/night-hunt/index.html', screenshot: 'screenshots/kofi-a-night-hunt.svg' }
  ],
  '2/Derely': [
    { title: 'Dress Up Dash: Don’t Turn Zombie', url: 'games/period-2/derely/index.html', screenshot: 'screenshots/derely-preview.webp' },
    { title: 'Night Shift: Haunted Supermarket', url: 'games/period-2/derely/haunted-supermarket/index.html', screenshot: 'screenshots/derely-haunted-supermarket.svg' }
  ],
  '2/Chris': [
    { title: 'Free Kick Pro', url: 'games/period-2/chris/index.html', screenshot: 'screenshots/chris-preview.webp' },
    { title: 'Free Kick Pro — Alternate Version', url: 'games/period-2/chris/alternate-version/index.html', screenshot: 'screenshots/chris-free-kick-alternate.svg' }
  ],
  '2/Amanda': [
    { title: 'Operation Deaddrop', url: 'games/period-2/amanda/index.html', screenshot: 'screenshots/amanda-preview.webp' },
    { title: 'Chained: Gotham Obby', url: 'games/period-2/amanda/chained-gotham-obby/index.html', screenshot: 'screenshots/amanda-gotham-obby.svg' }
  ],
  '2/Evelyn': [
    { title: 'Sky Obby', url: 'games/period-2/evelyn/index.html', screenshot: 'screenshots/evelyn-preview.webp' },
    { title: 'Obby Duo', url: 'games/period-2/evelyn/obby-duo/index.html', screenshot: 'screenshots/evelyn-obby-duo.svg' }
  ],
  '2/Elijah': [{ title: 'Speedster City', url: 'games/period-2/elijah/index.html', screenshot: 'screenshots/elijah-preview.webp' }],
  '2/Gabriel': [
    { title: 'Ink Duel', url: 'games/period-2/gabriel/index.html', screenshot: 'screenshots/gabriel-preview.webp' },
    { title: 'Cube Dash', url: 'games/period-2/gabriel/cube-dash/index.html', screenshot: 'screenshots/gabriel-cube-dash.svg' }
  ],
  '2/Amy': [{ title: 'St. Morrow Hospital: Dead Wing', url: 'games/period-2/amy/index.html', screenshot: 'screenshots/amy-preview.webp' }],
  '2/Fauziya': [{ title: 'Zombie Panic: Fast Forest', url: 'games/period-2/fauziya/index.html', screenshot: 'screenshots/fauziya-preview.webp' }],
  '5/Alie': [
    { title: 'Escape Mr Pino', url: 'games/period-5/alie/index.html', screenshot: 'screenshots/alie-preview.webp' },
    { title: 'Escape Mr Pino — Updated Version', url: 'games/period-5/alie/updated-version/index.html', screenshot: 'screenshots/alie-mr-pino-updated.svg' }
  ],
  '2/Cristian': [{ title: 'Blight Rain', url: 'games/period-2/cristian/index.html', screenshot: 'screenshots/cristian-preview.webp' }]
};
const colors=['#ff7b9c','#78d9d4','#b69ae9','#ffca73'];
const grid=document.querySelector('#game-grid');
const player=document.querySelector('#player');
let activePeriod=2,activeStudent=null,previousFocus=null,rotationTimer=null;
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let previewsPaused=reducedMotion.matches;
const previewToggle=document.querySelector('#preview-toggle');
const studentLink=(period,name)=>`#period-${period}/student/${encodeURIComponent(name)}`;
function studentGames(name){return games[`${activePeriod}/${name}`]||[];}
function tvStatic(){
  const svg='<svg xmlns="http://www.w3.org/2000/svg" width="384" height="240" viewBox="0 0 384 240"><defs><filter id="noise" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="3" seed="17"/><feColorMatrix type="saturate" values="0"/></filter><pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="2" fill="#000" opacity=".2"/></pattern></defs><rect width="384" height="240" fill="#666"/><rect width="384" height="240" filter="url(#noise)"/><rect width="384" height="240" fill="url(#scan)"/></svg>';
  return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
}
function pictureFor(game,index){
  const picture=document.createElement('div');picture.className='thumbnail';
  const img=document.createElement('img');img.src=game?.screenshot||thumbnail(index);
  img.alt=game?.previewAlt||(game?.screenshot?`${game.title} screenshot`:'Illustrated placeholder game preview');
  img.width=384;img.height=240;img.loading='lazy';img.decoding='async';picture.append(img);
  if(!game){
    picture.classList.add('coming-soon');img.src=tvStatic();img.alt='';
    const label=document.createElement('span');label.className='coming-soon-label';label.textContent='COMING SOON!';picture.append(label);
    return picture;
  }
  if(!game?.screenshot){const badge=document.createElement('span');badge.className='preview-badge';badge.textContent='PREVIEW COMING SOON';picture.append(badge);}
  return picture;
}
function makeCard(title,label,index,picture,status,action){
  const card=document.createElement('button');card.type='button';card.className='game-card';
  card.style.setProperty('--accent',colors[index%4]);card.setAttribute('aria-label',label);
  const nameplate=document.createElement('span');nameplate.className='card-name';nameplate.textContent=title;
  const meta=document.createElement('span');meta.className='card-meta';
  const text=document.createElement('span');text.textContent=status;
  const link=document.createElement('b');link.textContent=action;meta.append(text,link);
  card.append(nameplate,picture,meta);return card;
}
function thumbnail(index){
  const accent=colors[index%colors.length];
  const stars=Array.from({length:22},(_,i)=>`<rect x="${(i*73+index*17)%384}" y="${(i*41)%182}" width="2" height="2" fill="#ffffff" opacity="${i%3===0?'.8':'.3'}"/>`).join('');
  const scenes=[
    `<circle cx="286" cy="70" r="30" fill="#e684a2"/><path d="M0 168L60 105L109 155L170 86L252 168L319 118L384 170V240H0Z" fill="#323358"/><path d="M0 195H384V240H0Z" fill="#24213b"/><g fill="${accent}"><rect x="33" y="176" width="70" height="8"/><rect x="150" y="144" width="62" height="8"/><rect x="281" y="182" width="72" height="8"/></g><path d="M174 125h14v18h-14z" fill="#ffcf70"/><path d="M177 119h8v8h-8z" fill="#fff3d2"/>`,
    `<path d="M0 190H384M0 209H384M0 236H384M192 162L10 240M192 162L110 240M192 162L274 240M192 162L374 240" stroke="#483665" fill="none"/><g fill="${accent}">${[0,1,2,3,4].map(i=>`<path d="M${56+i*57} 52h21v8h7v15h-7v-7h-21v7h-7V60h7z"/>`).join('')}</g><path d="M184 185h16v-9h7v22h-30v-13z" fill="#ffcf70"/><rect x="191" y="129" width="3" height="16" fill="#fff3d2"/>`,
    `<path d="M0 182L82 127L136 181L240 105L384 185V240H0Z" fill="#2c2d4b"/><path d="M0 211H384V240H0Z" fill="#35354e"/><path d="M126 211L178 157H214L270 211Z" fill="#776091"/><path d="M166 199h52v9h-52zM173 186h38v12h-38z" fill="${accent}"/><circle cx="178" cy="210" r="6" fill="#111021"/><circle cx="210" cy="210" r="6" fill="#111021"/><path d="M192 159v13M192 179v8" stroke="#ffe5b2" stroke-width="3"/>`
  ];
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="384" height="240" viewBox="0 0 384 240"><rect width="384" height="240" fill="#11152c"/>${stars}${scenes[index%3]}</svg>`;
  return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
}
function render(){
  clearInterval(rotationTimer);
  const match=location.hash.match(/^#period-([2567])(?:\/student\/([^/]+))?$/);
  activePeriod=match?Number(match[1]):2;
  let requested=null;try{requested=match?.[2]?decodeURIComponent(match[2]):null;}catch{}
  activeStudent=rosters[activePeriod].includes(requested)?requested:null;
  if(player.open)closeGame(false);
  document.title=`${activeStudent?activeStudent+'’s games | ':''}Period ${activePeriod} | Oz’s Arcade`;
  document.querySelector('#period-title').textContent=activeStudent?`${activeStudent}’s games`:`Period ${activePeriod}`;
  document.querySelector('#gallery-eyebrow').textContent=activeStudent?'PICK A GAME TO PLAY':'CHOOSE YOUR NEXT CREATOR';
  const back=document.querySelector('#back-to-period');
  back.hidden=!activeStudent;back.href=`#period-${activePeriod}`;back.textContent=`← Period ${activePeriod} students`;
  document.querySelectorAll('[data-period]').forEach(a=>{const selected=Number(a.dataset.period)===activePeriod;a.classList.toggle('active',selected);if(selected)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  grid.replaceChildren();
  const empty=document.querySelector('#empty');
  empty.hidden=true;previewToggle.hidden=true;
  if(activeStudent){
    const list=studentGames(activeStudent);
    document.querySelector('#game-count').textContent=`${list.length} ${list.length===1?'GAME':'GAMES'} TO EXPLORE`;
    list.forEach((game,index)=>{
      const card=makeCard(game.title,`Play ${game.title}`,index,pictureFor(game,index),'BY '+activeStudent.toUpperCase(),'PLAY GAME ↗');
      card.addEventListener('click',()=>openGame(activeStudent,game,card));grid.append(card);
    });
    if(!list.length){empty.hidden=false;empty.querySelector('h3').textContent=`${activeStudent}’s games are coming soon.`;empty.querySelector('p').textContent='Check back to see what this creator makes.';}
  }else{
    document.querySelector('#game-count').textContent=`${rosters[activePeriod].length} CREATORS · ALL IMAGINATION`;
    const rotating=[];
    rosters[activePeriod].forEach((name,index)=>{
      const list=studentGames(name),picture=pictureFor(list[0],index);
      const card=makeCard(name,`View ${name}’s games`,index,picture,list.length?`${list.length} ${list.length===1?'GAME':'GAMES'}`:'COMING SOON!','VIEW GAMES ↗');
      if(list.length>1){
        const counter=document.createElement('span');counter.className='slide-count';counter.textContent=`1 / ${list.length}`;picture.append(counter);
        rotating.push({card,picture,list,counter,current:0});
      }
      card.addEventListener('click',()=>{location.hash=studentLink(activePeriod,name);});grid.append(card);
    });
    previewToggle.hidden=!rotating.length;
    previewToggle.textContent=previewsPaused?'Play previews':'Pause previews';
    rotationTimer=setInterval(()=>{
      if(previewsPaused||document.hidden||player.open)return;
      rotating.forEach(item=>{
        if(item.card.matches(':hover')||item.card.contains(document.activeElement))return;
        item.current=(item.current+1)%item.list.length;
        const game=item.list[item.current],img=item.picture.querySelector('img');
        img.src=game.screenshot||thumbnail(item.current);img.alt=game.previewAlt||(game.screenshot?`${game.title} screenshot`:'Illustrated placeholder game preview');
        const badge=item.picture.querySelector('.preview-badge');if(badge)badge.remove();
        if(!game.screenshot){const badge=document.createElement('span');badge.className='preview-badge';badge.textContent='PREVIEW COMING SOON';item.picture.append(badge);}
        item.counter.textContent=`${item.current+1} / ${item.list.length}`;
      });
    },4000);
  }
document.dispatchEvent(new Event('arcade-render'));
}
function openGame(name,game,card){
  previousFocus=card;
  document.querySelector('#player-title').textContent=game.title;
  document.querySelector('#player-period').textContent=`PERIOD ${activePeriod} / ${name.toUpperCase()}`;
  const stage=document.querySelector('#game-stage');stage.replaceChildren();
  const frame=document.createElement('iframe');frame.title=`${game.title} by ${name}`;
  frame.setAttribute('sandbox','allow-scripts allow-pointer-lock');frame.allow='fullscreen; gamepad';stage.append(frame);if(window.loadPackedArcadeGame)window.loadPackedArcadeGame(frame,game.url);else frame.src=game.url;
  player.showModal();document.body.style.overflow='hidden';document.querySelector('#close-player').focus();
}
function closeGame(restoreFocus=true){player.close();document.querySelector('#game-stage').replaceChildren();document.body.style.overflow='';if(restoreFocus)previousFocus?.focus();}
function escapeHandler(e){if(e.key==='Escape'&&player.open){e.preventDefault();closeGame();}}
document.querySelector('#close-player').addEventListener('click',()=>closeGame());
player.addEventListener('cancel',e=>{e.preventDefault();closeGame();});
document.addEventListener('keydown',escapeHandler);
window.addEventListener('message',e=>{const frame=document.querySelector('#game-stage iframe');if(frame&&e.source===frame.contentWindow&&e.data?.type==='oz-arcade:close')closeGame();});
previewToggle.addEventListener('click',()=>{previewsPaused=!previewsPaused;render();previewToggle.focus();});
reducedMotion.addEventListener('change',()=>{previewsPaused=reducedMotion.matches;render();});
window.addEventListener('hashchange',()=>{
  render();
  if(activeStudent){document.querySelector('#period-title').focus();}
  else if(previousStudent){const card=[...grid.querySelectorAll('.game-card')].find(card=>card.getAttribute('aria-label')===`View ${previousStudent}’s games`);card?.focus();}
  previousStudent=activeStudent;
});
let previousStudent=null;
render();previousStudent=activeStudent;
