const user = {id: 1, name: "Mohon Saha", job: "Web Developer"};
const stringfied = JSON.stringify(user);

// console.log(user);
// console.log(stringfied);

// Js:
// { id: 1, name: 'Mohon Saha', job: 'Web Developer' }

// Json: It will double quoted everything excepts number and boolean.
// {"id":1,"name":"Mohon Saha","job":"Web Developer"}


// More complex object:

const shop ={
    owner: 'Mohon Saha',
    address: {
        street: 'Kochukhet Vuter Goli',
        city: 'kafrul',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mouse', 'monitor', 'camera'],
    margin: 45000,
    isOpen: true,
    isNew: false
}

console.log(shop);
const stringfiedShop = JSON.stringify(shop);
console.log(stringfiedShop);