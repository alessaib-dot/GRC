/* Imtithal relationship map: local prototype; no automatic regulatory claims. */
(function(){
'use strict';
const KEY='imtithal_grc_links_v1',MODKEY='imtithal_grc_modules_v1';
const t=(ar,en)=>document.documentElement.lang==='en'?en:ar;
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function load(k){try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}}
let links=load(KEY);if(!Array.isArray(links))links=[];
function nodes(){
 const mod=load(MODKEY)||{},demo=load('imtithal_demo_v1')||{};
 const all=[];
 const internal=load('imtithal_grc_policy_controls_v1')||{};
 for(const [key,ar,en] of [['policy','السياسات','Policies'],['control','الضوابط الداخلية','Internal Controls']])for(const x of (Array.isArray(internal[key])?internal[key]:[]))all.push({key:key+':'+x.id,group:key,label:x.title||'—',groupLabel:t(ar,en)});
 for(const [key,ar,en] of [['governance','الحوكمة','Governance'],['risk','المخاطر','Risks'],['audit','التدقيق','Audit']]){
  const records=Array.isArray(mod[key])?mod[key]:[];
  records.forEach(x=>all.push({key:key+':'+x.id,group:key,label:x.title||'—',groupLabel:t(ar,en)}));
 }
 for(const [key,ar,en] of [['controls','الالتزامات والضوابط','Obligations & Controls'],['tasks','الإجراءات','Actions'],['evidence','الأدلة','Evidence']]){
  const records=Array.isArray(demo[key])?demo[key]:[];
  records.forEach((x,i)=>all.push({key:key+':'+String(x.id??x.code??i),group:key,label:x.title||x.name||x.description||x.code||('#'+(i+1)),groupLabel:t(ar,en)}));
 }
 return all;
}
function persist(){try{localStorage.setItem(KEY,JSON.stringify(links))}catch(e){alert(t('تعذر حفظ الروابط','Could not save links'))}}
const panel=document.createElement('section');panel.id='relationships';panel.className='panel';panel.innerHTML='<div class="hero"><span class="pill">GRC · ◇</span><h1 id="rel-heading"></h1><p id="rel-desc"></p></div><div class="card section"><h3 id="rel-add-title"></h3><form id="rel-form" class="section" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px"><label class="muted" id="rel-source-label"><select id="rel-source" required style="display:block;width:100%;margin-top:8px;padding:11px;background:#132c3e;color:white;border:1px solid #416071;border-radius:9px"></select></label><label class="muted" id="rel-target-label"><select id="rel-target" required style="display:block;width:100%;margin-top:8px;padding:11px;background:#132c3e;color:white;border:1px solid #416071;border-radius:9px"></select></label><button class="btn" type="submit" id="rel-add"></button></form><p class="muted" id="rel-hint"></p></div><div class="card section"><h3 id="rel-list-title"></h3><div id="rel-list"></div></div>';
document.querySelector('.main').insertBefore(panel,document.querySelector('.main .footer'));
for(const id of ['rel-source-label','rel-target-label']){const el=document.getElementById(id);el.insertBefore(document.createTextNode(''),el.firstChild)}
for(const [root,klass] of [[document.getElementById('desktopNav'),'nav'],[document.getElementById('mobileNav'),'']]){
 const b=document.createElement('button');b.type='button';b.dataset.tab='relationships';b.className=klass;b.addEventListener('click',show);root.appendChild(b)
}
function show(){document.querySelectorAll('.panel').forEach(x=>x.classList.toggle('active',x.id==='relationships'));document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('active',x.dataset.tab==='relationships'));document.getElementById('title').textContent=t('خريطة العلاقات','Relationship Map');render();window.scrollTo(0,0)}
function render(){
 const n=nodes(),byId=new Map(n.map(x=>[x.key,x]));
 document.querySelectorAll('[data-tab="relationships"]').forEach(x=>x.textContent=t('⤳ خريطة العلاقات','⤳ Relationship Map'));
 document.getElementById('rel-heading').textContent=t('خريطة العلاقات','Relationship Map');
 document.getElementById('rel-desc').textContent=t('اربط السجلات التي راجعتها يدويًا: الخطر والالتزام والضابط والدليل والإجراء. الروابط هنا تجريبية وليست استنتاجات تنظيمية.','Manually link reviewed records: risks, obligations, controls, evidence and actions. These are demo links, not regulatory conclusions.');
 document.getElementById('rel-add-title').textContent=t('إضافة علاقة بين سجلين','Link two records');
 document.getElementById('rel-source-label').firstChild.nodeValue=t('السجل الأول','Source record');
 document.getElementById('rel-target-label').firstChild.nodeValue=t('السجل المرتبط','Related record');
 document.getElementById('rel-add').textContent=t('حفظ العلاقة','Save relationship');
 document.getElementById('rel-hint').textContent=t('اختر سجلين مختلفين. أضف السجلات أولًا من الوحدات المناسبة؛ لا ننشئ علاقات تلقائية.','Select two different records. Add records in their modules first; no links are generated automatically.');
 document.getElementById('rel-list-title').textContent=t('العلاقات المسجلة','Recorded links')+' ('+links.length+')';
 const options='<option value="">'+t('اختر سجلًا','Select a record')+'</option>'+n.map(x=>'<option value="'+esc(x.key)+'">'+esc(x.groupLabel)+' — '+esc(x.label)+'</option>').join('');
 for(const id of ['rel-source','rel-target']){const sel=document.getElementById(id),prev=sel.value;sel.innerHTML=options;if(n.some(x=>x.key===prev))sel.value=prev}
 const list=document.getElementById('rel-list');list.innerHTML='';
 if(!links.length){list.innerHTML='<div class="placeholder">'+t('لا توجد علاقات بعد.','No links yet.')+'</div>';return}
 links.forEach(link=>{
  const a=byId.get(link.from),b=byId.get(link.to),line=document.createElement('div');line.className='item';line.style.flexWrap='wrap';
  const label=document.createElement('div');label.innerHTML='<strong>'+esc(a?a.label:t('سجل محذوف','Deleted record'))+' ⟷ '+esc(b?b.label:t('سجل محذوف','Deleted record'))+'</strong><p class="muted">'+esc(a?a.groupLabel:'—')+' ↔ '+esc(b?b.groupLabel:'—')+'</p>';
  const del=document.createElement('button');del.className='btn alt';del.textContent=t('حذف العلاقة','Remove link');del.addEventListener('click',()=>{links=links.filter(x=>x.id!==link.id);persist();render()});
  line.append(label,del);list.appendChild(line)
 })
}
document.getElementById('rel-form').addEventListener('submit',e=>{
 e.preventDefault();const from=document.getElementById('rel-source').value,to=document.getElementById('rel-target').value;
 if(!from||!to||from===to){alert(t('اختر سجلين مختلفين','Select two different records'));return}
 if(links.some(x=>(x.from===from&&x.to===to)||(x.from===to&&x.to===from))){alert(t('العلاقة مسجلة مسبقًا','Link already exists'));return}
 links.push({id:String(Date.now())+'-'+Math.random().toString(36).slice(2),from,to});persist();render()
});
const prevToggle=toggleLanguage;toggleLanguage=function(){prevToggle();render();if(panel.classList.contains('active'))document.getElementById('title').textContent=t('خريطة العلاقات','Relationship Map')};
render();
})();