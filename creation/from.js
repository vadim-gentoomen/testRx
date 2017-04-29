'use strict'

const Rx = require('rxjs/Rx');
// 1
// Rx.Observable.from([1,2,3,4,5]).subscribe(val => console.log(val));

// 2
const promiseSource = Rx.Observable.from(new Promise(resolve => {
        setTimeout(() => resolve('Hello World!'), 1000),
            reject => reject('Goodbye World!')
    }
));
const subscribe = promiseSource.subscribe(val => console.log(val));

// 3
// const map = new Map([[1, 'Hi'],[2, 'Bye']]); // литеральная нотация Map
// Rx.Observable.from(map).subscribe(val => console.log(val));

// const set = new Set(['Foo','Bar']); // литеральная нотация Set
// Rx.Observable.from(set).subscribe(val => console.log(val));

// 4

// Rx.Observable.from('Hello World').subscribe(val => console.log(val));

