'use strict'

const Rx = require('rxjs/Rx');

/*
// CREATE 1
// добавляем hello world в подписку
const hello = Rx.Observable.create(function(observer) {
  observer.next('Hello');
  observer.next('World');
});

const subscribe = hello.subscribe(val => console.log(val));
// subscribe типа Subscriber
*/

// CREATE 2
const evenNumbers = Rx.Observable.create(function(observer) {
  let value = 0;

 // генерация секундных интервалов
  const interval = setInterval(() => {
    if(value % 2 === 0){
        // эмитируем только четные
      observer.next(value);
    }
    value++;
  }, 1000);

  return () => clearInterval(interval);
});

const subscribe = evenNumbers.subscribe(val => console.log(val));
//отписка через 10 секунд
setTimeout(() => subscribe.unsubscribe(), 10000);


