'use strict';

// const obj = {
//     desc: "lorem",
//     rating: 4,
//     price: 2153
// }
// const keys = [];
// const values = [];
// for (const key in obj) {
//     keys.push(key)
//     values.push(obj[key]);
// }

// console.log(keys);
// console.log("values", values);


// function foo() {
//     const arr = Array.from(arguments);
//     return arr.reverse();
// }

// console.log(foo(4, 26, 23, 35, 78, 21));



// Масив об'єктів
// Перебор масива
// Пошук об'єкта за значенням вдастивості
// Колеція значень властивості



// Пошук друга за іменем

// const friends = [
//     {name: "Ross", online: false},
//     {name: "Joey", online: true},
//     {name: "Chandler", online: false},
//     {name: "Phoebe", online: true},
//     {name: "Monica", online: true},
//     {name: "Rachel", online: false},
// ];

// function findByName(allFriends, friendName) {
//     for(const item of allFriends) {
//         console.log(item);
// }
// }

// console.log(findByName(friends, "Joey"));

// *шукає всіх друзів

// const friends = [
//     {name: "Ross", online: false},
//     {name: "Joey", online: true},
//     {name: "Chandler", online: false},
//     {name: "Phoebe", online: true},
//     {name: "Monica", online: true},
//     {name: "Rachel", online: false},
// ];

// function findByName(allFriends, friendName) {
//     for(const item of allFriends) {
//         console.log(item.name);
// }
// }

// console.log(findByName(friends, "Joey"));

// *шукає за ім'ям

// const friends = [
//     {name: "Ross", online: false},
//     {name: "Joey", online: true},
//     {name: "Chandler", online: false},
//     {name: "Phoebe", online: true},
//     {name: "Monica", online: true},
//     {name: "Rachel", online: false},
// ];

// function findByName(allFriends, friendName) {
//     for(const item of allFriends) {
//         if (item.name.toLowerCase() === friendName.toLowerCase()) {
//             return item;
//         }
//     }
//     return "Not found";
// }

// console.log(findByName(friends, "ross"));

// *шукає за іменем і нижнім та/або верхнім регістром
// *чутливий до регістру

// const friends = [
//     {name: "Ross", online: false},
//     {name: "Joey", online: true},
//     {name: "Chandler", online: false},
//     {name: "Phoebe", online: true},
//     {name: "Monica", online: true},
//     {name: "Rachel", online: false},
// ];

// function findByName(allFriends, friendName) {
//     for(const item of allFriends) {
//         if (item.name.toLowerCase() === friendName.toLowerCase()) {
//             item.name += "!"
//             return item;
//         }
//     }
//     return "Not found";
// }

// console.log(findByName(friends, "ross"));

// // *добавили "!"

// const friends = [
//     {name: "Ross", online: false},
//     {name: "Joey", online: true},
//     {name: "Chandler", online: false},
//     {name: "Phoebe", online: true},
//     {name: "Monica", online: true},
//     {name: "Rachel", online: false},
// ];

// function findByName(allFriends, friendName) {
//     for(const item of allFriends) {
//         if (item.name.toLowerCase() === friendName.toLowerCase()) {
//             item.name = "Olya"
//             return item;
//         }
//     }
//     return "Not found";
// }

// console.log(findByName(friends, "ross"));

// *замінили ім'я

// const friends = [
//     {name: "Ross", online: false},
//     {name: "Joey", online: true},
//     {name: "Chandler", online: false},
//     {name: "Phoebe", online: true},
//     {name: "Monica", online: true},
//     {name: "Rachel", online: false},
// ];

// function findByName(allFriends, friendName) {
//     for(const item of allFriends) {
//         if (item.name.toLowerCase() === friendName.toLowerCase()) {
//             item.online = false;
//             return item;
//         }
//     }
//     return "Not found";
// }

// console.log(findByName(friends, "ross"));

// *замінили online



//Отримуємо імена всіх друзів

// const friends = [
//     {name: "Ross", online: false},
//     {name: "Joey", online: true},
//     {name: "Chandler", online: false},
//     {name: "Phoebe", online: true},
//     {name: "Monica", online: true},
//     {name: "Rachel", online: false},
// ];

// function getAllNames(allFriends) {
//     const result = [];
//     for(const item of allFriends) {
//         result.push(item.name);
//     }
//     return result;
// }

// console.log(getAllNames(friends));



//Отримую імена тільки тих друзів, які зараз онлайн

// const friends = [
//     {name: "Ross", online: false},
//     {name: "Joey", online: true},
//     {name: "Chandler", online: false},
//     {name: "Phoebe", online: true},
//     {name: "Monica", online: true},
//     {name: "Rachel", online: false},
// ];

// function getOnlineFriends(allFriends) {
//     const res = [];
//     for(const item of allFriends) {
//        if(item.online) {
//            res.push(item);
//        }
//     }
//     return res;
// }

// console.log(getOnlineFriends(friends));

// *ті хто онлайн


// const friends = [
//     {name: "Ross", online: false},
//     {name: "Joey", online: true},
//     {name: "Chandler", online: false},
//     {name: "Phoebe", online: true},
//     {name: "Monica", online: true},
//     {name: "Rachel", online: false},
// ];

// function getOnlineFriends(allFriends) {
//     const res = [];
//     for(const item of allFriends) {
//        if(!item.online) {
//            res.push(item);
//        }
//     }
//     return res;
// }

// console.log(getOnlineFriends(friends));

// *ті хто офлайн - "!"



// Напиши функцію calcTotalPrice(stones, stoneName), яка приймає
//  масив об'єктів та рядок з назвою каменю.
//  Функція рахує і повертає загальну вартість каміння з таким ім'ям,
//  ціною та кількістю з об'єкта

// const stones = [
//     {name: "Смарагд", price: 1300, quantity: 4},
//     {name: "Діамант", price: 2700, quantity: 3},
//     {name: "Сапфір", price: 400, quantity: 7},
//     {name: "Щебінь", price: 200, quantity: 2},
// ]

// function calcTotalPrice(arr, name) {
//     let sum = 0;
//     for(const stone of arr) {
//         if(stone.name === name) {
//             sum += stone.price * stone.quantity;
//         }
//     }
//     return sum;
// }

// console.log(calcTotalPrice(stones, "Діамант"));



// Об'єкти
// Методи об'єкта
// Доступ до властивостей об'єкта через this
// Зміна за посиланням

// *Стрілочна функція
// const arr = () => {}

// *під час виклику, this отримують з того об'єкта який викличе цю функцію

// const playlist = {
//     name: "My playlist",
//     rating: 5,
//     tracks: ["track-1, track-2", "track-3"],
//     changeName(newName) { //http://foo/1
//         console.log("this", this.name);
//         this.name = newName;
//     }
// }

// const petyaPlaylist = {
//     name: "Petya playlist",
//     rating: 4,
//     tracks: ["track-4, track-5", "track-6"]
// }

// petyaPlaylist.changeName = playlist.changeName; //http://foo/1
//             //http://foo/1
// petyaPlaylist.changeName("Petya playlist");
// playlist.changeName("lalala");

// console.log("playlist", playlist);
// console.log("petyaPlaylist", petyaPlaylist);


const playlist = {
    name: "My playlist",
    rating: 5,
    tracks: ["track-1, track-2", "track-3"],
    changeName(newName) { //http://foo/1
        console.log("this", this.name);
        this.name = newName;
    }
}

playlist.changeName("ALice playlist");

console.log("playlist", playlist);

