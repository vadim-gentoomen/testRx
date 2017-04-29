'use strict'

const Rx = require('rxjs/Rx');

//emit every 5s
const source = Rx.Observable.interval(5000);
//emit every 1s
const secondSource = Rx.Observable.interval(1000);
//emit every 0.5 sec
const thirdSource = Rx.Observable.interval(500);

const example = source.withLatestFrom(secondSource, thirdSource)
  .map(([first, second, third]) => {
    return `First Source (5s): ${first} Second Source (1s): ${second} Third Source (0.5s): ${third} `;
  });
const subscribe = example.subscribe(val => console.log(val));
