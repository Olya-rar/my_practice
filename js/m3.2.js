'use strict';

// *не часто використовуються:

// const arr = ["HTML", "CSS", "JS", "React", "postgres"];
// arr.unshift("lalala");
// console.log(arr);

// *"lalala" передається на початок рядку

// const arr = ["HTML", "CSS", "JS", "React", "postgres"];
// arr.shift();
// console.log(arr);

// *не приймає ніякі аргументи
// *видаляє перше у рядку - "HTML"

// const arr = ["HTML", "CSS", "JS", "React", "postgres"];
// const res = arr.shift();
// console.log(arr);
// console.log(res);

// * splice вирізає; змінює масив (мотує його):

// const arr = ["HTML", "CSS", "JS", "React", "postgres"];
// const result = arr.splice(2, 3);
// console.log("result", result);
// console.log("arr", arr);

// *2-з якого індексу; 3-скільки елементів

// const arr = ["HTML", "CSS", "JS", "React", "postgres"];
// const result = arr.splice(2, 1, "lalala");
// console.log("result", result);
// console.log("arr", arr);

// *2-з якого індексу; 1-тільки цей елемент; "lalala"-що поставити замість того індексу

// const arr = ["HTML", "CSS", "JS", "React", "postgres"];
// arr.splice(2, 0, "Node.js", "lalala");
// console.log(arr);

// *2-з якого індексу; 0-не хочу нічого вирізати; "Node.js", "lalala"-що підставити



// Псевдомасиви Arguments і Array.from

// Arguments: методів масивів немає; можливість групувати аргументи;

// function foo() {
// console.log(arguments);
// }

// function foo() {
// console.log(arguments.length);
// }

// function foo() {
// console.log(arguments[1]);
// }

// *[1]-до конкретного індексу

// Array.from:

// function foo() {
//     const args = Array.from(arguments);
//     console.log(args);
// }

// function foo() {
//     const args = Array.from(arguments);
//     console.log(Array.isArray(args));
// }

// foo(1, 2, 3);
// foo(1, 2, 3, 4);
// foo(1, 2, 3, 4, 5);


// Напиши функцію add для складання довільної кількості аргументів (чисел).

// const add = function() {
//     const args = Array.from(arguments);
//     let total = 0;
//     for(const item of args) {
//         total += item;
//     }
//     return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));


// Напиши функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.Усі аргументи будуть лише числами.

// function calAverage() {
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total / arguments.length;
// }

// console.log(calAverage(1, 2, 3));
// console.log(calAverage(12, 21, 32, 45, 81, 73));



// Глобальна область видимості
// Блочна область видимості
// Пошук за ланцюжком областей видимості

// const global = 10;
// function foo() {
//     const a = 20;
//     console.log(a);
// }
// foo();

// const global = 10;
// function foo() {
//     const a = 20;
//     console.log(global);
// }
// foo();

// const global = 10;
// function foo() {
//     const a = 20;
//     for (let i = 0; i < 3; i++) {
//         let b = 30;
//         console.log(global);
//     }
// }
// foo();

// const global = 10;
// function foo() {
//     const a = 20;
//     for (let i = 0; i < 3; i++) {
//         let b = 30;
//         console.log(a);
//     }
// }
// foo();

// const global = 10;
// function foo() {
//     const a = 20;
//     for (let i = 0; i < 3; i++) {
//         let b = 30;
//         console.log(b);
//     }
// }
// foo();

// const global = 10;
// function foo() {
//     const a = 20;
//     for (let i = 0; i < 3; i++) {
//         let global = 30;
//         console.log(global);
//     }
// }
// foo();

// *спочатку шукає у перших фігурних дужках де викликається консоль, якщо не знаходить йде вище

// const global = 10;
// function foo() {
//     const a = 20;
//     for (let i = 0; i < 3; i++) {
//         const b = 30;
//         if(i === 2) {
//             const c = 40;
//             console.log(b);
//         }
//     }
// }
// foo();

// *спочатку шукає у перших фігурних дужках де викликається консоль, якщо не знаходить йде вище

