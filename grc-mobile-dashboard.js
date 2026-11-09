/* Mobile-first presentation layer; preserves underlying records and navigation. */
(function(){'use strict';
const style=document.createElement('style');style.textContent=`
@media(max-width:700px){
.main{padding:14px 14px calc(100px + env(safe-area-inset-bottom))!important}
.top{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:8px!important;padding:6px 0 12px!important;margin-bottom:14px!important}
.top .eyebrow{font-size:11px!important}
.top h2{font-size:22px!important;margin:2px 0!important}
.top>.actions{display:flex!important;flex-wrap:nowrap!important;align-items:center!important;gap:6px!important;max-width:54%!important}
.top>.actions .pill{display:none!important}
.top>.actions .btn{font-size:11px!important;padding:9px 8px!important;min-height:40px!important;white-space:nowrap}
#command{display:none}#command.active{display:flex!important;flex-direction:column!important;gap:12px}
#command>.section,#command>.card{margin-top:0!important}
#command .command-hero{order:6!important;min-height:0!important;padding:18px!important;border-radius:15px!important}
#command .command-hero h1{font-size:20px!important;line-height:1.5!important;margin:5px 0!important}
#command .command-hero p{font-size:12px!important;line-height:1.7!important;margin:5px 0!important}
#command .command-hero .actions{display:none!important}
#command .command-banner{display:none!important}
#command #grc-risk-pulse{order:0!important;padding:15px!important}
#command #grc-risk-pulse h3{font-size:16px!important;margin-bottom:12px!important}
#command #grp-metrics{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:9px!important}
#command #grp-metrics>.card{padding:13px!important;min-height:95px!important}
#command #grp-metrics .metric{font-size:27px!important;margin:5px 0!important}
#command #grp-metrics .muted{font-size:11px!important}
#command #grp-note{font-size:11px!important;line-height:1.6!important}
#command .command-pulse{order:1!important;padding:15px!important}
#command .command-shortcuts{order:2!important}
#command #commandMetrics{order:3!important}
#command #grc-start{order:4!important;margin:4px 0!important;padding:0!important}
#command #grc-start>h2{font-size:17px!important}
#command #grc-start>p,#command #grc-start .grc-start-note{display:none!important}
#command #grc-start .grc-start-grid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important;margin-top:10px!important}
#command #grc-start .grc-start-card{min-height:68px!important;padding:12px!important}
#command #grc-start .grc-start-card span{display:none!important}
#command #grc-start .grc-start-card strong{font-size:12px!important;margin:0!important}
#command>.split{order:5!important;display:block!important}\n#command>.split>.card{margin-bottom:10px!important}\n#command>.split>.card h3{font-size:16px!important;margin:0 0 10px!important}\n#command>.split>.card .placeholder{padding:12px!important;font-size:12px!important;line-height:1.6!important}\n#command>.split>.card .btn{min-height:42px!important;padding:9px 12px!important;font-size:12px!important}\n#command #priorities .item{padding:9px 0!important;gap:7px!important}\n#command #priorities .item strong{font-size:12px!important}\n#command #priorities .item p{font-size:11px!important}\n#command #priorities .item .tag{font-size:11px!important}\n#command .command-pulse-row{min-height:44px!important;padding:10px 4px!important;font-size:12px!important}\n#command .command-shortcuts{gap:8px!important}\n#command .command-shortcut{min-height:75px!important;padding:10px!important}\n#command .command-shortcut strong{font-size:12px!important}\n#command .command-shortcut small{font-size:10px!important}\n#command #commandMetrics>.card{padding:12px!important}\n#command #commandMetrics .metric{font-size:23px!important}
#command .grc-help{display:none!important}\n#command>.split>.card:nth-child(2) .placeholder{max-height:85px!important;overflow:hidden!important}\n#command>.split>.card:nth-child(2) .btn{margin-top:9px!important}
#command .grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
#command .card{overflow-wrap:anywhere}
#grc-mobile-sheet{max-height:85dvh!important}
#grc-mobile-sheet .grc-drawer-grid button{min-height:52px!important}
.bottom{backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
.bottom button{font-weight:650!important}
.panel .hero h1{font-size:23px!important}
.panel .hero{padding:18px!important}
.panel .card{padding:14px!important}
.panel .item{flex-wrap:wrap}
}
`;document.head.appendChild(style);
const command=document.getElementById('command');
if(!command)return;
function place(){const pulse=command.querySelector('#grc-risk-pulse');if(pulse&&command.firstElementChild!==pulse)command.prepend(pulse);}
place();
const observer=new MutationObserver(()=>{if(command.querySelector('#grc-risk-pulse')&&command.firstElementChild!==command.querySelector('#grc-risk-pulse'))place()});
observer.observe(command,{childList:true});
})();