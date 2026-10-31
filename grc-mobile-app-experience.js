(function(){'use strict';
const css=document.createElement('style');css.textContent=`
#grc-mobile-more,#grc-mobile-drawer{display:none}
@media(max-width:700px){
html,body{max-width:100%;overflow-x:hidden}
.main{padding-bottom:calc(92px + env(safe-area-inset-bottom))!important}
.top{align-items:flex-start}.top .actions{max-width:100%}
.bottom{display:flex!important;justify-content:space-around!important;overflow:visible!important;gap:2px!important;padding:7px 7px max(9px,env(safe-area-inset-bottom))!important;box-shadow:0 -5px 25px #0003}
.bottom>button{display:none!important}
.bottom>button[data-tab="command"],.bottom>button[data-tab="grc-compliance-guide"],.bottom>button[data-tab="grc-risk"]{display:flex!important;flex:1 1 0!important;min-width:0!important;flex-direction:column;align-items:center;justify-content:center;font-size:11px!important;line-height:1.5;white-space:normal!important;min-height:48px;padding:6px 3px!important}
#grc-mobile-more{display:flex!important;flex:1 1 0;min-width:0;align-items:center;justify-content:center;flex-direction:column;border:0;background:transparent;color:#b8d0db;font:inherit;font-size:12px;min-height:48px}
#grc-mobile-more[aria-expanded="true"]{color:#4be1ce}
#grc-mobile-drawer{position:fixed;z-index:120;inset:0;background:#0009;align-items:flex-end}
#grc-mobile-drawer.open{display:flex}
#grc-mobile-sheet{width:100%;max-height:76dvh;overflow-y:auto;background:#102638;color:#f2f8fa;border-radius:22px 22px 0 0;padding:18px 16px calc(24px + env(safe-area-inset-bottom));box-shadow:0 -10px 35px #0005}
#grc-mobile-sheet h3{margin:4px 0 15px}
#grc-mobile-sheet .grc-drawer-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
#grc-mobile-sheet .grc-drawer-grid button{background:#1b3b4c;color:inherit;border:1px solid #365a6d;border-radius:11px;padding:15px 9px;min-height:54px;font:inherit;text-align:center}
#grc-mobile-sheet .grc-close{background:transparent;color:inherit;border:0;float:left;font:inherit;font-size:22px;min-width:44px;min-height:44px}
#grc-mobile-sheet button:focus-visible,#grc-mobile-more:focus-visible{outline:2px solid #4be1ce}
.panel .card,.panel .hero{max-width:100%}
.panel input,.panel textarea,.panel select{max-width:100%;font-size:16px!important}
.panel .grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.panel .split{grid-template-columns:1fr}
.panel table{display:block;overflow-x:auto;max-width:100%}
#grc-start .grc-start-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
}
@media(max-width:390px){#grc-start .grc-start-grid{grid-template-columns:1fr!important}}
`;document.head.appendChild(css);
const bottom=document.getElementById('mobileNav');if(!bottom)return;
const more=document.createElement('button');more.id='grc-mobile-more';more.type='button';more.textContent='☰ المزيد';more.setAttribute('aria-haspopup','dialog');more.setAttribute('aria-expanded','false');bottom.appendChild(more);
const overlay=document.createElement('div');overlay.id='grc-mobile-drawer';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','جميع أقسام GRC');const sheet=document.createElement('div');sheet.id='grc-mobile-sheet';const close=document.createElement('button');close.className='grc-close';close.type='button';close.textContent='×';close.setAttribute('aria-label','إغلاق القائمة');const heading=document.createElement('h3');heading.textContent='جميع الأقسام';const grid=document.createElement('div');grid.className='grc-drawer-grid';sheet.append(close,heading,grid);overlay.appendChild(sheet);document.body.appendChild(overlay);
let previousFocus=null;function hide(){overlay.classList.remove('open');more.setAttribute('aria-expanded','false');document.body.style.overflow='';(previousFocus||more).focus()}function show(){previousFocus=document.activeElement;populate();overlay.classList.add('open');more.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';close.focus()}more.onclick=show;close.onclick=hide;overlay.onclick=e=>{if(e.target===overlay)hide()};document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('open'))hide()});
function populate(){grid.replaceChildren();const seen=new Set();for(const nav of document.querySelectorAll('#desktopNav [data-tab]')){const tab=nav.dataset.tab;if(!tab||seen.has(tab))continue;seen.add(tab);const b=document.createElement('button');b.type='button';b.textContent=nav.textContent.trim();b.onclick=()=>{hide();nav.click()};grid.appendChild(b)}}
const labels={'command':'⌂ الرئيسية','grc-compliance-guide':'✓ الامتثال','grc-risk':'◇ المخاطر'};function refresh(){for(const [tab,label] of Object.entries(labels)){const b=bottom.querySelector('[data-tab="'+tab+'"]');if(b)b.textContent=label}if(bottom.lastElementChild!==more)bottom.appendChild(more)}
refresh();const observer=new MutationObserver(()=>{observer.disconnect();refresh();observer.observe(bottom,{childList:true,subtree:false})});observer.observe(bottom,{childList:true,subtree:false});
})();