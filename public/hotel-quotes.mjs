import {bookingSearch} from './lodging.mjs';
export const twdUsdReference={twdPerUsd:32.59,asOf:'2026-10-19 14:40 Asia/Taipei',source:'https://rate.bot.com.tw/xrt?Lang=en-US'};
// Rates transcribed from user-provided screenshots; no live Booking availability claim.
export const userHotels=[
 {id:'san-juan-apartments',name:'San Juan Apartments',area:'932 Calle Cecilio Lebron · San Juan 00924',city:'San Juan, Puerto Rico',bathroom:'private',rating:'8.4 / 10 · 截圖未列評論數',ratingEn:'8.4 / 10 · review count not shown',source:bookingSearch({city:'San Juan, Puerto Rico',name:'San Juan Apartments',checkin:'2026-12-20',checkout:'2026-12-25'}),evidence:'user-screenshot',status:'backup',checked:'2026-10-19',note:{zh:'私人衛浴備案：12/20–25 五晚、兩人，65 平方公尺整間公寓、一張加大雙人床、廚房，列有免費私人停車。NT$10,326 已含 NT$2,430 清潔費；另列環境維護費 NT$3,159、稅費 NT$711，明列金額合計 NT$14,196。截圖亦提城市稅，是否還有獨立未計金額待確認。不可退款、入住前付款。比 Las Palomas 大，但費用較高、取消彈性較低，暫列備案。位置及實際屋況待確認。',en:'Private-bathroom backup: Dec 20–25 for two, entire 65 m² apartment, one queen bed, kitchen and listed free private parking. TWD10,326 already includes TWD2,430 cleaning. Add listed environmental fee TWD3,159 and tax TWD711: TWD14,196 in itemized amounts. City tax is also mentioned; confirm whether a separate unpriced amount remains. Non-refundable, payment before arrival. Larger than Las Palomas but more expensive and less flexible; keep as a backup. Location and actual condition remain unverified.'}},
 {id:'palomas',name:'Las Palomas Residences',area:'700 Calle Francisco P. Cortés · San Juan 00924',city:'San Juan, Puerto Rico',bathroom:'private',rating:'8.6 / 10 · 截圖未列評論數',ratingEn:'8.6 / 10 · review count not shown',source:bookingSearch({city:'San Juan, Puerto Rico',name:'Las Palomas Residences',checkin:'2026-12-20',checkout:'2026-12-25'}),evidence:'user-screenshot',status:'keep',checked:'2026-10-19',note:{zh:'私人衛浴優先：12/20–25 五晚，一臥室公寓、40 平方公尺、兩人一張雙人床、廚房與免費私人館內停車。房價 NT$10,286 已含 NT$810 清潔費，另加稅費 NT$853，合計 NT$11,139。12/13 前（不含當日）可免費取消。位置不等同古城或海灘區，請先核對導航及交通成本；實際屋況待確認。',en:'Private-bathroom pick: Dec 20–25, one-bedroom apartment, 40 m², one double bed for two, kitchen and free private on-site parking. TWD10,286 already includes TWD810 cleaning; add TWD853 tax for TWD11,139. Free cancellation before Dec 13 (exclusive). Check the mapped location and transport costs; this is not an Old San Juan or beach-area location guarantee. Actual condition remains unverified.'}},
 {id:'oasis',name:'Oasis Inn - One Way LLC',area:'Santurce / San Juan',city:'San Juan, Puerto Rico',rating:'7.9 / 10 · 797 則評論',ratingEn:'7.9 / 10 · 797 reviews',source:'https://www.booking.com/Share-eKtUOT',duplicateSource:'https://www.booking.com/Share-3AIAa1',evidence:'user-screenshot',status:'keep',note:{zh:'保留：私人雙人房、共用衛浴符合條件。五晚截圖列含一個停車位；評分與房型來自使用者截圖。兩個同名分享項目合併，不重複計價。',en:'Keep: private double room with shared bathroom. Five-night screenshot lists one parking space. Rating and room type from user screenshots. Duplicate named share entries are grouped.'}},
 {id:'isla-verde',name:'Isla Verde By The Beach Guest House',area:'Isla Verde / San Juan',city:'San Juan, Puerto Rico',rating:'8.0 / 10 · 181 則評論',ratingEn:'8.0 / 10 · 181 reviews',source:'https://www.booking.com/hotel/pr/isla-verde-by-the-beach-guest-house.html',evidence:'user-screenshot',status:'keep',note:{zh:'保留：五晚兩人 US$375，經濟三人房、共用衛浴、有兩張床。截圖未列完整日期與稅費；依使用者要求暫按 12/20–25、另加 9% 稅保守估算。兩晚價格另以比例推估，非實際報價。',en:'Keep: five nights for two at US$375, economy triple room with shared bathroom and two beds. Exact dates and taxes are not shown; provisionally assume Dec 20–25 and add 9% tax as requested. Two-night rates are estimates, not quotes.'}},
 {id:'comfortable',name:'Comfortable and Affordable Deal Close to Beach and Rainforest',area:'5 Calle Providencia · 00745',city:'Puerto Rico',rating:'9.0 / 10 · 45 則評論',ratingEn:'9.0 / 10 · 45 reviews',source:'https://www.booking.com/Share-x3QMrAW',evidence:'user-screenshot',status:'keep',note:{zh:'東岸優先比較：12/22–25 三晚 US$238，已包含 US$35 清潔費，勿重複加收；另加 9% 稅。截圖房價不可退款。使用者不喜歡 Sleep Relax 1 的老舊外觀後，改列主要比較對象；實際屋況仍待確認。',en:'Primary east-coast comparison: Dec 22–25 costs US$238, already including US$35 cleaning. Add 9% tax; never add cleaning twice. The rate is non-refundable. Preferred for comparison after the user rejected Sleep Relax 1’s dated appearance; actual condition remains unverified.'}},
 {id:'duerme3',name:'Duerme Relax 3',area:'Fajardo',city:'Fajardo, Puerto Rico',rating:'8.0 / 10 · 22 則評論',ratingEn:'8.0 / 10 · 22 reviews',source:'https://www.booking.com/Share-i0ks0iG',evidence:'user-screenshot',status:'backup',note:{zh:'備案：同在 Fajardo，評分 8.0；不可只因照片風格判斷比較新。三晚不可退款 US$257；可免費取消 US$285，兩者均另加 9% 稅。',en:'Backup in Fajardo, rated 8.0. Photos alone do not establish a newer condition. Three nights cost US$257 non-refundable or US$285 cancellable, each plus 9% tax.'}},
 {id:'sleep1',name:'Sleep Relax 1',area:'Fajardo',city:'Fajardo, Puerto Rico',rating:'9.0 / 10 · 65 則評論',ratingEn:'9.0 / 10 · 65 reviews',source:'https://www.booking.com/Share-n43cry',evidence:'user-screenshot',status:'exclude-preference',note:{zh:'依使用者偏好移出推薦：照片外觀偏舊；12/22–25 東岸三晚價格僅作比較基準，兩人入住的一臥室公寓。停車與未出現在截圖中的其他必要費用仍待確認。',en:'Excluded from recommendations because the user dislikes its dated appearance; retained as a price reference for Dec 22–25. Parking and any mandatory charges absent from the screenshot remain unconfirmed.'}}
].map(x=>({bathroom:['oasis','isla-verde'].includes(x.id)?'shared':x.id==='comfortable'?'private':'unknown',...x,platform:'Booking.com',price:null,availability:'not-live-verified',checked:x.checked??'2026-10-18'}));

