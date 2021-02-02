class Student {
    constructor(sId, sName, section) {
        this.id = sId;
        this.name = sName;
        this.section = section;
        this.SchoolName = "Jamirhat Hight School" //default property of all student;

    }
}

const student1 = new Student(1, 'Alfahad', "Arts")
const student2 = new Student(3, 'Sagor', 'Science')
console.log(student1, student2)