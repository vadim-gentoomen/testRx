'use strict'

const Rx = require('rxjs/Rx');

Rx.Observable.of({name: 'Brian'}, [1,2,3], function hello(){ return 'Hello'}, 333, 'qewrqwer')
    .subscribe(val => console.log(val));