// const global = 10;
// function foo() {
//     const a = 20;
//     for (let i = 0; i < 3; i++) {
//         const b = 30;
//         if(i === 2) {
//             const c = 40;
//         }
//         console.log(c);
//     }
// }
// foo();

// *не виведе бо існує тільки у синіх дужках



// Стек викликів
// Порядок виконання

// function fnA() {
//     console.log("fnA");
// }

// function fnB() {
//     console.log("fnB");
// }

// function fnC() {
//     console.log("fnC");
// }

// console.log("before fnA");
// fnA();
// console.log("after fnA");

// console.log("before fnB");
// fnB();
// console.log("after fnB");

// console.log("before fnC");
// fnC();
// console.log("after fnC");



// function bar() {
//     console.log("bar");
// }

// function baz() {
//     console.log("baz");
// }

// function foo() {
//     console.log("foo");
//     bar();
//     baz();
// }

// foo();

// * 1 - запускається функція foo(242);
// 2-додається функція bar(234) вона стає активною, але foo теж відображається, не завершилась;
// 3-функція bar(234) вивантажилась зі стеку виклику; керування знову перейшло до виконання функції foo;
// 4-додається функція baz(238) вона стає активною, але foo теж відображається, не завершилась;
// 5-функція baz(238) вивантажилась зі стеку виклику; функція foo теж вивантажилась і ми з неї вийшли;



// function bar() {
//     baz();
//     console.log("bar");
// }

// function baz() {
//     console.log("baz");
// }

// function foo() {
//     console.log("foo");
//     bar();
//     console.log("after");
// }

// foo();



// Напиши функцію logItems(items), яка отримує масив та використовує цийл,
// який для кожного елементу масиву буде виводити в консоль повідомлення
// у форматі < номер елемента > - <значення елеманта>.
// Нумерація елементів повинна починатись з 1.
        
// Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax']
// з індексом 0 буде виведено 1 - Mango, а  для індексу 3 -Ajax.

// *перебір масиву: спочатку перший масив, потім другий
// *перебирається спочатку 1 у двох масивах, потім 2, потім 3 і т.д.

// function logItems(items) {
//     for(let i = 0; i < items.length; i++) {
//         console.log(`${i + 1} - ${items[i]}`);
//     }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["apple", "grape", "orange", "banana", "lemon"])

// const arr = ["Mango", "Poly", "Ajax"];
//  for(let i = 0; i < arr.length; i++) {
//         console.log(`${i + 1} - ${arr[i]}`);
//     }



// Напиши функцію printInfo(names, phones) яка виводить у консоль
// імя та телефонний номер користувача.
// У параметри names та phones будуть передані рядки імен та телефонних номерів,
// розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// function printInfo(names, phones) {
//     const namesArr = names.split(",");
//     const phonesArr = phones.split(",");
//     for(let i = 0; i < names.length; i++) {
//         console.log(namesArr[i], phonesArr[i]);
//     }
// }

// printInfo(
//     "Jacob,William,Solomon,Artemis",
//     "89001234567,89001112233,890055566377,890055566300"
// );

// printInfo(
//     "Petya,Yura,Kate,Alice",
//     "1234,5678,9876,5432"
// );



// Напиши функцію formatTime(totalMinutes) яка переведе значення
// totalMinutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     const doubleHours = String(hours).padStart(2, 0);
//     const doubleMinutes = String(minutes).padStart(2, 0);
//     return `${doubleHours}:${doubleMinutes}`;
// }

// console.log(formatTime(70));
// console.log(formatTime(460));
// console.log(formatTime(1441));



// Створи функцію яка буде розбивати початковий масив на потрібну
// кількість елементів розділяючи на декілька масивів.
// Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементів в масиві
// Функція повертає масив масивів

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function foo(arr, count) {
//     const res = [];
//     for(let i = 0; i < arr.length; i += count) {
//         const a = arr.slice(i, i + count);
//         res.push(a);
//     }
//     return res;
// }

// console.log(foo(data, 3));

// *3-це кількість шматочків
// *не включно
