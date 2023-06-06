// Write a function that takes an object representing a person as input, and extracts the name and street
// properties from a nested object using object destructuring. The function should return an object with these two
// properties. A sample object is given below.


function filter(object){
    let name = object["name"]
    let address = object ["address"]["street"]

    return {name, address}
}


const person = {
    name: 'Mithun',
    age: 21,
    address : {
        street: "B8, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        State: "Uttar Pradesh"
    }
};


console.log(filter(person))