/** Imtithal storage contract. Swap the adapter for a server API later. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ImtithalStorage=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
function assertScope(scope){if(!scope||typeof scope.organizationId!=='string'||!scope.organizationId.trim())throw Error('organizationId required');return scope.organizationId.trim()}
function keyFor(scope,collection){const org=assertScope(scope);if(!/^[a-zA-Z0-9_-]+$/.test(org))throw Error('Invalid organizationId');if(!/^[a-zA-Z0-9_-]+$/.test(collection||''))throw Error('Invalid collection');return 'imtithal:v2:'+org+':'+collection}
function createLocalAdapter(storage){if(!storage||typeof storage.getItem!=='function'||typeof storage.setItem!=='function')throw Error('Storage implementation required');return Object.freeze({
async read(scope,collection){const raw=storage.getItem(keyFor(scope,collection));if(raw===null)return [];const value=JSON.parse(raw);if(!Array.isArray(value))throw Error('Invalid collection data');return value},
async write(scope,collection,records){if(!Array.isArray(records))throw Error('Records must be an array');storage.setItem(keyFor(scope,collection),JSON.stringify(records));return records.length},
async remove(scope,collection){storage.removeItem(keyFor(scope,collection))}
})}
return Object.freeze({keyFor,createLocalAdapter});
});
