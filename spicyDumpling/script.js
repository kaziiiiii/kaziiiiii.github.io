'use strict';

//  Array   , Object , function 
const restaurant = {
    name: 'SPICY DUMPLING',
    location: '5604 West street, Chicago, Illions',
    categories: ['ChickenMomo', 'VegeMomo'],
    starterMenu: ['Garlic ', 'Bread', 'Salad'],
    mainMenu: ['Momo', 'FryMomo', 'SeaMomo'],
    order: function(startedIndex, mainIndex) { // this function get element from any array in the restaurant object 
        return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
    },
    openHours: {
        monday: {
            open: 10,
            close: 7,
        },
        friday: {
            open: 11,
            close: 8,
        },
        saturday: {
            open: 12,
            close: 9,
        },
    },
    orderDelivery: function({ startedIndex, mainIndex, address, time }) {
        console.log(` Order Received ! ${this.starterMenu[startedIndex]} and ${this.mainMenu[mainIndex]} \n  Will Be Devlivered to ${address} at ${time} PM`);
    },
    orderMomo: function(ing1, ing2, ing3) {
        console.log(` HERE IS YOUR MOMO WITH ${ing1} , ${ing2} , ${ing3}`);
    },
    orderFryMomo: function(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

//////////////////////////////////////////////////////////////////////////////////

// Use Any Data type, return ANY data type
console.log(3 || 'Jonas');
console.log('Jonas' || 3);
console.log('' || 'BATMAN');

/// If the varibles don't exit then add 10 
// in this case numGuests undefind But if the numGuests is already defind it will use that number
// restaurant.numGuests = 24;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log("====>" + guests1);

// Nullish  Coalesicing Operator 
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


console.log(`----------- AND ----------------`);
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

restaurant.orderMomo && restaurant.orderMomo('onion', 'mushroom');

restaurant.orderFryMomo('onion', 'olvies', 'spincah');
restaurant.orderDelivery({
    time: '22:30',
    address: 'Vail ILL',
    mainIndex: 2,
    startedIndex: 2
});
//////////////////////////////////////////////////////////////////////////////////

const arr = [7, 8, 9];
console.log(`******* ${arr}`);

/// The Spread Operator 
const newArr = [1, 2, ...arr];
console.log(`******* ${newArr}`);
console.log(0, ...newArr);

/// The Spread Operator 
const arry = [1, 2, 3];
console.log(-3, -2, -1, 0, ...arry);

// Create a new element to add on the  Main Menu array by doing Spread Operator 
const newMenu = [...restaurant.mainMenu, 'Pizza'];
console.log(newMenu);

// Copy Array 
const mainMenuCopy = [...restaurant.mainMenu];
console.log(`*******${mainMenuCopy}`);

// Combine Start Menu and Main Menu 
const allMain = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(` Starter Menu And Main Menu ===>${allMain}`);

// Iterables : arrays , strings , maps , sets, Not Objects 
const str = 'Batmans';
console.log(...str);
const letters = [...str, 'R', 'J'];
console.log(`===> ${letters}`);

/// Real - World Example 
// const ingerdients = [prompt(" let's make momo \n Ingerdient 1 ?  "), prompt(" let's make momo \n Ingerdient 2 ?  "), prompt(" let's make momo \n Ingerdient 3 ?  "), ];
// console.log(ingerdients);
// restaurant.orderMomo(...ingerdients);

// Objects 
// This will copy all everthing from restaurant to newRestaurant
const newRestaurant = {...restaurant, founder: 'BATMAN' };
console.log(newRestaurant);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Rest Pattern and Parameters
// SPREAD, Because on Right Side of =
const ar = [1, 2, ...[3, 4]];
console.log(`####${ar}`);

// Rest because on left side of =
const [n, m, ...others] = [1, 2, 3, 4, 5];
console.log(n, m, others);

const [s1, m1, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(" ---------> " + s1, m1, otherFood);

// objects 
const { saturday, ...weekdays } = restaurant.openHours;
console.log('===>' + weekdays + '<===');

///2) functions 
const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
}
add(2, 3);
add(5, 3, 7, 2);
add(5, 6, 7, 4, 3, 4, 5, 6);

const x = [23, 5, 7];
add(...x);
console.log(x);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Print the name from resturant Array 
// const restaurantName = restaurant.name;
// console.log(`Resturant Name :  ${restaurantName}`);

// Print the name from resturant Array 
const restaurantlocation = restaurant.location;
console.log(`Resturant location :  ${restaurantlocation}`);

// Get Element from restaurant Array from categories array 
const [first, second] = restaurant.categories;
console.log(` Categories : ${first}, ${second}`);

// Get Element from restaurant Array from Start Menu array 
const [starterMenu0, starterMenu1] = restaurant.starterMenu;
console.log(` Start Menu : ${starterMenu0} , ${starterMenu1}`);

// Get Element from restaurant Array from Main Menu array 
const [mainMenu0, mainMenu1, mainMenu2] = restaurant.mainMenu;
console.log(` Main Menu  :  ${mainMenu0} , ${mainMenu1} , ${mainMenu2}`);

// recevie 2 return vaules from a function 
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// nested Array  Destructing
const nastedArray = [3, 4, [5, 6]];
// const [i, , j] = nastedArray; //  i, ,j where , , will excape the element on the Array  
// console.log(i, j);
//  Nested Destructing insdie a Destructing 
const [i, , [j, k]] = nastedArray;
console.log(i, j, k);

// Default Values 
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
const [a = 1, b = 1, c = 1] = [];
console.log(a, b, c);
///////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////// Object Destructing ////////////////////////
const { name, openHours, categories } = restaurant;
console.log(name, openHours, categories);

// Varibles name to different from propartie name 
const {
    name: restaurantName,
    openHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Set a Default values 
const { startmenu = [], mainMenu: menu = [] } = restaurant;
console.log(startmenu, menu);

/// Mutating Variables 
let t = 112;
let w = 333;
const obj = { t: 24, w: 9, e: 10 };
({ t, w } = obj);
console.log(t, w);

// Nested Objects
const { friday: { open, close } } = openHours;
console.log(open, close);