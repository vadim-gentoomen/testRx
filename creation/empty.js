'use strict'

const Rx = require('rxjs/Rx');

const example = Rx.Observable.empty();
const subscribe = example.subscribe({
  next: () => console.log('Next'),
  complete: () => console.log('Complete!')
});