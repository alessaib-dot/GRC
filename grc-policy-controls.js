/* امتثال — سجل السياسات والضوابط الداخلي، نموذج تجريبي مستقل. */
(function(){
'use strict';
const KEY='imtithal_grc_policy_controls_v1';
const types=[['policy','السياسات','Policies'],['control','الضوابط الداخلية','Internal Controls']];
const tr=(ar,en)=>document.documentElement.lang==='en'?en:ar;
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function load(){try{const x=JSON.parse(localStorage.getItem(KEY)||'{}');return x&&typeof x==='object'?x:{}}catch(e){return {}}}
const data=load();for(const [type] of types)if(!Array.isArray(data[type]))data[type]=[];
function save(){try{localStorage.setItem(KEY,JSON.stringify(data))}catch(e){alert(tr('تعذر حفظ السجلات','Unable to save records'))}}
const main=document.querySelector('.main'),footer=main.querySelector('.footer');
const panel=document.createElement('section');panel.className='panel';panel.id='policy-controls';panel.innerHTML='<div class="hero"><span class="pill">GRC · ▣</span><h1 id="pc-title"></h1><p id="pc-subtitle"></p></div><div id="pc-sections"></div>';main.insertBefore(panel,footer);
for(const [root,cls] of [[document.getElementById('desktopNav'),'nav'],[document.getElementById('mobileNav'),'']]){const b=document.createElement('button');b.className=cls;b.type='button';b.dataset.tab='policy-controls';b.addEventListener('click',show);root.appendChild(b)}
function show(){document.querySelectorAll('.panel').forEach(x=>x.classList.toggle('active',x.id==='policy-controls'));document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('active',x.dataset.tab==='policy-controls'));document.getElementById('title').textContent=tr('السياسات والضوابط','Policies & Controls');render();window.scrollTo(0,0)}
function render(){
document.querySelectorAll('[data-tab="policy-controls"]').forEach(x=>x.textContent=tr('▣ السياسات والضوابط','▣ Policies & Controls'));
document.getElementById('pc-title').textContent=tr('السياسات والضوابط الداخلية','Policies & Internal Controls');
document.getElementById('pc-subtitle').textContent=tr('أنشئ سجلات داخلية للسياسات والضوابط، وتابع حالاتها واربطها لاحقًا بالسجلات الأخرى. الاعتماد هنا حالة تجريبية لا يمثل موافقة رسمية.','Create internal policy and control records, track status and link them to other records. Approval status is a demo label, not formal authorization.');
const root=document.getElementById('pc-sections');root.innerHTML='';
for(const [type,ar,en] of types){
const section=document.createElement('div');section.className='card section';const heading=document.createElement('h3');heading.textContent=tr(ar,en)+' ('+data[type].length+')';section.appendChild(heading);
const form=document.createElement('form');form.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;margin:14px 0';
for(const [key,fa,fe] of [['title','العنوان','Title'],['owner','المسؤول','Owner'],['review','تاريخ المراجعة','Review date']]){const label=document.createElement('label');label.className='muted';label.textContent=tr(fa,fe);const inp=document.createElement('input');inp.name=key;inp.type=key==='review'?'date':'text';inp.maxLength=180;inp.required=key==='title';inp.style.cssText='display:block;width:100%;margin-top:7px;padding:11px;background:var(--field-bg,#132c3e);color:inherit;border:1px solid #416071;border-radius:9px';label.appendChild(inp);form.appendChild(label)}
const btn=document.createElement('button');btn.className='btn';btn.type='submit';btn.textContent=tr('إضافة سجل','Add record');form.appendChild(btn);
form.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(form),title=String(f.get('title')||'').trim();if(!title)return;data[type].unshift({id:String(Date.now())+'-'+Math.random().toString(36).slice(2),title,owner:String(f.get('owner')||'').trim(),review:String(f.get('review')||''),status:'draft'});save();render()});
section.appendChild(form);
if(!data[type].length){const empty=document.createElement('div');empty.className='placeholder';empty.textContent=tr('لا توجد سجلات بعد.','No records yet.');section.appendChild(empty)}
for(const record of data[type]){const row=document.createElement('div');row.className='item';row.style.flexWrap='wrap';const description=document.createElement('div');description.innerHTML='<strong>'+esc(record.title)+'</strong><p class="muted">'+esc(record.owner||tr('لم يحدد مسؤول','No owner'))+' · '+esc(record.review||tr('دون تاريخ مراجعة','No review date'))+'</p>';const buttons=document.createElement('div');buttons.className='actions';const select=document.createElement('select');select.style.cssText='background:var(--field-bg,#16374a);color:inherit;border:1px solid #416071;border-radius:9px;padding:8px';for(const [value,sa,se] of [['draft','مسودة','Draft'],['review','قيد المراجعة','Under review'],['approved','معتمد (تجريبي)','Approved (demo)'],['retired','ملغى','Retired']]){const opt=document.createElement('option');opt.value=value;opt.textContent=tr(sa,se);select.appendChild(opt)}select.value=record.status;select.addEventListener('change',()=>{record.status=select.value;save()});const del=document.createElement('button');del.className='btn alt';del.textContent=tr('حذف','Delete');del.addEventListener('click',()=>{if(!confirm(tr('هل تريد حذف السجل؟','Delete this record?')))return;data[type]=data[type].filter(x=>x.id!==record.id);save();render()});buttons.append(select,del);row.append(description,buttons);section.appendChild(row)}
root.appendChild(section)}
}
const oldToggle=toggleLanguage;toggleLanguage=function(){oldToggle();render();if(panel.classList.contains('active'))document.getElementById('title').textContent=tr('السياسات والضوابط','Policies & Controls')};
render();
})();