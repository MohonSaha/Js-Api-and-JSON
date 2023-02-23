// Parse is used to convert the stringified data to js object. 

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

const stringfiedShop = JSON.stringify(shop);
console.log(stringfiedShop);
const parseShop = JSON.parse(stringfiedShop);
console.log(parseShop);