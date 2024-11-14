'use strict';

// const total = 5;
// const lalala = 6;
// function foo() {
//     if (total <= lalala) {
//         return true
//     }
//     return false
// }

// console.log(foo());


// const total = 5;
// const lalala = 6;
// function foo() {
//     return total <= lalala
// }

// console.log(foo());



// Об'єкти
// Створення об'єкта
// Вкладені властивості

// Двокрапка між об'єктом і контентом - ключ: значення
// Розділювач між ключами "кома";
// У консоль показує за алфавітом

// const playlist = {
//     name: "My playlist",
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     isFavorite: true,
// }

// console.log(playlist.name);

// можна звернутись за назвою ключа - console.log(playlist.name);


// const playlist = {
//     name: "My playlist",
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     isFavorite: true,
// }

// const prop = "rating";
// console.log(playlist[prop]);

// це якщо не знаю назву змінної;


// const playlist = {
//     name: "My playlist",
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     isFavorite: true,
// }

// playlist.name = "New playlist";
// playlist.location = "Dnipro";
// playlist.name = "lalala";
// console.log(playlist);

// переініціалізовую (перезаписую) значення - playlist.name = "New playlist", playlist.name = "lalala";;
// записуємо новий ключ і його значення - playlist.location = "Dnipro";


// const playlist = {
//     name: "My playlist",
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     isFavorite: true,
// }

// const a = "location";
// playlist[a] = "lalala";
// console.log(playlist);

// це якщо не знаю назву змінної;


// Доступ до вкладених властивостей:
// Доступ до властивостей через крапку
// Доступ до вкладених властивостей
// Доступ до властивостей через квадратні дужки
// Зміна значення властивостей
// Додавання вдастивостей

// const obj = {
//     name: "Alice",
//     age: 25,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }

// console.log(obj.skills);


// const obj = {
//     name: "Alice",
//     age: 25,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }

// const obj1 = {html: true, css: true, js: false}
// console.log(obj1.html);


// const obj = {
//     name: "Alice",
//     age: 25,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }

// const obj1 = {html: true, css: true, js: false}
// console.log(obj.skills.html);


// const obj = {
//     name: "Alice",
//     age: 25,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }

// obj.skills.js = true;
// console.log(obj);



// Об'єкти
// Тип даних за посиланням
// Масиви і функції - це об'єкти`

// const arr = [1, 2, 3];
// arr.hello = "hi"

// console.log(arr);

// ТАК РОБИТИ НЕ МОЖНА


// function foo() {
//     console.log("lalala");
// }
// foo.hello = "hi";
// console.dir(foo);

// ФУНКЦІЇ І МАСИВИ ЦЕ ТАКОЖ ОБ'ЄКТИ



// Як копіюються масиви? - За посиланням

// const a = { x: 1, y: 2 }; // http://my-computer/obj/1
// const b = a; // http://my-computer/obj/1

// console.log(a === b);

// a.x = 100;

// console.log("a", a);
// console.log("b", b);


// const a = { x: 1, y: 2 }; // http://my-computer/obj/1
// const b = a; // http://my-computer/obj/1

// const obj1 = { x: 1, y: 2 }; // http://my-computer/obj/2
// const obj2 = { x: 1, y: 2 }; // http://my-computer/obj/3

// console.log(obj1 === obj2);

// Тут порівнюються два посилання



// Об'єкти
// Короткі властивості

// Це кщо однакові ключі і значення

// const username = "Alice";
// const age = 30;

// const user = {
//     username,
//     age
// }

// console.log(user);



// Обчислювальні властивості

// const inputName = "color";
// const picker = {
//     // color: "#afafaf"
//     [inputName]: "#afafaf"
// }

// console.log(picker);


// function creatrObj(key, value) {
//     return {
//         [key]: value
//     }
// }

// console.log(creatrObj("name", "Kate"));
// console.log(creatrObj("color", "red"));



// Перебір об'єкта
// Цикл for...in

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3
// }
// let total = 0;
// for (const key in feedback) {
//     //const key = "good"
//     //const key = "neutral"
//     //const key = "bad"
//     total += feedback[key];
// }

// console.log(total);



// Метод Object.keys

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3
// }
// const keys = Object.keys(feedback);
// let total = 0;
// for (const key of keys) {
//    total += feedback[key];
// }

// console.log(total);



// Метод Object.values

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3
// }
// const values = Object.values(feedback);
// let total = 0;
// for (const item of values) {
//    total += item;
// }

// console.log(total);



// Напиши скрипт який для об'єкта user, послідовно:
// - додає поле mood зі значенням "happy"
// - замінює значення hobby на "skydiving"
// - замінює значення premium на false
// - виводить вміст об'єкта user у форматі ключ: значення використову

// const user = {
//     name: "Alice",
//     age: 20,
//     hobby: "html",
//     premium: true
// }
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }


// const user = {
//     name: "Alice",
//     age: 20,
//     hobby: "html",
//     premium: true
// }
// const user1 = {
//     name: "Kate",
//     age: 22,
//     hobby: "css",
//     premium: true
// }
// function foo(obj) {
//     obj.mood = "happy";
//     obj.hobby = "skydiving";
//     obj.premium = false;
//     const keys = Object.keys(obj);
//     for (const key of keys) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }
// foo(user);
// foo(user1);


// const a = 5;
// function foo(num) { // let num = 5
//     return ++num;
// }

// console.log("foo", foo(a));
// console.log("a", a);


// const numbers = [1, 2, 3];
// function foo(arr) {
//     arr.push(4);
//     return arr;
// }

// console.log("foo", foo(numbers));
// console.log("numbers", numbers);

// ми пішли за посиланням і там його змінили



// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
// підсумовування всіх зарбат і збережіть результат у змінній sum.
// Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//     Kate: 130,
//     Alice: 160,
//     Petya: 100
// }
// function summa(obj) {
//     let total = 0;
//     const values = Object.values(obj);
//     for (const value of values) {
//         total += value;
//     }
//     return total;
// }

// console.log(summa(salaries));
