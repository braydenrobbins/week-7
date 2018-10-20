var person1 = {firstname: 'Brayden', lastname: 'Robbins', age: 20}

var person2 = {firstname: 'Trae', lastname: 'Robbins', age: 200}

var person3 = {firstname: 'Bob', lastname: 'Rockers', age: 42}

var people = [person1, person2, person3];

for (var i = 0; i < people.length; i++) {
    console.log(people[i].firstname);
}

function useObject(ourObject) {
    console.log(ourObject[1].firstname);
}
useObject(people);
