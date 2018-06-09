'use strict'

const Rx = require('rxjs/Rx');


const stream$ = Rx.Observable.interval(500)
    .take(3)
    .map(() => Math.random().toString().substr(2, 3))
    .publish();

// stream$.connect();

stream$.subscribe(data => console.log('1 ', data));
stream$.subscribe(data => console.log('2 ', data));
setTimeout(() => {
    stream$.subscribe(data => console.log('3 ', data));
}, 5000);