export const screenshotQuotes=[
 {id:'san-juan-five',hotelId:'san-juan-apartments',checkin:'2026-12-20',checkout:'2026-12-25',nights:5,adults:2,privateRoom:true,currency:'TWD',base:10326,taxAmount:711,cleaningIncluded:2430,otherMandatoryFees:3159,unpricedFees:['city-tax'],source:'user-screenshot',cancellation:'non-refundable',fx:twdUsdReference,estimated:true},
 {id:'palomas-five',hotelId:'palomas',checkin:'2026-12-20',checkout:'2026-12-25',nights:5,adults:2,privateRoom:true,currency:'TWD',base:10286,taxAmount:853,cleaningIncluded:810,otherMandatoryFees:null,source:'user-screenshot',cancellation:'free-before-2026-12-13',fx:twdUsdReference,estimated:true},
 {id:'oasis-five',hotelId:'oasis',checkin:'2026-12-20',checkout:'2026-12-25',nights:5,adults:2,privateRoom:true,currency:'USD',base:281,taxPercent:9,otherMandatoryFees:null,source:'user-screenshot'},
 {id:'sleep-three',hotelId:'sleep1',checkin:'2026-12-22',checkout:'2026-12-25',nights:3,adults:2,privateRoom:true,currency:'USD',base:225,taxPercent:9,otherMandatoryFees:null,source:'user-screenshot',cancellation:'free-before-2026-12-20'},
 {id:'isla-five-estimate',hotelId:'isla-verde',checkin:'2026-12-20',checkout:'2026-12-25',nights:5,adults:2,privateRoom:true,currency:'USD',base:375,taxPercent:9,taxBasis:'assumed',datesBasis:'assumed-trip',otherMandatoryFees:null,source:'user-screenshot',estimated:true},
 {id:'comfortable-three',hotelId:'comfortable',checkin:'2026-12-22',checkout:'2026-12-25',nights:3,adults:2,privateRoom:true,currency:'USD',base:238,taxPercent:9,cleaningIncluded:35,otherMandatoryFees:null,source:'user-screenshot',cancellation:'non-refundable'},
 {id:'duerme-three-nonref',hotelId:'duerme3',checkin:'2026-12-22',checkout:'2026-12-25',nights:3,adults:2,privateRoom:true,currency:'USD',base:257,taxPercent:9,otherMandatoryFees:null,source:'user-screenshot',cancellation:'non-refundable'},
 {id:'duerme-three-flex',hotelId:'duerme3',checkin:'2026-12-22',checkout:'2026-12-25',nights:3,adults:2,privateRoom:true,currency:'USD',base:285,taxPercent:9,otherMandatoryFees:null,source:'user-screenshot',cancellation:'free-before-2026-12-20'}
];
export function knownQuoteTotal(q){
 if(q.currency==='TWD'){
  if(!Number.isFinite(q.base)||q.base<0||!Number.isFinite(q.taxAmount)||q.taxAmount<0||!Number.isFinite(q.fx?.twdPerUsd)||q.fx.twdPerUsd<=0)throw new Error('INVALID_QUOTE');
  return Math.round((q.base+q.taxAmount+(q.otherMandatoryFees??0))/q.fx.twdPerUsd*100)/100;
 }
 if(q.currency!=='USD'||!Number.isFinite(q.base)||q.base<0||!Number.isFinite(q.taxPercent)||q.taxPercent<0)throw new Error('INVALID_QUOTE');
 return Math.round((q.base*(1+q.taxPercent/100)+(q.otherMandatoryFees??0))*100)/100;
}
export function combinationSummary(){
 const single=screenshotQuotes.find(q=>q.id==='oasis-five'),east=screenshotQuotes.find(q=>q.id==='comfortable-three');
 return {single:knownQuoteTotal(single),east:knownQuoteTotal(east),singleBudgetRemaining:Math.round((450-knownQuoteTotal(single))*100)/100,metroCapFor450:Math.round((450-knownQuoteTotal(east))*100)/100,metroCapToBeatSingle:Math.round((knownQuoteTotal(single)-knownQuoteTotal(east))*100)/100};
}

