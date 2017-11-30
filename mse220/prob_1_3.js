#!/usr/bin/env node

var PD = require("probability-distributions");

const num=10000000;
let within = 0;


var man = PD.runif(num, 0, 30);
var woman_first = PD.runif(num);
var woman = new Array();
let i = 0;
for (const which of woman_first) {
	let lower=15;
	if (which < .33333333) {
		lower=0;
	}
	let woman_arrival = PD.runif(1,lower,lower+15)[0];
	if (Math.abs(man[i]-woman_arrival) < 5)
		within++;
	woman.push(woman_arrival);
	i++;
}
//console.log("woman = " + woman);
console.log("p = " + (within/num));