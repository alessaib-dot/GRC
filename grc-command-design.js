/* Imtithal command-center visual layer: data-grounded, lightweight, mobile-first. */
(function(){
'use strict';
const tr=(ar,en)=>document.documentElement.lang==='en'?en:ar;
function read(k,f){try{return JSON.parse(localStorage.getItem(k)||'null')??f}catch(e){return f}}
function esc(x){return String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
const command=document.getElementById('command');if(!command)return;
command.classList.add('command-premium');
const hero=command.querySelector('.hero');hero.classList.add('command-hero');
const banner=document.createElement('div');banner.className='command-banner';banner.setAttribute('aria-hidden','true');banner.innerHTML='<div class="command-skyline"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class="command-orbit orbit-one"></span><span class="command-orbit orbit-two"></span>';hero.appendChild(banner);
const strip=document.createElement('div');strip.className='command-shortcuts section';strip.innerHTML='<button class="command-shortcut" data-dest="risk-assessment"><span>◇</span><strong></strong><small></small></button><button class="command-shortcut" data-dest="action-flow"><span>✓</span><strong></strong><small></small></button><button class="command-shortcut" data-dest="policy-controls"><span>▣</span><strong></strong><small></small></button><button class="command-shortcut" data-dest="relationships"><span>⤳</span><strong></strong><small></small></button>';
const grid=command.querySelector('#commandMetrics');grid.parentNode.insertBefore(strip,grid);
for(const b of strip.querySelectorAll('button'))b.addEventListener('click',()=>{const tab=document.querySelector('[data-tab="'+b.dataset.dest+'"]');if(tab)tab.click()});
const split=command.querySelector('.split');const pulse=document.createElement('div');pulse.className='card command-pulse section';pulse.innerHTML='<div class="row"><h3 id="command-pulse-title"></h3><span class="pill" id="command-pulse-status"></span></div><div id="command-pulse-items"></div>';split.parentNode.insertBefore(pulse,split);
const relation=split.querySelectorAll('.card')[1];if(relation){const button=relation.querySelector('button');if(button){button.removeAttribute('onclick');button.addEventListener('click',()=>{const tab=document.querySelector('[data-tab="relationships"]');if(tab)tab.click()})}}
function update(){
const labels=[[tr('تقييم المخاطر','Risk assessment'),tr('الاحتمالية والأثر','Likelihood & impact')],[tr('الإجراءات','Actions'),tr('المتابعة والمعالجة','Tracking & remediation')],[tr('السياسات والضوابط','Policies & controls'),tr('السجلات الداخلية','Internal registers')],[tr('خريطة العلاقات','Relationship map'),tr('الروابط الموثقة يدويًا','Manually recorded links')]];
strip.querySelectorAll('button').forEach((b,i)=>{b.querySelector('strong').textContent=labels[i][0];b.querySelector('small').textContent=labels[i][1]});
const actions=read('imtithal_grc_actions_v1',[]),modules=read('imtithal_grc_modules_v1',{}),assessments=read('imtithal_grc_risk_assessments_v1',{}),links=read('imtithal_grc_links_v1',[]);
const risks=Array.isArray(modules.risk)?modules.risk:[],valid=risks.filter(x=>{const a=assessments[x.id];return a&&['inherentL','inherentI','residualL','residualI'].every(k=>Number.isInteger(a[k])&&a[k]>=1&&a[k]<=5)});
const high=valid.filter(x=>{const a=assessments[x.id];return a.residualL*a.residualI>=15}).length;
const today=new Date();today.setHours(0,0,0,0);const open=Array.isArray(actions)?actions.filter(x=>x.status!=='done'):[],late=open.filter(x=>x.due&&new Date(x.due+'T00:00:00')<today).length;
document.getElementById('command-pulse-title').textContent=tr('نبض امتثال | المتابعة التشغيلية','Imtithal Pulse | Operational follow-up');
document.getElementById('command-pulse-status').textContent=tr('بيانات محلية تجريبية','Local demo data');
const items=[[tr('إجراءات متأخرة','Overdue actions'),late,'action-flow'],[tr('مخاطر متبقية مرتفعة','High residual risks'),high,'risk-assessment'],[tr('مخاطر بانتظار التقييم','Risks awaiting assessment'),risks.length-valid.length,'risk-assessment'],[tr('علاقات مسجلة','Recorded links'),Array.isArray(links)?links.length:0,'relationships']];
const list=document.getElementById('command-pulse-items');list.innerHTML='';
for(const [label,count,dest] of items){const b=document.createElement('button');b.type='button';b.className='command-pulse-row';b.innerHTML='<span>'+esc(label)+'</span><strong>'+count+'</strong>';b.addEventListener('click',()=>{const tab=document.querySelector('[data-tab="'+dest+'"]');if(tab)tab.click()});list.appendChild(b)}
}
const oldToggle=toggleLanguage;toggleLanguage=function(){oldToggle();update()};
window.addEventListener('imtithal:grc-update',update);window.addEventListener('storage',update);
document.querySelectorAll('[data-tab="command"]').forEach(tab=>tab.addEventListener('click',update));
update();
})();