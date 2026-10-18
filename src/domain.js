/**
 * Imtithal future SaaS domain foundation.
 * Pure business functions: no DOM, storage, auth or network dependencies.
 * A tenantId is a logical boundary only; the backend must enforce isolation.
 */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ImtithalDomain=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const MODULES=Object.freeze([
{id:'compliance',name:'الامتثال',enabled:true},
{id:'governance',name:'الحوكمة',enabled:true,scope:'حوكمة عامة تشمل حوكمة الشركات والبيانات والذكاء الاصطناعي والتقنية وأي مجال آخر'},
{id:'risk',name:'المخاطر',enabled:true},
{id:'audit',name:'التدقيق',enabled:false}
]);
function unique(values){return [...new Set(values.filter(Boolean))]}
function createOrganization(input){if(!input||typeof input.name!=='string'||!input.name.trim())throw Error('Organization name required');return {id:String(input.id||''),name:input.name.trim(),sectors:unique(Array.isArray(input.sectors)?input.sectors:[]),createdAt:input.createdAt||null}}
function createWorkspace(organizationId){if(!organizationId)throw Error('organizationId required');return {organizationId:String(organizationId),modules:MODULES.map(x=>({id:x.id,enabled:x.enabled})),obligations:[],governanceItems:[],evidence:[],tasks:[]}}
function matchSuggestedObligations(sectors,catalog){const chosen=new Set(sectors||[]);return (catalog||[]).filter(x=>Array.isArray(x.sectors)&&x.sectors.some(s=>chosen.has(s))).filter((x,i,all)=>all.findIndex(y=>y.id===x.id)===i).map(x=>({...x,applicability:'pending_review',assessment:'unassessed'}))}
function summarizeApplicability(obligations){const items=obligations||[];return {total:items.length,pending:items.filter(x=>x.applicability==='pending_review').length,applicable:items.filter(x=>x.applicability==='applicable').length,notApplicable:items.filter(x=>x.applicability==='not_applicable').length}}
function governanceCategory(label){return {id:String(label||'').trim().toLowerCase().replace(/\s+/g,'-'),name:String(label||'').trim(),type:'general',requirements:[],owners:[]}}
return Object.freeze({MODULES,unique,createOrganization,createWorkspace,matchSuggestedObligations,summarizeApplicability,governanceCategory});
});
