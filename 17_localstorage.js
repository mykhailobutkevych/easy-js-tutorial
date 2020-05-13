// works only with strings, saved only locally, more storage than cookie

const object = {
    name: 'Vlad',
    age: 20
};

// localStorage.setItem('person', JSON.stringify(object))
const raw = localStorage.getItem('person');
const person = JSON.parse(raw);
person.name = 'Alex';
console.log(person);

//==== listener that triggers on tab switch
window.addEventListener('storage', event => {
    console.log(event)
})

// window.onstorage = () => {}