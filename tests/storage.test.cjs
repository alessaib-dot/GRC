const assert=require('node:assert/strict');const {createLocalAdapter,keyFor}=require('../src/storage.js');
const m=new Map();const adapter=createLocalAdapter({getItem:k=>m.has(k)?m.get(k):null,setItem:(k,v)=>m.set(k,v),removeItem:k=>m.delete(k)});
(async()=>{
const a={organizationId:'company_a'},b={organizationId:'company_b'};
assert.notEqual(keyFor(a,'obligations'),keyFor(b,'obligations'));
await adapter.write(a,'obligations',[{id:'1',name:'example'}]);
assert.deepEqual(await adapter.read(a,'obligations'),[{id:'1',name:'example'}]);
assert.deepEqual(await adapter.read(b,'obligations'),[]);
assert.rejects(()=>adapter.write(a,'obligations',{}));
assert.throws(()=>keyFor({organizationId:'../bad'},'obligations'));
await adapter.remove(a,'obligations');assert.deepEqual(await adapter.read(a,'obligations'),[]);
console.log('Storage adapter tests passed');
})().catch(e=>{console.error(e);process.exitCode=1});
