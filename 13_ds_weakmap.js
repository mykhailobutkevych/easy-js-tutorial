let obj = {name: 'weakmap'}
const arr = [obj];
obj = null;
console.log(arr[0]) // has reference

//==== get set delete has, only objects
const map = new WeakMap([
    [obj, 'obj data']
]);

obj = null
console.log(map) // no reference

//=====
const cache = new WeakMap()

function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(lena)
cacheUser(alex)

lena = null

console.log(cache.has(lena));
console.log(cache.has(alex));