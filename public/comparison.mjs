import {userHotels,screenshotQuotes,knownQuoteTotal,combinationSummary,hotelPriceMarkdown} from './hotel-quotes.mjs';
import {defaultItems} from './core.mjs';
import {bookingSearch} from './lodging.mjs';

export const context={start:'2026-12-20',end:'2026-12-25',adults:2,nights:5,budget:450,checked:'2026-10-18'};
export const sources={moon:'https://www.timeanddate.com/moon/puerto-rico/san-juan?month=12&year=2026',bio:'https://www.discoverpuertorico.com/article/guide-to-exploring-puerto-ricos-bioluminescent-bays',ferry:'https://www.puertoricoferry.com/en/routes-schedules/ceiba-culebra/'};
export const copy={
 zh:{title:'四個方案，把住宿一起想好。',intro:'12/20 下午抵達 · 12/25 下午離開 · 2 人 · 5 晚住宿上限 US$450（含必要稅費、清潔費與服務費）。私人房間，可共用衛浴。',recommend:'我的首選：C ＋ 先找同一間住五晚',reason:'保留古城、北岸與雨林，再加入 Culebra 海島日；省下螢光灣導覽費，也避開接近滿月時的觀賞落差。先比較 San Juan 都會區五晚的私人房，只有分住後的住宿＋交通確實更划算，才換一次。',plans:'方案比較',schedule:'每日安排',date:'日期',morning:'早上',afternoon:'下午',evening:'晚上',lodging:'每晚住哪裡',single:'同住五晚',split:'換一次：2 晚＋3 晚',singleText:'12/20 入住、12/25 退房：優先找 San Juan 都會區（Santurce／Ocean Park／Isla Verde）的私人房。通常省下搬行李時間；去雨林、北岸與 Ceiba 仍需安排交通。有租車時，把停車費也算進比較。這是搜尋順序，不代表這些區域一定最便宜。',splitText:'12/20–22：San Juan 都會區兩晚；12/22–25：Río Grande／Luquillo／Fajardo 三晚。12/22 北岸玩完再向東移動；後面去雨林、Ceiba 較方便。換一次即可，但分成兩筆訂單可能多收清潔／服務費。12/25 從東岸去機場要預留還車與節日交通時間。',splitBio:'若選 B／D，12/20 晚上先去 Fajardo 再回 San Juan 會增加往返；可以另比首晚住東岸，但會改變搬家次數及成本，不直接當成省錢方案。',strategy:'住宿策略',cap:'預算分配目標，並非報價',singleCap:'五晚總額 ≤ US$450；每房每晚平均 ≤ US$90；每人五晚 ≤ US$225。',splitCap:'兩晚 ≤ US$180 ＋ 三晚 ≤ US$270 只是均分預算的搜尋目標；實際兩筆含費總額合計 ≤ US$450 即可。',moon:'螢光灣日期：12/20 只有相對優勢',moonText:'2026/12/23 是滿月，12/24 接近滿月，月光可能降低螢光的可見度。12/20 月光較少，但仍是接近滿月的亮月夜，兩天都不理想，也不是 12/24「沒有螢光」。20 日下午抵達若航班晚到、取車延誤，可能趕不上導覽；先有確定時間再訂。',island:'C 島或 V 島？',islandText:'這次比較推薦 Culebra：適合把 Flamenco Beach 放進一整天的離島行程。Vieques 的 Mosquito Bay 螢光灣比較適合島上過夜，會多出住宿、接駁與導覽成本；這次的月相與 US$450 住宿預算下，先不列為首選。',ferryText:'Culebra 日必須確認 Ceiba 來回船票與島上接駁。業者建議提前 1 小時到碼頭，航程約 1.5 小時；12 月班次及空位尚未確認。不要把晚上一定搭得到回程船當成既定條件。',shortlist:'住宿候選：品質線索有了，日期總價仍待確認',quoteNotice:'Booking.com 與 Airbnb 即時頁面目前無法存取，因此以下沒有任何一間已核實「12/20–25 有房且含費低於 US$450」。評分來自查詢當下的搜尋索引摘要，可能已變動；連結可自行開啟查價。',unknown:'日期房況／含費總價未確認',quality:'搜尋索引評分',checked:'查詢紀錄：2026/10/17',private:'必須選兩人私人房；不要把宿舍床位價當成房間價。',checkPrice:'帶日期前往查價',source:'評分資料來源',calculator:'把實際結帳總價填進來比較',calcHint:'住宿欄只填兩人、指定入住區間的結帳總額（包含稅、清潔費、服務費）。可退押金另外確認。交通欄填整趟租車／保險／停車／油錢／接駁等估算；同一項只算一次。這是手動試算，不代表已核實或已訂房。',singleCost:'同住五晚 · 12/20–25 住宿總額',cityCost:'分住 · 12/20–22 都會區兩晚總額',eastCost:'分住 · 12/22–25 東岸三晚總額',transportSingle:'同住方案 · 整趟交通估算',transportSplit:'分住方案 · 整趟交通估算',save:'儲存試算',clear:'清除試算',missing:'尚未填完整住宿總額',within:'住宿在 US$450 上限內（手動輸入）',over:'住宿超過 US$450 上限（手動輸入）',stayTotal:'住宿小計',tripTotal:'住宿＋交通估算',transportUnknown:'交通尚未填寫，無法比較整體成本。',notLive:'此結果不含餐飲、門票與活動，亦非已確認報價。',apply:'預覽並套用這個方案',applyTitle:'確認要套用的安排',applyText:'將旅程改為 2026/12/20–25、2 人，並以此方案取代目前活動；收藏保留。套用後可按「復原」。抵達與離境時段為暫定，套用前仍需確認船班與導覽。',applyConfirm:'套用到每日行程',export:'下載中英方案比較',saved:'已儲存手動試算',invalid:'金額需介於 US$0.01–100,000；交通可填 0。留白代表未知。',applied:'已套用方案，可按復原還原',choose:'選擇方案',recommended:'首選',staySearch:'到住宿搜尋',arrival:'下午抵達，休息／取車；實際時間待確認',departure:'前往機場／還車，下午離境；航班時間待確認',rest:'休息，彈性安排',north:'北岸 → 返回住宿；若分住則前往東岸',airport:'留交通與報到緩衝',bioTrip:'Laguna Grande 導覽，須確認報到時間',free:'彈性／休息',ferry:'Ceiba 去程船與接駁',flamenco:'Flamenco Beach 海灘日',returnFerry:'依已訂回程班次返本島',plansNote:'下列比較以同一組日期、兩人出遊為前提；方案花費高低是項目判斷，尚無即時報價。',candidateNote:'品質篩選參考：Booking 約 8 分以上／Airbnb 約 4.8 分以上，再讀近期清潔、隔音與房型評論。分數不能保證住宿體驗。'},
 en:{title:'Four routes, with a place to stay.',intro:'Arrive Dec 20 afternoon · Depart Dec 25 afternoon · 2 adults · 5 nights · US$450 accommodation cap, including mandatory taxes, cleaning and service fees. Private room required; shared bathroom is OK.',recommend:'My pick: C + look for one base for all five nights',reason:'Keep Old San Juan, the north coast and rainforest, then add a Culebra day. Skip the bio-bay tour fee and the risk of disappointing visibility near the full moon. Start with five-night private-room totals in metro San Juan; move once only if the accommodation plus transport total is actually better.',plans:'Compare the options',schedule:'Day-by-day plan',date:'Date',morning:'Morning',afternoon:'Afternoon',evening:'Evening',lodging:'Where to sleep',single:'One base · 5 nights',split:'Move once · 2 + 3 nights',singleText:'Check in Dec 20 and out Dec 25. Start with private rooms in metro San Juan (Santurce / Ocean Park / Isla Verde). One base saves packing time; you still need transport for the rainforest, north coast and Ceiba. Include parking if renting a car. These are search priorities, not a claim that these areas are always cheapest.',splitText:'Dec 20–22: two nights in metro San Juan. Dec 22–25: three nights in Río Grande / Luquillo / Fajardo. Visit the north coast before driving east on Dec 22; the rainforest and Ceiba are then more convenient. Two reservations can add cleaning / service fees. Allow time for holiday traffic and car return on the airport trip from the east on Dec 25.',splitBio:'For B / D, a Dec 20 Fajardo tour followed by a return to San Juan adds driving. An east-coast first night is another quote to compare, but changes the moving plan and may cost more.',strategy:'Accommodation strategy',cap:'Budget targets, not quoted prices',singleCap:'Five-night total ≤ US$450; average ≤ US$90 per room per night; ≤ US$225 per person for five nights.',splitCap:'Two nights ≤ US$180 + three nights ≤ US$270 are even-split search targets. The actual combined all-in total simply needs to stay within US$450.',moon:'Bio bay: Dec 20 is only relatively better',moonText:'The full moon falls on Dec 23, 2026. Dec 24 is very close to it, and bright moonlight can reduce visibility. Dec 20 has less moonlight but is still a bright, nearly full-moon night. Neither date is ideal; Dec 24 does not mean there is no bioluminescence. An afternoon arrival on the 20th leaves flight and car-pickup risks, so confirm timing before booking.',island:'Culebra or Vieques?',islandText:'For this trip, I would choose Culebra for a full Flamenco Beach day. A Mosquito Bay night tour on Vieques is better planned with an island overnight, adding accommodation, transfers and tour costs. Given the moon phase and US$450 lodging cap, Vieques is not my first choice this time.',ferryText:'Confirm Ceiba return ferry tickets and Culebra ground transport. The operator advises arriving one hour early and lists an approximately 1.5-hour crossing. December schedules and availability are not confirmed. Do not assume an evening return sailing will be available.',shortlist:'Accommodation shortlist: quality clues, unconfirmed totals',quoteNotice:'Live Booking.com and Airbnb pages are currently inaccessible. None of these properties has a verified Dec 20–25 availability or all-in total under US$450. Ratings are search-index snapshots and may have changed. Open the links yourself to check prices.',unknown:'Date availability / all-in price unconfirmed',quality:'Search-index rating',checked:'Research record: Oct 17, 2026',private:'Choose a private room for two, not two dorm beds.',checkPrice:'Check with trip dates',source:'Rating source',calculator:'Compare actual checkout totals',calcHint:'Enter the checkout total for two people for the stated stay, including mandatory taxes, cleaning and service fees. Check refundable deposits separately. Transport estimates should cover the whole trip: car rental, insurance, parking, fuel and transfers. Count each expense once. This is a manual estimate, not a verified quote or reservation.',singleCost:'One base · Dec 20–25 total',cityCost:'Split · Dec 20–22 metro total',eastCost:'Split · Dec 22–25 east-coast total',transportSingle:'One base · whole-trip transport estimate',transportSplit:'Split · whole-trip transport estimate',save:'Save estimate',clear:'Clear estimate',missing:'Accommodation totals incomplete',within:'Accommodation within US$450 cap (manual entry)',over:'Accommodation over US$450 cap (manual entry)',stayTotal:'Accommodation subtotal',tripTotal:'Accommodation + transport estimate',transportUnknown:'Transport not entered; overall costs cannot yet be compared.',notLive:'Excludes food, tickets and activities. Not a confirmed quote.',apply:'Preview & apply this option',applyTitle:'Review the itinerary change',applyText:'This changes the trip to Dec 20–25, 2026 for 2 people and replaces the current stops. Saved places are kept. Undo is available after applying. Arrival / departure times are tentative; ferry and tour availability still need confirmation.',applyConfirm:'Apply to my itinerary',export:'Download Chinese + English comparison',saved:'Manual estimate saved',invalid:'Amounts must be US$0.01–100,000; transport may be 0. Leave blank for unknown.',applied:'Option applied. Undo is available.',choose:'Choose an option',recommended:'Recommended',staySearch:'Search accommodation',arrival:'Afternoon arrival; rest / car pickup. Exact time TBC.',departure:'Airport / car return; afternoon departure. Exact flight TBC.',rest:'Rest / flexible time',north:'North coast → base, or drive east for a split stay',airport:'Allow travel and check-in buffers',bioTrip:'Laguna Grande tour; confirm check-in time',free:'Flexible / rest',ferry:'Ceiba outbound ferry + transfers',flamenco:'Flamenco Beach day',returnFerry:'Return to mainland on confirmed sailing',plansNote:'All options use the same dates and two travelers. Cost comparisons describe expense categories, not live quotes.',candidateNote:'Quality screening guide: roughly 8+ on Booking / 4.8+ on Airbnb, followed by recent cleanliness, noise and room-type reviews. Scores do not guarantee the experience.'}
};

