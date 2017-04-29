'use strict'

const Rx = require('rxjs/Rx');

//emits an error with specified value on subscription
const source = Rx.Observable.throw('This is an error!');
//output: 'Error: This is an error!'
const subscribe = source.subscribe({
    next: val => console.log(val),
    complete: () => console.log('Complete!'),
    error: val => console.log(`Error: ${val}`)
});