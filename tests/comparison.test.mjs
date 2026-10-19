import test from 'node:test';
import assert from 'node:assert/strict';
import {context,plans,candidates,parseQuote,compareCosts,planItems,candidateUrl,schedule,comparisonMarkdown,migrateSavedTrip,previousPlanItems} from '../public/comparison.mjs';
import {comparisonView} from '../public/comparison-view.mjs';
import {places} from '../public/data.mjs';
import {validateImport,defaultItems} from '../public/core.mjs';
import {createApp} from '../server.mjs';

test('all three renamed options produce valid independent itineraries within the six travel dates',()=>{
 for(const p of plans){const items=planItems(p.id);assert.ok(items.every(x=>x.date>=context.start&&x.date<context.end));assert.equal(schedule(p.id).length,6);validateImport({version:1,lang:'zh',trip:{destination:'Puerto Rico',start:context.start,end:context.end,people:2,pace:'balanced'},places,items,bookmarks:[]});}
 const a=planItems('A');a[0].note='edited';assert.equal(planItems('A')[0].note,'');assert.deepEqual(planItems('A'),defaultItems().map(x=>x.placeId==='laguna'?{...x,date:'2026-12-20'}:x));assert.deepEqual(plans.map(p=>[p.id,p.previousId]),[['A','B'],['B','C'],['C','D']]);assert.throws(()=>planItems('D'));assert.throws(()=>planItems('Z'));
});
test('bio bay dates and Culebra days match the selected option, preserving north coast and forest',()=>{
 for(const p of plans){const items=planItems(p.id),laguna=items.find(x=>x.placeId==='laguna');assert.equal(laguna?.date,p.id==='A'?'2026-12-20':p.id==='C'?'2026-12-21':undefined);assert.equal(items.some(x=>x.placeId==='flamenco'),p.id==='B');assert.equal(items.find(x=>x.placeId==='golondrinas').date,'2026-12-22');assert.equal(items.find(x=>x.placeId==='yunque').date,p.id==='B'?'2026-12-24':'2026-12-23');}
});
test('unknown quotes remain unknown and cannot be presented as free or in budget',()=>{
 const results=compareCosts();assert.ok(results.every(x=>x.status==='missing'&&x.stay===null&&x.total===null));assert.equal(compareCosts({city:180})[1].stay,null);assert.equal(compareCosts({single:400})[0].total,null);
});
test('budget boundary includes fees in entered total and sums split stays before comparing',()=>{
 assert.equal(compareCosts({single:450})[0].status,'within');assert.equal(compareCosts({single:450.01})[0].status,'over');assert.equal(compareCosts({city:220,east:230})[1].status,'within');assert.equal(compareCosts({city:180,east:270.01})[1].status,'over');assert.equal(compareCosts({single:450,singleTransport:0})[0].total,450);assert.equal(compareCosts({city:180,east:270,splitTransport:120.50})[1].total,570.50);
});
test('manual quote validation rejects invalid prices and treats blank or null as unknown',()=>{
 for(const value of [-1,0,'NaN',Infinity,100001])assert.throws(()=>parseQuote({single:value}));assert.throws(()=>parseQuote({singleTransport:-1}));assert.equal(parseQuote({single:null}).single,null);assert.equal(parseQuote({singleTransport:0}).singleTransport,0);assert.equal(parseQuote({single:' 89.99 '}).single,89.99);
});
test('candidate links carry exactly two guests and the selected accommodation dates',()=>{
 for(const x of candidates){const u=new URL(candidateUrl(x,{checkin:'2026-12-22',lang:'en'}));assert.equal(u.searchParams.get(x.platform==='Airbnb'?'check_in':'checkin'),'2026-12-22');assert.equal(u.searchParams.get(x.platform==='Airbnb'?'check_out':'checkout'),'2026-12-25');assert.equal(u.searchParams.get(x.platform==='Airbnb'?'adults':'group_adults'),'2');}
});
test('indexed quality clues never become fabricated live prices or availability',()=>{
 assert.equal(candidates.length,7);for(const x of candidates){assert.equal(x.price,null);assert.equal(x.availability,'not-live-verified');assert.equal(x.evidence,'user-screenshot');assert.equal(x.checked,['palomas','san-juan-apartments'].includes(x.id)?'2026-10-19':'2026-10-18');}const html=comparisonView();assert.match(html,/私人房間/);assert.match(html,/尚非已核實的最後結帳價/);assert.match(comparisonView({lang:'en'}),/not a verified quote/i);assert.match(comparisonView({lang:'en'}),/Accommodation totals incomplete/);
});
test('comparison shows one language at a time, while the export retains Chinese then English',()=>{
 const zh=comparisonView(),en=comparisonView({mode:'en'});assert.match(zh,/id="compare-zh"/);assert.doesNotMatch(zh,/id="compare-en"/);assert.match(en,/id="compare-en"/);assert.doesNotMatch(en,/id="compare-zh"/);assert.doesNotMatch(zh,/data-mode="both"|中文 → English/);assert.doesNotMatch(comparisonView({mode:'both'}),/id="compare-en"/);const md=comparisonMarkdown();assert.ok(md.indexOf('最新本島行程')<md.indexOf('Updated mainland itinerary'));assert.match(md,/US\$450/);assert.match(md,/planning estimates/i);
});

