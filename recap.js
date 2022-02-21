// variable declearation 
// difference between const and let. the characteristic of const is , the variable const can not be declare second time. if you declare it will show type-error.


let phone = 'iPhone 13 max pro';

phone = 'samsung galaxy s 13'
const price = 120000;
const myFavouritPerson = 'ammu'

console.log(phone);


// defult parameter and use of spread

function maxNumber(array = []) {  // putting = [] under 1st bracket means, if you dont put any parameter, by defult it will show -infinity

    const max = Math.max(...array); //if you put 3 dot, it will take out the numbers from array and count the biggest one
    return max;
}

console.log(maxNumber([]))

// string template

const string = `i love the phone ${phone}, the price of iphone is ${price}. i will give it to my ${myFavouritPerson}`


console.log(string);


// arrow function

const arrow = (x, y) => x * y;

console.log(arrow(9, 9))