(function(){'use strict';
const css=document.createElement('style');css.textContent=`
:root{font-family:system-ui,-apple-system,"Segoe UI",Tahoma,sans-serif!important}
body{letter-spacing:0;--grc-accent:#12b8aa}
.side{width:248px;background:#0b1725;border-color:#233447;padding:28px 16px}
.brand{font-size:30px;letter-spacing:1.5px;color:#e7f7f7;padding:5px 14px 30px}
.brand:after{content:'Governance · Risk · Compliance';display:block;font-size:10px;font-weight:500;letter-spacing:.1px;color:#89a4b1;margin-top:5px;direction:ltr;text-align:right}
.nav{font-size:14px;font-weight:550;border-radius:10px;padding:12px 14px;margin:3px 0;transition:background .16s}
.nav.active{background:#143b43;color:#e5fffa;border-inline-start:3px solid #25c6b5}
.main{max-width:1360px;padding:30px 36px 50px}
.top{padding-bottom:17px;border-bottom:1px solid #284052;margin-bottom:23px}
.top h2{font-size:21px;letter-spacing:-.3px;margin:5px 0}
.eyebrow{font-size:12px}
.hero{border-radius:18px;padding:33px 35px;background:linear-gradient(120deg,#113e48,#112c40 60%,#1c2940);border-color:#315566}
.hero h1{font-size:clamp(26px,2.6vw,34px);font-weight:750;letter-spacing:-.6px}
.hero p{max-width:760px;line-height:1.9;font-size:14px}
.card{border-radius:14px;border-color:#29465a;box-shadow:0 4px 20px #0000000d}
.btn{border-radius:9px;font-weight:600}
.btn:hover{filter:brightness(1.12)}
.pill{font-weight:600;letter-spacing:.2px}
#command .hero{position:relative;min-height:210px}
#command .hero .actions{margin-top:19px}
#grc-start{background:transparent!important;border:0!important;padding:5px 0!important;margin:30px 0 12px!important}
#grc-start h2{font-size:22px;font-weight:750;margin:0 0 7px}
#grc-start>p{font-size:14px;color:#a8c2d0;line-height:1.8;margin:0}
#grc-start .grc-start-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:13px;margin-top:19px}
#grc-start .grc-start-card{min-height:132px;background:#10283a;border:1px solid #2b4b5d;border-radius:14px;padding:22px;transition:transform .15s,border-color .15s,background .15s;box-shadow:0 5px 20px #00000014}
#grc-start .grc-start-card:hover{transform:translateY(-2px);background:#143445;border-color:#38bcb1}
#grc-start .grc-start-card strong{font-size:16px;margin:5px 0 9px}
#grc-start .grc-start-card span{font-size:13px;line-height:1.8;color:#a8bfcc;opacity:1}
#grc-start .grc-start-note{font-size:12px!important;color:#8aa5b2!important;margin-top:14px!important}
.grc-help{background:#102b38!important;border:1px solid #315b64!important;border-radius:13px!important;padding:15px 19px!important;margin-bottom:18px!important}
.grc-help strong{font-size:14px!important}
.grc-help p{font-size:13px!important;line-height:1.8}
.grc-help small{font-size:11px}
body[data-theme="light"] .brand:after{color:#607f8b}
body[data-theme="light"] #grc-start .grc-start-card{background:#fff;border-color:#d5e2e9;box-shadow:0 5px 20px #203a4d0a}
body[data-theme="light"] #grc-start .grc-start-card:hover{background:#f0faf8;border-color:#32a99c}
body[data-theme="light"] #grc-start .grc-start-card span,body[data-theme="light"] #grc-start>p{color:#536f80}
body[data-theme="light"] .grc-help{background:#f0f8f8!important;border-color:#c9e4e1!important}
@media(max-width:1050px){#grc-start .grc-start-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.main{padding:22px}}
@media(max-width:700px){.main{padding:16px 14px 90px}.hero{padding:23px 20px}#grc-start .grc-start-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}#grc-start .grc-start-card{min-height:120px;padding:15px}#grc-start .grc-start-card strong{font-size:14px}#grc-start .grc-start-card span{font-size:12px}.top{gap:10px}.top .actions{gap:5px}.top .actions .btn{padding:7px 10px;font-size:12px}}
`;document.head.appendChild(css);
const top=document.querySelector('.top');if(top){const old=top.querySelector('a[href="./index.html"]');if(old)old.remove();const eyebrow=top.querySelector('.eyebrow');if(eyebrow)eyebrow.textContent='GRC  /  '+(document.documentElement.lang==='en'?'Interactive workspace':'مساحة عمل تفاعلية');const pill=top.querySelector('.pill');if(pill)pill.textContent='GRC · '+(document.documentElement.lang==='en'?'Demo':'تجريبي')}
const brand=document.querySelector('.brand');if(brand)brand.textContent='GRC';
const command=document.getElementById('command');if(command){const hero=command.querySelector('.hero');if(hero){const badge=hero.querySelector('.pill');if(badge)badge.textContent='GRC  /  OVERVIEW';const heading=hero.querySelector('h1');if(heading)heading.textContent='إدارة الحوكمة والمخاطر والامتثال بوضوح';const p=hero.querySelector('p');if(p)p.textContent='من مكان واحد، راجع المخاطر والمتطلبات والسياسات والإجراءات، وانتقل مباشرة إلى ما يحتاج متابعة. ابدأ بإحدى المهام أدناه.';const actions=hero.querySelector('.actions');if(actions){actions.replaceChildren();const btn=document.createElement('button');btn.className='btn';btn.textContent='استعراض المخاطر';btn.onclick=()=>document.querySelector('[data-tab="grc-risk"]')?.click();actions.appendChild(btn)}}}
const workspace=document.getElementById('workspace');if(workspace){workspace.querySelectorAll('a[href="./index.html"]').forEach(a=>{a.removeAttribute('href');a.textContent='يمكنك إدارة السجلات من الأقسام الموجودة في القائمة';a.style.pointerEvents='none';a.style.opacity='.7'})}
})();