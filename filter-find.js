// what is filter?
// filter check the elements in the array like map and forEach . but filter check every element according to given condition.


const numbers = [1, 5, 10, 11, 8, 3, 19, 15, 13, 49, 33, 14];


const findLarge = numbers.filter(number => number > 20);
const findSmall = numbers.filter(number => number < 20);

// console.log(findSmall);

// using the filter in array under object 


const products = [

    { name: 'bottle', price: 30, color: 'yellow', madeWith: 'plastic' },
    { name: 'watch', price: 3000, color: 'golden', madeWith: 'steel' },
    { name: 'mobile', price: 18000, color: 'black', madeWith: 'steel' },
    { name: 'leptop', price: 150000, color: 'silver', madeWith: 'steel' },

]

const filterProduct = products.filter(product => product.price < 20000);
const filterProduct2 = products.filter(product => product.color == 'black');

console.log(filterProduct2);

// find
// what is find?
// find is closer to filter . it checks every element according to condition. but filter return you result under array . if it doesnt find anything according to condtition , it will return you empty array.on the other hand, if find can not find anything according to its condition. it will return an undefine.if filter find more then one similar element under array . it will show all similar elements under array.doesnt matter how many similar elements exist in the array . on the other hand , if find get similar elements under condition, it will just show one elemet from all similar elements. filter will return your result under array . and find will return your result only the elements, not in the array.



const findProduct = products.find(product => product.price > 20000);
console.log(findProduct);