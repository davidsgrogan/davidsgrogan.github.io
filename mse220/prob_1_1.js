#!/usr/bin/env node

function berno(less_than) {
  return Math.random() < less_than;
}

var PD = require("probability-distributions");

const num=100000000;
let total=0;

for (let i = 0; i < num; i++) {
  if (berno(.55)) {
    total += 10;
  } else {
    total += 25;
  }
}

console.log("total for 50 = " + (total / (num/50)));