Object.assign(copy.zh,{title:'三個方案，把住宿一起算清楚。',recommend:'我的首選：B ＋ Las Palomas 私人衛浴五晚',splitBio:'若選 A／C，12/20 晚上先去 Fajardo 再回 San Juan 會增加往返；首晚住東岸則需另外比較換宿次數與費用。',shortlist:'你提供的七間住宿與截圖報價',quoteNotice:'七間住宿依提供的截圖整理，尚未核實即時空房與最後必付費；Isla 稅費及前兩晚價格依你同意先保守推估。你們可共睡一張雙人床。Sleep Relax 1 已依你不喜歡老舊外觀的偏好移出推薦。以下金額尚非已核實的最後結帳價。',quality:'資料依據見卡片',checked:'資料整理：2026/10/19',source:'原始飯店連結',checkPrice:'搜尋指定日期',candidateNote:'私人衛浴優先比較 Las Palomas，省錢比較 Oasis；東岸可比 Comfortable。Sleep Relax 1 因外觀偏好移出推薦；Duerme 與 San Juan Apartments 保留備案。兩個同名 Oasis 項目合併，不重複計價。',unknown:'其他日期房價／即時房況待確認'});
Object.assign(copy.en,{title:'Three options, with accommodation totals.',recommend:'My pick: B + Las Palomas with a private bathroom for five nights',splitBio:'For A / C, the Dec 20 Fajardo tour adds a return trip if based in San Juan. An east-coast first night needs a separate moving-cost comparison.',shortlist:'Your seven properties and screenshot quotes',quoteNotice:'All seven properties use supplied screenshots; live availability and final mandatory fees remain unverified. Isla tax and two-night metro rates are planning estimates, as requested. Sharing a double bed is acceptable. Sleep Relax 1 is excluded by your appearance preference. Totals are not verified final checkout prices.',quality:'Evidence stated on each card',checked:'Compiled: Oct 19, 2026',source:'Original property link',checkPrice:'Search selected dates',candidateNote:'Prioritize Las Palomas for a private bathroom, Oasis for lower cost, and Comfortable for an east-coast stay. Sleep Relax 1 is excluded by appearance preference; Duerme and San Juan Apartments are backups. Duplicate named Oasis entries are grouped, not charged twice.',unknown:'Other dates / live availability unconfirmed'});

