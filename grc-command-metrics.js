/* Command center: display only evaluated risks and actual local action counts. */
(function(){
'use strict';
const tr=(ar,en)=>document.documentElement.lang==='en'?en:ar;
function read(key,fallback){try{return JSON.parse(localStorage.getItem(key)||'null')??fallback}catch(e){return fallback}}
const box=document.createElement('div');box.className='card section';box.id='grc-risk-pulse';box.innerHTML='<h3 id="grp-title"></h3><div class="grid section" id="grp-metrics"></div><p class="muted" id="grp-note"></p>';
const command=document.getElementById('command');if(command){const target=command.querySelector('.card');if(target)target.parentNode.insertBefore(box,target);else command.appendChild(box)}
function draw(){if(!command)return;const modules=read('imtithal_grc_modules_v1',{}),risks=Array.isArray(modules.risk)?modules.risk:[],assessments=read('imtithal_grc_risk_assessments_v1',{}),actions=read('imtithal_grc_actions_v1',[]);
const valid=risks.filter(x=>{const a=assessments[x.id];return a&&['inherentL','inherentI','residualL','residualI'].every(k=>Number.isInteger(a[k])&&a[k]>=1&&a[k]<=5)});
const high=valid.filter(x=>{const a=assessments[x.id];return a.residualL*a.residualI>=15}).length;
const open=(Array.isArray(actions)?actions:[]).filter(x=>x.status!=='done').length;
document.getElementById('grp-title').textContent=tr('مؤشرات GRC من السجلات الفعلية','GRC indicators from recorded data');
document.getElementById('grp-metrics').innerHTML=metric(tr('المخاطر المسجلة','Registered risks'),risks.length,tr('سجلات محلية','Local records'))+metric(tr('المخاطر المقيّمة','Assessed risks'),valid.length,tr('تقييمات مكتملة','Completed assessments'))+metric(tr('المخاطر المتبقية المرتفعة','High residual risks'),high,tr('حسب المصفوفة التجريبية','Illustrative matrix'))+metric(tr('إجراءات مفتوحة','Open actions'),open,tr('تحتاج متابعة','Need follow-up'));
document.getElementById('grp-note').textContent=tr('لا تُحتسب المخاطر غير المقيّمة ضمن المخاطر المرتفعة. هذه بيانات الجهاز الحالي فقط، وليست درجة امتثال أو تقييمًا رسميًا.','Unassessed risks are not counted as high risks. These are device-local records, not an official compliance score or assessment.');
}
const oldToggle=toggleLanguage;toggleLanguage=function(){oldToggle();draw()};
window.addEventListener('imtithal:grc-update',draw);window.addEventListener('storage',draw);document.querySelectorAll('[data-tab="command"]').forEach(b=>b.addEventListener('click',draw));draw();
})();