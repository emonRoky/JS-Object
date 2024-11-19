// Loop through an object and print the key-value pairs with their types.

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

    for(let prop in myObject){
        let values = myObject[prop];
        console.log(`${prop}:${values} | ${typeof values}`);   
    }