// what is map?
// map works as like as for loop. its a very shortcut version of for and for of loop


// using map for array

const friends = ['tom hank', 'tom cruise', 'brade pit,', 'jeshon stethon', 'tom solaiman'];

const friendsLength = friends.map(friend => friend.length);

// console.log(friendsLength);

// using map for object  under array 

const products = [

    { name: 'bottle', price: 30, color: 'yellow', madeWith: 'plastic' },
    { name: 'watch', price: 3000, color: 'golden', madeWith: 'steel' },
    { name: 'mobile', price: 18000, color: 'black', madeWith: 'steel' },
    { name: 'leptop', price: 150000, color: 'silver', madeWith: 'steel' },

]


const productsInArray = products.map(pp => pp.price);

// console.log(productsInArray)

products.map(product => console.log(product));


// forEach
// this forEach is near similar like map. but there is some difference between tham. the difference is map finish its work and return it but forEach doesnt return , it just do the work.


products.forEach(product => console.log(product));