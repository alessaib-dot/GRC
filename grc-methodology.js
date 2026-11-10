/* Shared GRC operating methodology for website and mobile app. */
(function(){'use strict';
const command=document.getElementById('command');if(!command)return;
const steps=[
['الحوكمة','Governance','grc-governance','هيكل وصلاحيات وسياسات'],
['المخاطر','Risk management','grc-risk','تحديد وتقييم ومعالجة'],
['الامتثال','Compliance','grc-compliance-guide','التشريعات والالتزامات والأدلة'],
['الضوابط','Controls','policy-controls','تصميم وتنفيذ واختبار'],
['التدقيق','Audit','grc-audit','ملاحظات وتوصيات'],
['المتابعة','Monitoring','actions','إجراءات ومسؤوليات ومواعيد']
];
const style=document.createElement('style');style.textContent=`
#grc-methodology{border:1px solid #315b6c;border-radius:16px;padding:18px;background:#10283a;margin:16px 0}
#grc-methodology h3{margin:0 0 6px;font-size:19px}
#grc-methodology p{font-size:13px;line-height:1.7;opacity:.8;margin:0 0 12px}
#grc-methodology-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.grc-method-step{display:flex;flex-direction:column;text-align:start;gap:5px;padding:13px;border:1px solid #3b6473;border-radius:12px;background:#153649;color:inherit;cursor:pointer;min-height:92px}
.grc-method-step:focus-visible{outline:3px solid #3ee0cd;outline-offset:2px}
.grc-method-step b{font-size:14px}.grc-method-step small{font-size:11px;opacity:.8;line-height:1.5}
.grc-method-step span{font-size:11px;color:#55decc}
body[data-theme="light"] #grc-methodology{background:#f3fafa;color:#183449}
body[data-theme="light"] .grc-method-step{background:#fff;color:#183449}
@media(max-width:700px){#grc-methodology{padding:13px;margin:5px 0}#grc-methodology h3{font-size:16px}#grc-methodology-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.grc-method-step{padding:11px;min-height:78px}.grc-method-step b{font-size:12px}.grc-method-step small{font-size:10px}}
`;document.head.appendChild(style);
const host=document.createElement('section');host.id='grc-methodology';host.className='section';host.setAttribute('aria-label','GRC operating methodology');
const title=document.createElement('h3');const desc=document.createElement('p');const grid=document.createElement('div');grid.id='grc-methodology-grid';host.append(title,desc,grid);
const pulse=command.querySelector('.command-pulse');if(pulse)pulse.insertAdjacentElement('afterend',host);else command.append(host);
function render(){const en=document.documentElement.lang==='en';title.textContent=en?'Integrated GRC operating model':'منهجية GRC المتكاملة';desc.textContent=en?'One workflow: govern → assess risks → identify obligations → test controls → audit → follow up.':'مسار عمل مترابط: الحوكمة ← المخاطر ← الامتثال ← الضوابط ← التدقيق ← المتابعة. الأرقام والنتائج تُستمد من السجلات، لا من افتراضات.';grid.replaceChildren();steps.forEach(([ar,name,dest,detail],i)=>{const b=document.createElement('button');b.type='button';b.className='grc-method-step';const num=document.createElement('span');num.textContent=String(i+1).padStart(2,'0');const strong=document.createElement('b');strong.textContent=en?name:ar;const small=document.createElement('small');small.textContent=en?'Open section':detail;b.append(num,strong,small);b.onclick=()=>{const nav=document.querySelector('[data-tab="'+dest+'"]');if(nav)nav.click();else window.alert(en?'This section is not available yet.':'هذا القسم غير متاح حاليًا.')};grid.appendChild(b)})}
new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});render();
})();