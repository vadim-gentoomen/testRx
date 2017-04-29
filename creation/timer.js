'use strict'

const Rx = require('rxjs/Rx');

// Rx.Observable.timer(1000).subscribe(val => console.log(val));

// таймер начинает работать после 10 сек. перерыва
Rx.Observable.timer(10000, 500).subscribe(val => console.log(val));