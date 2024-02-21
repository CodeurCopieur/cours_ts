let fruits: string[];

fruits = ['fraise', 'cerise', 'pomme']
fruits.push('kiwi')

console.log(fruits);

let mixedArray = [['azaz', [1, 2], 2], 1, 'mixedArray']
mixedArray.push([1, 2])

let nums: number[]
// nums.push(1) > erreur je ne peux pas push des nombres dans le tableau, si j'ai pas init la variable avec un tableau
nums = [2,3,4]

let nums2: number[] = [0]
nums2.push(1)

console.log(nums2);

let random: any[]
random = [false, true, '1']

console.log(random);



// Object

let obj: object
// obj = 1 6 > erreur
obj = {name: 'codwerk'}

const car = {
  modele: 'a',
  annee: '2016',
  km: 105000
}

let profil: {
  name: string,
  age: number,
  hobbies: string[]
}

profil = {
  name: 'codwerk',
  age: 29,
  hobbies: ['school', 'sport', 'movie']
}

let user: {
  name: string,
  age: number,
  hobbies: string[]
} = {
  name: 'codwerk',
  age: 29,
  hobbies: ['school', 'sport', 'movie']
}