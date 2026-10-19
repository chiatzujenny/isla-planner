import test from 'node:test';
import assert from 'node:assert/strict';
import {userHotels,screenshotQuotes,knownQuoteTotal,estimatedMetroTwo,hotelCombinations} from '../public/hotel-quotes.mjs';
const q=id=>screenshotQuotes.find(x=>x.id===id);
test('screenshot rates add the stated 9% tax without adding the included cleaning fee twice',()=>{
 assert.equal(knownQuoteTotal(q('oasis-five')),306.29);
 assert.equal(knownQuoteTotal(q('sleep-three')),245.25);
 assert.equal(q('comfortable-three').cleaningIncluded,35);
 assert.equal(knownQuoteTotal(q('comfortable-three')),259.42);
 assert.equal(knownQuoteTotal(q('duerme-three-nonref')),280.13);
 assert.equal(knownQuoteTotal(q('duerme-three-flex')),310.65);
});
test('Isla taxes and dates remain explicitly assumed, not verified',()=>{
 const isla=q('isla-five-estimate');assert.equal(isla.estimated,true);assert.equal(isla.taxBasis,'assumed');assert.equal(isla.datesBasis,'assumed-trip');assert.equal(knownQuoteTotal(isla),408.75);
});
test('two-night estimates apply 20% buffer only to the prorated metro portion',()=>{
 assert.deepEqual(estimatedMetroTwo(q('oasis-five')),{prorated:122.52,buffer:24.50,total:147.02,estimated:true});
 assert.deepEqual(estimatedMetroTwo(q('isla-five-estimate')),{prorated:163.50,buffer:32.70,total:196.20,estimated:true});
 assert.throws(()=>estimatedMetroTwo(q('sleep-three')));
});
test('combination totals cover five nights and never stack a five-night quote with another three nights',()=>{
 const rows=hotelCombinations();assert.equal(rows.length,20);
 assert.equal(rows.find(r=>r.id==='oasis-five+comfortable-three').total,406.44);
 assert.equal(rows.find(r=>r.id==='isla-five-estimate+comfortable-three').total,455.62);
 assert.equal(rows.find(r=>r.id==='oasis-five+duerme-three-flex').total,457.67);
 assert.equal(rows.find(r=>r.id==='oasis-five+sleep-three').total,392.27);
 assert.equal(rows.find(r=>r.id==='isla-five-estimate+sleep-three').total,441.45);
 assert.ok(rows.filter(r=>r.secondHotel).every(r=>r.estimated&&r.buffer>0));
});
test('appearance preference excludes Sleep while preserving its price evidence; duplicates are not charged twice',()=>{
 assert.equal(userHotels.length,7);assert.equal(userHotels.filter(h=>h.id==='oasis').length,1);
 assert.equal(userHotels.find(h=>h.id==='sleep1').status,'exclude-preference');
 assert.equal(hotelCombinations().find(r=>r.id==='oasis-five+sleep-three').status,'exclude-preference');
 assert.equal(hotelCombinations().find(r=>r.id==='isla-five-estimate+comfortable-three').status,'over');
 assert.ok(screenshotQuotes.every(q=>q.adults===2&&q.privateRoom&&(q.otherMandatoryFees===null||q.id==='san-juan-five')));
});

test('Las Palomas adds only the explicit TWD tax and converts once without repeating included cleaning',()=>{
 const rate=q('palomas-five');assert.equal(rate.base+rate.taxAmount,11139);assert.equal(rate.cleaningIncluded,810);assert.equal(knownQuoteTotal(rate),341.79);assert.equal(rate.fx.twdPerUsd,32.59);assert.equal(rate.cancellation,'free-before-2026-12-13');assert.equal(userHotels.find(x=>x.id==='palomas').bathroom,'private');assert.equal(hotelCombinations().find(r=>r.id==='palomas-five+comfortable-three').total,423.48);assert.throws(()=>knownQuoteTotal({...rate,fx:{twdPerUsd:0}}));
});

test('San Juan Apartments includes environmental fee but never repeats included cleaning or adds an assumed percentage tax',()=>{const rate=q('san-juan-five');assert.equal(rate.base+rate.taxAmount+rate.otherMandatoryFees,14196);assert.equal(rate.cleaningIncluded,2430);assert.equal(knownQuoteTotal(rate),435.59);assert.equal(rate.cancellation,'non-refundable');assert.deepEqual(rate.unpricedFees,['city-tax']);assert.equal(userHotels.find(x=>x.id===rate.hotelId).status,'backup');assert.equal(hotelCombinations().find(r=>r.id==='san-juan-five+comfortable-three').status,'over');});
