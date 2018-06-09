'use strict'

const Rx = require('rxjs/Rx');

//emit every 0.55s
const source = Rx.Observable.interval(500);
//emit every 3s
const secondSource = Rx.Observable.timer(3000);

const example = source
    .skipUntil(secondSource)
    .combineLatest(secondSource)
    .map(([first, second]) => {
        return `First Source : ${first} Second Source : ${second}`;
    });
const subscribe = example.subscribe(val => console.log(val));