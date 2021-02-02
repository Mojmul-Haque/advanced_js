class Parents {
    constructor() {
        this.fatherName = "Father's Name : Md. Rayhan Kobir";
        this.MotherName = "Mother's Name : Mst. Nasima Begum "
    }
}

class Child extends Parents {
    constructor(name) {
        super()
        this.name = 'Name: ' + name;
    }
    getName() {
        return this.name + ' ' + this.fatherName + ' ' + this.MotherName
    }
}

const baby1 = new Child('Nurnobi');
const baby2 = new Child('Fatema Akter Bristi')
console.log(baby1);
console.log(baby2)
console.log(baby1.getName())