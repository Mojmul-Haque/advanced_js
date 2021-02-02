const student = [
    { id: 3, name: 'Alamin' }, { id: 5, name: 'Abdur Razzak' }, { id: 20, name: 'Keya' }
]

const name = []

for (let i = 0; i < student.length; i++) {

    let store = student[i].name
    name.push(store)
}
console.log(name)
    // use it with map function

const names = student.map(x => x.name);
console.log('got it using map =', names)

const idNumber = student.map(x => x.id);
console.log(idNumber)

// filter 

const filter = student.filter(x => x.id > 3)
const filterName = student.filter(x => x.name.length > 10)
console.log(filter)
console.log('filterName = ', filterName)

// find 

const find = student.find(x => x.id > 3)
console.log('find id = ', find)