test('rendering a split stay changes overnight areas without changing the itinerary or known prices',()=>{
 const html=comparisonView({stayMode:'split',quotes:{single:449,city:150,east:301}});assert.match(html,/12\/22–25/);assert.match(html,/住宿超過 US\$450/);assert.match(html,/\$449\.00/);assert.match(html,/\$451\.00/);assert.match(html,/Luquillo \/ Fajardo/);
});
test('comparison assets are served as executable modules and CSS',async t=>{
 const server=createApp({apiKey:'',model:''});await new Promise(r=>server.listen(0,'127.0.0.1',r));t.after(()=>new Promise(r=>server.close(r)));for(const [file,type] of [['comparison.mjs','text/javascript'],['hotel-quotes.mjs','text/javascript'],['airbnb-stays.mjs','text/javascript'],['comparison-view.mjs','text/javascript'],['comparison.css','text/css']]){const response=await fetch('http://127.0.0.1:'+server.address().port+'/'+file);assert.equal(response.status,200);assert.ok(response.headers.get('content-type').startsWith(type));}
});

test('private bathroom comparison renders native TWD fees, USD estimate and both cancellation languages',()=>{for(const [mode,expected] of [['zh','私人衛浴'],['en','Private bathroom']]){const html=comparisonView({mode});assert.match(html,/Las Palomas Residences/);assert.ok(html.includes(expected));assert.match(html,/NT\$11,139/);assert.match(html,/341\.79/);assert.match(html,/423\.48/);assert.doesNotMatch(html,/undefined/);}assert.match(comparisonMarkdown(),/Las Palomas/);});

test('San Juan Apartments displays all itemized fees and unpriced city tax caution in both languages',()=>{for(const mode of ['zh','en']){const html=comparisonView({mode});assert.match(html,/San Juan Apartments/);assert.match(html,/NT\$14,196/);assert.match(html,/435\.59/);assert.match(html,/NT\$3,159/);assert.doesNotMatch(html,/undefined/);}});

test('updated mainland C keeps arrival day light and moves old town without any island or ferry stops',()=>{
 const items=planItems('C');assert.ok(items.every(x=>!['ceiba','flamenco','tamarindo','mosquito'].includes(x.placeId)));assert.equal(items.find(x=>x.placeId==='morro').date,'2026-12-24');assert.equal(items.find(x=>x.placeId==='cristobal').date,'2026-12-24');assert.equal(items.find(x=>x.placeId==='yunque').date,'2026-12-23');const bio=items.filter(x=>x.date==='2026-12-21');assert.equal(bio.length,1);assert.equal(bio[0].optional,true);assert.ok(bio[0].note.includes('OPTIONAL / NOT BOOKED'));for(const mode of ['zh','en']){const html=comparisonView({mode,planId:'C'});assert.match(html,/94%/);assert.ok(html.includes(mode==='zh'?'12/21':'Dec 21'));assert.match(html,/Latest itinerary update/);assert.doesNotMatch(html,/OUR PICK · OPTION B/);}assert.match(schedule('C','en')[1][2],/3–5 PM/);assert.match(schedule('C','en')[1][3],/NOT BOOKED/);
});
test('only untouched old generated C trips migrate; custom notes, dates and added stops are preserved',()=>{
 const saved={version:1,trip:{destination:'Puerto Rico',start:context.start,end:context.end,people:2,pace:'balanced'},lang:'en',items:previousPlanItems('C'),places,bookmarks:['flamenco']};const migrated=migrateSavedTrip(saved);assert.deepEqual(migrated.items,planItems('C'));assert.deepEqual(migrated.bookmarks,['flamenco']);assert.equal(saved.items.some(x=>x.placeId==='flamenco'),true);assert.equal(migrated.items.some(x=>x.placeId==='flamenco'),false);const edited=structuredClone(saved);edited.items[0].note='Custom note';assert.equal(migrateSavedTrip(edited),edited);const dates=structuredClone(saved);dates.trip.start='2026-12-21';assert.equal(migrateSavedTrip(dates),dates);const added=structuredClone(saved);added.items.push({...added.items[0],id:'custom-extra'});assert.equal(migrateSavedTrip(added),added);
});
