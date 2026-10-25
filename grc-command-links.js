/* Lightweight command-center live relationship summary and mobile usability. */
(function(){
'use strict';
const tr=(ar,en)=>document.documentElement.lang==='en'?en:ar;
function read(k,f){try{return JSON.parse(localStorage.getItem(k)||'null')??f}catch(e){return f}}
const command=document.getElementById('command');if(!command)return;
const split=command.querySelector('.split');if(!split)return;
const relation=split.querySelectorAll('.card')[1];if(!relation)return;
const placeholder=relation.querySelector('.placeholder');if(!placeholder)return;
const title=relation.querySelector('h3'),button=relation.querySelector('button');
const linksKey='imtithal_grc_links_v1';
function sources(){
 const all=new Map(),m=read('imtithal_grc_modules_v1',{}),p=read('imtithal_grc_policy_controls_v1',{}),demo=read('imtithal_demo_v1',{});
 for(const key of ['governance','risk','audit'])for(const x of (Array.isArray(m[key])?m[key]:[]))all.set(key+':'+x.id,x.title||'—');
 for(const key of ['policy','control'])for(const x of (Array.isArray(p[key])?p[key]:[]))all.set(key+':'+x.id,x.title||'—');
 for(const key of ['controls','tasks','evidence'])for(const [i,x] of (Array.isArray(demo[key])?demo[key]:[]).entries())all.set(key+':'+String(x.id??x.code??i),x.title||x.name||x.description||x.code||'—');
 return all
}
function update(){
 const links=read(linksKey,[]),valid=Array.isArray(links)?links:[],nodes=sources();
 title.textContent=tr('خريطة العلاقات المسجلة','Recorded relationships');
 button.textContent=tr('فتح خريطة العلاقات','Open relationship map');
 placeholder.textContent='';
 if(!valid.length){placeholder.textContent=tr('لم تُسجل علاقات بعد. يمكنك ربط المخاطر والسياسات والضوابط والأدلة يدويًا.','No relationships recorded yet. You can manually link risks, policies, controls and evidence.');return}
 const head=document.createElement('p');head.className='muted';head.textContent=tr('إجمالي العلاقات: ','Total links: ')+valid.length;placeholder.appendChild(head);
 for(const link of valid.slice(-3).reverse()){const item=document.createElement('div');item.className='command-link-line';const a=document.createElement('span'),arrow=document.createElement('span'),b=document.createElement('span');a.textContent=nodes.get(link.from)||tr('سجل محذوف','Deleted record');arrow.textContent=' ↔ ';b.textContent=nodes.get(link.to)||tr('سجل محذوف','Deleted record');item.append(a,arrow,b);placeholder.appendChild(item)}
 if(valid.length>3){const rest=document.createElement('p');rest.className='muted';rest.textContent=tr('و','and ')+(valid.length-3)+tr(' علاقات إضافية',' more links');placeholder.appendChild(rest)}
}
const prevToggle=toggleLanguage;toggleLanguage=function(){prevToggle();update()};
window.addEventListener('storage',update);
const nav=document.querySelector('[data-tab="command"]');if(nav)nav.addEventListener('click',update);
update();
})();