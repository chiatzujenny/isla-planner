import {stayNights} from './lodging.mjs';

// Public listing snapshots. No live date-specific prices or availability were obtained.
export const airbnbCandidates=[
 {id:'44121528',name:'Revive Studio Steps to the Beach Near Rainforest',area:'Luquillo',region:'east',rating:'≈ 4.92 / 5',type:{zh:'整間 studio 公寓',en:'Entire studio condo'},note:{zh:'房東描述已翻新；有廚房、Queen 床與場內免費停車。建築無電梯。房況外觀仍需看實拍與近期評論。',en:'Host describes a remodeled studio with a kitchen, queen bed and free on-site parking. No elevator. Check current photos and recent condition reviews.'}},
 {id:'890008972911900731',name:'Cozy Eco Studio · Garage · Near Beach & Airport',area:'San Juan',region:'metro',rating:'≈ 4.91 / 5',type:{zh:'整間 studio，兩人一床一衛浴',en:'Entire studio for two; one bed, one bath'},note:{zh:'房東描述為現代風格，列有私人車庫與自助入住；適合比較都會區五晚或前兩晚。實際屋況未現場核實。',en:'Host describes a modern studio, private garage and self check-in. Compare five metro nights or the first two nights; condition is not independently verified.'}},
 {id:'48959426',name:'Room C with Private Bathroom (shared house)',area:'San Juan',region:'metro',rating:'≈ 4.85 / 5',type:{zh:'私人房＋專用衛浴，共用廚房',en:'Private room and attached bathroom; shared kitchen'},note:{zh:'列有空調與停車。入住時段資訊可能影響下午抵達安排，須確認可否晚入住；並非整間包棟。',en:'AC and parking listed. Confirm late-arrival access because published check-in information may affect your afternoon arrival. Shared home, not an entire property.'}}
].map(x=>({...x,source:'https://www.airbnb.com/rooms/'+x.id,price:null,availability:'unverified',evidence:'public-listing-snapshot',checked:'2026-10-18'}));

export function airbnbLink(candidate,{checkin='2026-12-20',checkout='2026-12-25'}={}){
 stayNights(checkin,checkout);
 const u=new URL(candidate.source);for(const [k,v]of Object.entries({check_in:checkin,check_out:checkout,adults:'2',currency:'USD'}))u.searchParams.set(k,v);return u.href;
}
export function airbnbTargets(){
 return {fiveNightCap:450,fiveNightCostBenchmark:306.29,metroTwoWithComfortable:190.58,eastThreeWithEstimatedOasis:302.98,eastThreeCostBenchmark:259.42};
}
