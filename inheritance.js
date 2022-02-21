
class Team {
    name;
    designation = 'support web dev';
    address = 'bangladesh'

    constructor(name, address) {
        this.name = name;
        this.address = address
    }
}






class Support extends Team {

    groupSupportTime;
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time

    }

    startSession() {
        console.log(this.name, 'start a support session from', this.address)
    }

}


class StudentCare extends Team {

    StudentSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.StudentSupportTime = time;
    }

    buildARoutine(student) {
        console.log(this.name, 'build a routine of your class for', student)
    }

}

class Naptune extends Team {

    supportTechnicalTime;
    constructor(name, address, techTime) {
        super(name, address);

        this.supportTechnicalTime = techTime;
    }
    releaseApp(version) {
        console.log(this.name, 'release App version', version)
    }
}

// for student care
const alia = new StudentCare('alia bhutt', 'Mumbai', '9:30 A.M')

console.log(alia);
alia.buildARoutine('abul hossain')

// for Naptune App

const akilInjamam = new Naptune('akil injamam', 'London', '8: 30 A.M');
console.log(akilInjamam);
akilInjamam.releaseApp('8.5')

// for support
const aamir = new Support('aamir khan', 'bangladesh', '3:45 P.M');
const salman = new Support('salman khan', 'soudi arab', '12: 15 P.M');
const hrittik = new Support('hrittik roshan', 'canada', '4:30 P.M');
const shaharuk = new Support('shaharuk khan', 'pakistan', '6:30 P.M');

// aamir.startSession();
// salman.startSession();
// shaharuk.startSession();
// hrittik.startSession();
console.log(aamir, salman, hrittik, shaharuk);

