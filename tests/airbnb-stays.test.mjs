import test from 'node:test';
import assert from 'node:assert/strict';
import {airbnbCandidates,airbnbLink,airbnbTargets} from '../public/airbnb-stays.mjs';
import {comparisonMarkdown} from '../public/comparison.mjs';
import {comparisonView} from '../public/comparison-view.mjs';

test('Airbnb candidates retain unknown prices and availability instead of fabricated budget matches',()=>{
 assert.equal(airbnbCandidates.length,3);
 for(const x of airbnbCandidates){assert.equal(x.price,null);assert.equal(x.availability,'unverified');assert.equal(x.evidence,'public-listing-snapshot');}
 const html=comparisonView({mode:'en'});assert.match(html,/None is confirmed below US\$450/);assert.match(html,/planning assumption/);assert.match(html,/not Airbnb quotes/);
});
test('Airbnb links carry exactly two adults, USD and requested five or three nights',()=>{
 for(const x of airbnbCandidates){const full=new URL(airbnbLink(x));assert.equal(full.searchParams.get('check_in'),'2026-12-20');assert.equal(full.searchParams.get('check_out'),'2026-12-25');assert.equal(full.searchParams.get('adults'),'2');assert.equal(full.searchParams.get('currency'),'USD');const east=new URL(airbnbLink(x,{checkin:'2026-12-22',checkout:'2026-12-25'}));assert.equal(east.searchParams.get('check_in'),'2026-12-22');}
 assert.throws(()=>airbnbLink(airbnbCandidates[0],{checkin:'2026-12-25',checkout:'2026-12-22'}));
});
test('Airbnb budget limits use the preferred Comfortable stay and the buffered Oasis estimate',()=>{
 const t=airbnbTargets();assert.equal(Math.round((t.metroTwoWithComfortable+259.42)*100)/100,450);assert.equal(Math.round((t.eastThreeWithEstimatedOasis+147.02)*100)/100,450);assert.equal(t.eastThreeCostBenchmark,259.42);
});
test('bilingual comparison download contains price assumptions and full accommodation totals',()=>{
 const md=comparisonMarkdown();assert.match(md,/406\.44/);assert.match(md,/306\.29/);assert.match(md,/20%/);assert.match(md,/清潔費/);assert.match(md,/not a price ceiling/);
});
