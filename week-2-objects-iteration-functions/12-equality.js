console.log(1 === 1); // true, because they have same data type and number
console.log(1 === '1'); // false, their data type are different
console.log(1 == '1'); // true, the string got converted into number and they are being the same data type and number
console.log(0 == false); // true, the boolean got converted into number 0, and they are being the same data type and number
console.log(0 === false); // false, their data type are different
console.log(null == undefined); // true, hardcoded from the JS itself
console.log(null === undefined); // false, their data type are different
console.log(NaN === NaN); // false, NaN is never equal to anything including itself, this is a special case defined by the IEEE 754 standard, not something JavaScript invented
console.log('' == 0); // true, the string got converted into number 0, and they are being the same data type and number
console.log('' === 0); // false, their data type are different
console.log([] == false); // true, both got converted into number 0, and they are being the same data type and number
console.log([] == ''); // true, both got converted into number 0, and they are being the same data type and number
console.log(null == 0); // false, null in loose equality only ever matches undefined or itself, it never gets converted into a number like false does
console.log(undefined == null); // true, hardcoded from the JS itself
console.log('0' == false); // true, false becomes number 0 first, then the string '0' becomes number 0 too, so the comparison is 0 == 0, truthiness has no role in this at all

// note: line 8, 13, 15 are an unique cases
// == follows type coercion rules (fixed conversions between types), not truthiness (whether a single value acts as true or false in a condition). They can agree by coincidence, but they are not the same system.

// List every falsy value in JavaScript from memory, then verify
// Falsy values in JavaScript:
// 1. ''
// 2. null
// 3. undefined
// 4. 0 or -0
// 5. NaN
// 6. false
// 7. 0n, this is a BigInt data type

console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));          // false
console.log(Boolean(''));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Use ?. on a nested object with a missing branch
const user = {
    name: 'Budi',
    profile: {
        bio: 'Backend developer',
    },
};

console.log(user.profile?.bio); // Backend developer
console.log(user.address?.city); // undefined
console.log(user.address?.city?.length); // undefined

// Item 4 — Use ?? and compare it against || on a value of 0
const stock = 0;
const name = '';
const emptyValue = null;

console.log(stock || 10); // 10
console.log(stock ?? 10); // 0
console.log(name || 'Anonymous'); // 'Anonymous'
console.log(name ?? 'Anonymous'); // ''
console.log(emptyValue || 'Default'); // 'Default'
console.log(emptyValue ?? 'Default'); // 'Default'

// Summary: three different systems in JavaScript that look similar but are not
// 1. Coercion (==): fixed conversion rules between mismatched types, ignores truthy/falsy entirely
// 2. Truthiness (||, if): reacts to ALL falsy values (0, '', false, null, undefined, NaN)
// 3. Nullish (??, ?.): reacts ONLY to null and undefined, ignores every other falsy value