class Support {
    name;
    designation = 'support web dev';
    address = 'bangladesh'

    constructor(name, address) {
        this.name = name;
        this.address = address
    }

    startSession() {
        console.log(this.name, 'start a support session from', this.address)
    }

}

const aamir = new Support('aamir khan', 'bangladesh');
const salman = new Support('salman khan', 'soudi arab');
const hrittik = new Support('hrittik roshan', 'canada');
const shaharuk = new Support('shaharuk khan', 'pakistan');

aamir.startSession();
salman.startSession();
shaharuk.startSession();
hrittik.startSession();
// console.log(aamir, salman);

const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);

console.log(output);