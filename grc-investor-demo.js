/* GRC investor demo fixture: explicit opt-in, never overwrites existing records. */
(function(){
'use strict';
const tr=(a,b)=>document.documentElement.lang==='en'?b:a;
const demoTag='[DEMO] ';
const defs=[
['imtithal_grc_modules_v1',{
 governance:[{id:'demo-gov-1',title:demoTag+'اعتماد إطار الحوكمة المؤسسية',owner:'لجنة الحوكمة (افتراضي)',due:'2026-12-15',status:'pending'},{id:'demo-gov-2',title:demoTag+'مراجعة مصفوفة تفويض الصلاحيات',owner:'الإدارة التنفيذية (افتراضي)',due:'2026-11-30',status:'draft'}],
 risk:[{id:'demo-risk-1',title:demoTag+'احتمال وصول غير مصرح به للبيانات',owner:'مسؤول أمن المعلومات (افتراضي)',impact:'تعطل الخدمة وتسرب البيانات',status:'assessing'},{id:'demo-risk-2',title:demoTag+'تعطل مزود خدمة حرج',owner:'مدير التقنية (افتراضي)',impact:'انقطاع العمليات',status:'treated'},{id:'demo-risk-3',title:demoTag+'قصور توثيق إجراءات العمل',owner:'مدير العمليات (افتراضي)',impact:'تفاوت جودة التنفيذ',status:'identified'}],
 audit:[{id:'demo-audit-1',title:demoTag+'عدم اكتمال مراجعات صلاحيات المستخدمين',owner:'فريق التقنية (افتراضي)',due:'2026-11-20',status:'open'},{id:'demo-audit-2',title:demoTag+'الحاجة لتوثيق اختبارات النسخ الاحتياطي',owner:'مدير البنية التحتية (افتراضي)',due:'2026-12-10',status:'progress'}]
}],
['imtithal_grc_policy_controls_v1',{
 policy:[{id:'demo-policy-1',title:demoTag+'سياسة حوكمة البيانات | Data Governance Policy',owner:'مالك البيانات (افتراضي)',review:'2027-01-15',status:'draft',bodyAr:'مسودة استرشادية: تصنيف البيانات وتحديد الملاك ومراجعة الصلاحيات.',bodyEn:'Illustrative draft: classify data, assign owners, and review access.'},{id:'demo-policy-2',title:demoTag+'سياسة الاستخدام المسؤول للذكاء الاصطناعي | Responsible AI Policy',owner:'لجنة الذكاء الاصطناعي (افتراضي)',review:'2027-02-01',status:'review',bodyAr:'مسودة استرشادية: تقييم المخاطر والإشراف البشري.',bodyEn:'Illustrative draft: risk assessment and human oversight.'}],
 control:[{id:'demo-control-1',title:demoTag+'مراجعة صلاحيات الوصول ربع السنوية',owner:'أمن المعلومات (افتراضي)',review:'2026-12-31',status:'review'},{id:'demo-control-2',title:demoTag+'اختبار استعادة النسخ الاحتياطية',owner:'تقنية المعلومات (افتراضي)',review:'2026-12-20',status:'draft'}]
}],
['imtithal_grc_risk_assessments_v1',{'demo-risk-1':{inherentL:4,inherentI:5,residualL:3,residualI:5},'demo-risk-2':{inherentL:4,inherentI:4,residualL:2,residualI:3}}],
['imtithal_grc_actions_v1',[
{id:'demo-action-1',title:demoTag+'إكمال مراجعة الصلاحيات',owner:'مسؤول أمن المعلومات (افتراضي)',due:'2026-11-15',source:'risk:demo-risk-1',status:'open'},
{id:'demo-action-2',title:demoTag+'اختبار خطة استمرارية الخدمة',owner:'مدير التقنية (افتراضي)',due:'2026-12-12',source:'risk:demo-risk-2',status:'progress'},
{id:'demo-action-3',title:demoTag+'تحديث سياسة حوكمة البيانات',owner:'مالك البيانات (افتراضي)',due:'2026-12-28',source:'policy:demo-policy-1',status:'done'}]],
['imtithal_grc_links_v1',[
{id:'demo-link-1',from:'risk:demo-risk-1',to:'control:demo-control-1'},
{id:'demo-link-2',from:'audit:demo-audit-1',to:'risk:demo-risk-1'},
{id:'demo-link-3',from:'policy:demo-policy-1',to:'control:demo-control-1'},
{id:'demo-link-4',from:'risk:demo-risk-2',to:'control:demo-control-2'}]]
];
function read(k){try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}}
function merge(k,fixture){const existing=read(k);if(Array.isArray(fixture)){const arr=Array.isArray(existing)?existing:[];const ids=new Set(arr.map(x=>x.id));return [...arr,...fixture.filter(x=>!ids.has(x.id))]}
const obj=existing&&typeof existing==='object'&&!Array.isArray(existing)?existing:{};const out={...obj};for(const [key,value] of Object.entries(fixture)){if(Array.isArray(value)){const old=Array.isArray(out[key])?out[key]:[];const ids=new Set(old.map(x=>x.id));out[key]=[...old,...value.filter(x=>!ids.has(x.id))]}else if(!(key in out))out[key]=value}return out}
function loadDemo(){if(!confirm(tr('سيتم إضافة سجلات افتراضية موسومة DEMO إلى بيانات هذا المتصفح دون حذف السجلات الحالية. هل تريد المتابعة؟','Add clearly marked DEMO records to this browser without deleting existing records?')))return;
try{const prepared=defs.map(([k,v])=>[k,JSON.stringify(merge(k,v))]);for(const [k,v] of prepared)localStorage.setItem(k,v);localStorage.setItem('grc_investor_demo_loaded_v1','true');location.reload()}catch(e){alert(tr('تعذر حفظ بيانات العرض. تحقق من مساحة التخزين.','Unable to save demo data. Check browser storage.'))}}
const host=document.querySelector('.main .top .actions');if(!host)return;const button=document.createElement('button');button.type='button';button.className='btn';button.style.whiteSpace='nowrap';button.addEventListener('click',loadDemo);host.prepend(button);
const label=document.createElement('span');label.className='pill';label.style.background='#493421';label.style.color='#ffd8a2';host.prepend(label);
function render(){button.textContent=tr('تحميل بيانات المستثمر التجريبية','Load investor demo data');label.textContent=tr('GRC · نموذج استثماري تجريبي','GRC · Investor demo prototype')}
const old=toggleLanguage;toggleLanguage=function(){old();render()};render();
})();