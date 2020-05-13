function* strGenerator() {
    yield 'A'
    yield 'B'
    yield 'C'
}

const str = strGenerator();

//=====
function* numberGen(n = 10) {
    for(let i = 0; i < n; i++) {
        yield i
    }
}

const num = numberGen();

//==== generator logic
const interator = {
    get(n = 10) {
        let i = 0
        return {
            next() {
                if(i < n) {
                    return {value: ++i, done: false}
                }
                return { value: undefined, done: true}
            }
        }
    }
}

//=====
function* iter(n = 10) {
    for(let i = 0; i < n; i++) {
        yield i;
    }
}

for (let k of iter()){
    console.log(k);
}