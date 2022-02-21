// distructuring from object using chain method


const { age, maritualStatus } = { name: 'abul kashem', age: 38, proffesion: 'shopkeeper', maritualStatus: 'single' };


console.log(age, maritualStatus);

// distructuring from array using chain method

const [first, second, third] = [12, 25, 11, 23, 13, 27]

console.log(first, second, third);


// finding out of undefined in nested object

const company = {

    name: 'Mitsubishi',
    product: 'car',
    ceo: {
        name: 'akil injamam',
        id: 31,
        share: '70% share',
        position: 'owner'
    },
    work: {
        web: 'networking',
        security: 'casperisky',
        depertmenthead: 'abul bashar',
        development: {
            front: 'web designing',
            back: 'programmer'
        }
    },
}


console.log(company?.ceo?.id) //what the quation mark do ? if  the quation mark finds any undefine in the property chain , it will work and you will know which property is undefined. if it doesnt find any undefine in the property chain. it will not fall any effect in the property chain.
