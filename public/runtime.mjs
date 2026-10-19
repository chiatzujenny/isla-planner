import {offlineReply} from './offline.mjs';
import {searchPublicPlaces} from './place-search.mjs';
export const staticHosting=!!import.meta.env?.STATIC_HOSTING;
// Build replaces the flag above; API paths stay relative to the app folder.
export async function assistantReply(input,{hosted=staticHosting,fetchImpl=fetch}={}){
 if(hosted)return offlineReply(input);
 try{const response=await fetchImpl('./api/assist',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(input),signal:AbortSignal.timeout(45000)});if(!response.ok)throw new Error();return await response.json();}catch{return {...offlineReply(input),fallback:true};}
}
export async function assistantStatus({hosted=staticHosting,fetchImpl=fetch}={}){if(hosted)return {aiConfigured:false,mode:'offline'};try{const r=await fetchImpl('./api/status');if(!r.ok)throw new Error();return await r.json();}catch{return {aiConfigured:false,mode:'offline'};}}
export async function findPlaces(city,type,{hosted=staticHosting,fetchImpl=fetch}={}){if(hosted)return searchPublicPlaces(city,type,{fetchImpl});const r=await fetchImpl('./api/places?city='+encodeURIComponent(city)+'&type='+encodeURIComponent(type),{signal:AbortSignal.timeout(42000)});if(!r.ok)throw new Error('SEARCH_UNAVAILABLE');return await r.json();}
