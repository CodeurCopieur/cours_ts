"use strict";
var fruits;
fruits = ['fraise', 'cerise', 'pomme'];
fruits.push('kiwi');
console.log(fruits);
var mixedArray = [['azaz', [1, 2], 2], 1, 'mixedArray'];
mixedArray.push([1, 2]);
var nums;
// nums.push(1) > erreur je ne peux pas push des nombres dans le tableau, si j'ai pas init la variable avec un tableau
nums = [2, 3, 4];
var nums2 = [0];
nums2.push(1);
console.log(nums2);
var random;
random = [false, true, '1'];
console.log(random);
// Object
var obj;
// obj = 1 6 > erreur
obj = { name: 'codwerk' };
var car = {
    modele: 'a',
    annee: '2016',
    km: 105000
};
var profil;
profil = {
    name: 'codwerk',
    age: 29,
    hobbies: ['school', 'sport', 'movie']
};
var user = {
    name: 'codwerk',
    age: 29,
    hobbies: ['school', 'sport', 'movie']
};