export const plans=[
 {
  "id": "A",
  "title": {
   "zh": "螢光灣提前至 20 日",
   "en": "Move the bio bay to Dec 20"
  },
  "trade": {
   "zh": "月相相對較佳；抵達日最趕，須確認航班與報到時間。",
   "en": "Relatively less moonlight; arrival-day timing is the main risk."
  },
  "cost": {
   "zh": "一個付費導覽；抵達日增加東岸往返",
   "en": "One paid tour; extra east-coast travel on arrival"
  },
  "previousId": "B"
 },
 {
  "id": "B",
  "title": {
   "zh": "Culebra 海島日，略過螢光灣",
   "en": "Culebra day; skip the bio bay"
  },
  "trade": {
   "zh": "海灘更有變化；保留北岸、雨林。需先買來回船票。",
   "en": "More beach variety; keeps the north coast and forest. Return ferry tickets essential."
  },
  "cost": {
   "zh": "船票＋接駁；省下螢光灣導覽費",
   "en": "Ferry + transfers; saves the bio-bay tour fee"
  },
  "previousId": "C"
 },
 {
  "id": "C",
  "title": {
   "zh": "20 日螢光灣＋Culebra",
   "en": "Dec 20 bio bay + Culebra"
  },
  "trade": {
   "zh": "活動最完整，但交通與預約較多，抵達日風險仍在。",
   "en": "Most activities, with more transfers and reservations; arrival-day risk remains."
  },
  "cost": {
   "zh": "船票＋接駁＋導覽，付費項目最多",
   "en": "Ferry + transfers + tour: most paid components"
  },
  "previousId": "D"
 }
];
export const candidates=userHotels;
export function candidateUrl(candidate,{checkin=context.start,checkout=context.end,lang='zh'}={}){
 if(candidate.platform==='Airbnb'){const u=new URL(candidate.source);u.searchParams.set('check_in',checkin);u.searchParams.set('check_out',checkout);u.searchParams.set('adults','2');return u.href;}
 return bookingSearch({city:candidate.city,name:candidate.name,checkin,checkout,guests:2,lang});
}
export function parseQuote(values){
 const result={};for(const key of ['single','city','east','singleTransport','splitTransport']){const raw=String(values[key]??'').trim();if(!raw){result[key]=null;continue;}const n=Number(raw);if(!Number.isFinite(n)||n>100000||n<(key.endsWith('Transport')?0:0.01))throw new Error('INVALID_QUOTE');result[key]=Math.round(n*100)/100;}return result;
}
export function compareCosts(values={}){
 const q=parseQuote(values);return ['single','split'].map(mode=>{const stay=mode==='single'?q.single:q.city===null||q.east===null?null:Math.round((q.city+q.east)*100)/100;const transport=q[mode+'Transport'];return {mode,stay,transport,total:stay===null||transport===null?null:Math.round((stay+transport)*100)/100,status:stay===null?'missing':stay<=context.budget?'within':'over'};});
}
export function planItems(id){
 if(!plans.some(p=>p.id===id))throw new Error('INVALID_PLAN');
 let items=defaultItems().map(x=>({...x}));
 if(id==='A')items=items.map(x=>x.placeId==='laguna'?{...x,date:'2026-12-20'}:x);
 if(id==='B'||id==='C'){
  items=items.filter(x=>x.date<'2026-12-23');
  const stop=(date,slot,placeId,note='')=>({id:'option-'+id+'-'+date+'-'+placeId,date,slot,placeId,note});
  items.push(stop('2026-12-23','morning','ceiba','確認來回船票／Confirm return ferry tickets; arrive 1 hour early.'),stop('2026-12-23','afternoon','flamenco','海灘與回程須配合已訂船班／Beach time depends on confirmed return sailing.'),stop('2026-12-24','morning','yunque'),stop('2026-12-24','afternoon','luquillo'),stop('2026-12-24','evening','kiosks'));
  if(id==='C')items.push(stop('2026-12-20','evening','laguna','航班／取車與報到時間待確認／Flight, car pickup and tour check-in TBC.'));
 }
 return items;
}
export function schedule(id,lang='zh'){
 const c=copy[lang],island=id==='B'||id==='C',bio=id==='A'||id==='C';
 return [
 ['12/20',c.free,c.arrival,bio?c.bioTrip:c.rest],
 ['12/21','Old San Juan · El Morro','San Cristóbal / Old San Juan',lang==='zh'?'古城晚餐':'Dinner in Old San Juan'],
 ['12/22','Cueva de las Golondrinas','Mar Chiquita',c.north],
 ['12/23',island?c.ferry:'El Yunque',island?c.flamenco:'Luquillo',island?c.returnFerry:'Luquillo kiosks'],
 ['12/24',island?'El Yunque':'Luquillo',island?'Luquillo':(lang==='zh'?'Río Grande／Luquillo／Fajardo 午餐':'Río Grande / Luquillo / Fajardo lunch'),island?'Luquillo kiosks':c.rest],
 ['12/25',c.airport,c.departure,'—']
 ];
}
export function comparisonMarkdown(){
 return ['zh','en'].map(lang=>{const c=copy[lang];return '# '+c.title+'\n\n'+c.intro+'\n\n## '+c.recommend+'\n'+c.reason+'\n\n'+plans.map(p=>'### '+p.id+' · '+p.title[lang]+'\n'+p.trade[lang]+'\n'+p.cost[lang]+'\n'+schedule(p.id,lang).map(r=>'- '+r.join(' | ')).join('\n')).join('\n\n')+'\n\n## '+c.strategy+'\n'+c.singleText+'\n\n'+c.splitText+'\n\n'+c.singleCap+'\n'+c.splitCap+'\n\n'+c.moonText+'\n'+sources.moon+'\n\n'+c.islandText+'\n'+c.ferryText+'\n'+sources.ferry+'\n\n## '+c.shortlist+'\n'+c.quoteNotice+'\n\n'+candidates.map(x=>'- '+x.name+' · '+x.area+' · '+(lang==='zh'?x.rating:x.ratingEn)+' ('+c.quality+')\n  '+x.note[lang]+'\n  '+c.unknown+'\n  '+candidateUrl(x,{lang})+'\n  '+c.source+': '+x.source).join('\n\n')+'\n\n'+hotelPriceMarkdown(lang)+'\n\n'+c.checked;}).join('\n\n---\n\n');
}
