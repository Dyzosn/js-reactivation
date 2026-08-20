// 1. flat array of numbers
// prediction: [ 21, 12, 71 ]
console.log([21, 12, 71]);
// 2. flat array of strings
// prediction: [ "pop", "rock", "rnb" ]
console.log(["pop", "rock", "rnb"]);
// 3. flat object with a few keys
// prediction: { id: 21, name: naufal, gender: male, age: 21, gay: false }
console.log({id: 21, name: "naufal", gender: "male", age: 21, gay: false});
// 4. array of objects
// prediction: [ { id: 21, male: true }, { id: 12, male: false } ]
console.log([{id: 21, male: true}, {id: 12, male: false}]);
// 5. object containing an array as a value'
// prediction:{ id: 21, cars: [ nissa, toyota, pagani ] }
console.log({id: 21, cars: ["nissa", "toyota", "pagani"]});
// 6. array of arrays (nested array)
// prediction: [ [ 1, 1 ], [ 1, 2 ], [ 1, 3 ] ]
console.log([[1, 1], [1, 2], [1, 3]]);
// 7. object nested inside object (2 levels)
// prediction: { outside: { inside: "inner" } }
console.log({outside: {inside: "inner"}});
// 8. empty array and empty object
// prediction: []
console.log([]);
// prediction: {}
console.log({});
// 9. array with mixed types (number, string, boolean, null)
// prediction: [ 21, "naufal", true, null ]
console.log([21, "naufal", true, null]);
// 10. object with a key whose value is undefined
// prediction:{ und: undefined }
console.log({und: undefined});

let twoLevel = {outside: {inside: 'inner'}};
console.log(twoLevel);
console.log(JSON.stringify(twoLevel, null, 2));

let accountTemplate = {id: 21, name: 'naufal', email: 'naufalgames7@gmail.com', password: 'bandito'};
console.log(JSON.stringify(accountTemplate, ['id', 'email', 'name'], 2));
console.log(JSON.stringify(accountTemplate, (key, value) => {
    if (key === 'password') return undefined // skip this key
    return value; // print besides the 'password' key and its value
}, 2));

console.log(JSON.stringify(accountTemplate, (key, value) => {
    console.log('dipanggil dengan key:', JSON.stringify(key), '| value:', value);
    if (key === 'password') return undefined;
    return value;
}, 2));

let deep = {
  level1: { 
    level2: {
      level3: { // truncated here as an [Object]
        level4: {
          value: 'deepest part'
        }
      }
    }
  }
};

console.log(deep); // { level1: { level2: { level3: [Object] } } }
console.log(deep.level1.level2.level3.level4.value);
console.log(JSON.stringify(deep, null, 2));