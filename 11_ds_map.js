// Advanced object, anything could be a key

const obj = {
    name: 'Vlad',
    age: 26,
    job: 'Fullstack'
}

const entries = [
    ['name', 'Vlad'],
    ['age', 26],
    ['job', 'Fullstack']
]

console.log(Object.entries(obj));
console.log(Object.fromEntries(entries));

//=========
const map = new Map(entries)

map 
    .set('NewField', 4)
    .set(obj, 'Value of object')
    .set(NaN, 'NaN ???')


//==========
const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
] 

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[2]))