const order = {
    id: 21,
    accountId: 'a21',
    address: 'Sydney',
    payment: 'Mastercard',
    items: {
        i123: 3,
        i124: 2,
        i125: 4,
    },
};

console.log(order.items); // { i123: 3, i124: 2, i125: 4 }
console.log(order['items']); // { i123: 3, i124: 2, i125: 4 }
console.log(order.id); // 21
console.log(order['id']); // 21
console.log(order.accountId); // a21
console.log(order['accountId']); // a21
console.log(order.payment); // Mastercard
console.log(order['payment']); // Mastercard
console.log(order.address); // Sydney
console.log(order['address']); // Sydney
console.log(order.items['i125']); // 4

console.log(order.discount); // undefined
console.log(order['discount']); // undefined

const key = 'accountId';
console.log(order[key]); // it's still running because key contains string of 'accountId' which order object has a key that has the same name and it has a valid value,
// in short, that above line is the same as order['accountId'], so it returns a21
console.log(order.key); // on the other hand, this line returns an undefined due to order has no any keys named 'key'

order.discount = 0.1;
order.payment = 'visa';
delete order.items;
console.log(order); // { id: 21, accountId: 'a21', address: 'Sydney', payment: 'visa', discount: 0.1 }

const testA = { address: 'Sydney '};
delete testA.address;
console.log(testA.address); // undefined
console.log('address' in testA); // false

const testB = { address: 'Sydney '};
testB.address = undefined;
console.log(testB.address); // undefined
console.log('address' in testB); // true

const company = {
    name: 'Acme',
    address: {
        city: 'Sydney',
        location: {
            lat: -33.87,
            lng: 151.21,
        },
    },
};

console.log(company.address.location.lat); // -33.87
company.manager = {
    contact: {
        email: 'manager@email.com', 
    },
};
console.log(company.manager.contact.email); // manager@email.com
console.log(company['manager']['contact']['email']); // manager@email.com
console.log(company); // { name: 'Acme', address: { city: 'Sydney', location: { lat: -33.87, lngL 151.21 } }, manager: { contact: { email: 'manager@email.com' } } }