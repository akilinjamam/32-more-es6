const numbers = [2, 11, 21, 10, 15, 19];


// old method
/* function doubleOld(number) {
    return number * 2
} */

// new method 

const doubleIt = (number) => number * 2



let output = []
for (const number of numbers) {
    const result = doubleIt(number)
    output.push(result)

}


console.log(output)