const round=n=>Math.round(n*100)/100;
export function estimatedMetroTwo(quote){
 // Planning assumption only: prorated five-night total + 20% on this two-night portion.
 if(quote.nights!==5)throw new Error('FIVE_NIGHT_BASIS_REQUIRED');
 const prorated=round(knownQuoteTotal(quote)/5*2),buffer=round(prorated*0.2);
 return {prorated,buffer,total:round(prorated+buffer),estimated:true};
}
export function hotelCombinations(){
 const find=id=>screenshotQuotes.find(q=>q.id===id),rows=[];
 for(const id of ['oasis-five','palomas-five','san-juan-five','isla-five-estimate']){const q=find(id);rows.push({id:q.id,firstHotel:q.hotelId,secondHotel:null,firstTotal:knownQuoteTotal(q),secondTotal:null,total:knownQuoteTotal(q),buffer:0,estimated:!!q.estimated,status:userHotels.find(h=>h.id===q.hotelId).status});}
 for(const metro of ['oasis-five','palomas-five','san-juan-five','isla-five-estimate'])for(const east of ['sleep-three','comfortable-three','duerme-three-nonref','duerme-three-flex']){
  const a=find(metro),b=find(east),two=estimatedMetroTwo(a),total=round(two.total+knownQuoteTotal(b));
  rows.push({id:metro+'+'+east,firstHotel:a.hotelId,secondHotel:b.hotelId,firstTotal:two.total,secondTotal:knownQuoteTotal(b),total,buffer:two.buffer,estimated:true,status:total>450?'over':userHotels.find(h=>h.id===b.hotelId).status,cancellation:b.cancellation});
 }
 return rows.sort((a,b)=>a.total-b.total);
}

export function hotelPriceMarkdown(lang='zh'){
 const zh=lang==='zh',names=id=>userHotels.find(h=>h.id===id).name;
 return '## '+(zh?'住宿總額與推估依據':'Accommodation totals and assumptions')+'\n\n'+(zh?'兩人、五晚、美元。前兩晚未有實際報價，使用五晚均價 × 2，並僅對這筆兩晚金額加 20% 規劃預留；非價格上限。San Juan Apartments 的明列金額為 NT$14,196；城市稅是否另計待確認。Las Palomas 的 NT$11,139 以 1 美元 = NT$32.59 參考換算，非刷卡保證匯率；已含清潔費，不再加稅率。Isla 的日期與 9% 稅均為假設。Comfortable 的 US$35 清潔費已在 US$238 裡，不再加一次。其他未列必付費仍待確認。':'Two guests, five nights, USD. Unquoted two-night stays use the five-night average × 2, plus a 20% planning buffer on that two-night amount only; this is not a price ceiling. San Juan Apartments itemized amounts total TWD14,196; separate city tax remains unconfirmed. Las Palomas TWD11,139 uses a reference TWD32.59 per USD, not a guaranteed card rate; cleaning is included and no extra percentage tax is added. Isla dates and 9% tax are assumed. Comfortable’s US$35 cleaning is already in US$238. Other undisclosed mandatory fees remain unconfirmed.')+'\n\n'+hotelCombinations().map(r=>'- '+names(r.firstHotel)+(r.secondHotel?' (2) + '+names(r.secondHotel)+' (3)':' (5)')+': US$'+r.total.toFixed(2)+' · '+(r.estimated?(zh?'推估':'estimate'):(zh?'截圖列費計算':'screenshot calculation'))+' · '+r.status).join('\n');
}
