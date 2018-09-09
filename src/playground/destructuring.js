////
//Object Descontructing
////
// const person = {
//     name :'Rupesh',
//     age :29,
//     location : {
//         city :'Kathmandu',
//         temp : 92
//     }
// };

// const{name:FirstName = 'Anonymous' , age} = person;

// console.log(`${FirstName} is ${age}`)

// const {city, temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`Its ${temperature} is ${city}`);
// }


// const book = {
//     title : 'Ego is the enemy',
//     author : 'Ryan Holiday',
//     publisher : {
//         name : 'Penguin'
//     }
// };

// const {name:publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName);


//
// Array destructuring
//

const address = ['1299 s Juniper Street','Melbourne','Victoria','19147'];
const [, city, state='Sydney'] = address;
console.log(`You are in ${city} ${state}`);

const menu =['Coffee (hot)','$2.00', '$2.50','$2.75'];

const [coffee,,price] = menu;
console.log(`A medium ${coffee} costs ${price}`);