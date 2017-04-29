'use strict'

const Rx = require('rxjs/Rx');

Rx.Observable.range(-10,21)
    .subscribe(val => console.log(val));