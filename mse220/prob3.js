#!/usr/bin/env node

function berno(less_than) {
  return Math.random() < less_than;
}

var PD = require("probability-distributions");

const simulations=1000000;
let total=0;

for (let i = 0; i < simulations; i++) {
  var cache = new Set();
  const shots = 15;
  var zones_attempted = PD.rint(shots, 1, 7);
  for (let j = 0; j < shots; j++) {
    if (berno(0.4)) {
      cache.add(zones_attempted[j]);
    }
  }
  if (cache.size == 6)
    total++;
}
console.log(total / simulations);