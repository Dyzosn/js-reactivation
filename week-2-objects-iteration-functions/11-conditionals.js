const age = 50;

if (age >= 90) {
    console.log(`${age} year(s) old is equal to or more than 90 years old`);
} else if (age >= 60) {
    console.log(`${age} year(s) is equal to or more than 60 years old`);
} else if (age >= 45 && age <= 55) {
    console.log(`${age} year(s) is between 45 and 55 years old (inclusive)`);
} else {
    console.log(`${age} year(s) is either less than 45 or more than 90 years old`);
}
// 50 year(s) old is between 45 and 55 years old (inclusive)

const label1 = age >= 50 ? 'old' : 'not old enough';
console.log(label1); // old
console.log(`are you less than 50 years old: ${age < 50 ? 'yes' : 'hell nah'}`); // are you less than 50 years old: hell nah

// not a best practice of ternary operator:
const label2 = age >= 65 ? "senior" : age >= 18 ? "adult" : age >= 13 ? "teen" : "child";
console.log(label2); // adult

// Nested ternary readability note: didn't find this hard to parse.
// Read it as chained if-condition-else pairs, similar to if/else if/else.
// Might get harder with more branches or more complex conditions per branch.

// switch
const month = 7;

// Australia's Seasons
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log('Summer');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Autumn');
        break;
    case 6:
    case 7: // true here
    case 8: // and fall-through until here
        console.log('Winter'); // printed
        break; // stopped
    case 9:
    case 10:
    case 11:
        console.log('Spring');
        break;
    default:
        console.log('Invalid month');
}

// Negligence practice
const grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good"); // printed
    // supposed to be stopped here
  case "C": // got fall-through until here
    console.log("Average"); // printed
    break; // stopped
  default:
    console.log("Unknown grade");
}

// Logical operators: &&, ||, !, and short-circuit behaviour
console.log(0 && "hello"); // 0, because 0 is falsy, stops right there, "hello" never gets checked
console.log(1 && "hello"); // "hello", because 1 is truthy, continues to the right side
console.log(0 || "hello"); // "hello", because 0 is falsy, continues to the right side
console.log(1 || "hello"); // 1, because 1 is truthy, stops right there

// real examples:
let userInput = '';
const username = userInput || "Guest";
console.log(username); // Guest

const user1 = { profile: { address: { city: "Sydney" } } };
const user2 = {};
const city1 = user1 && user1.profile && user1.profile.address && user1.profile.address.city;
const city2 = user2 && user2.profile && user2.profile.address && user2.profile.address.city;
console.log(city1); // Sydney
console.log(city2); // undefined

console.log(0 || false || ""); // ''
console.log("hi" && null && "text"); // null
// Short-circuit rule for && and ||:
// Both return the ORIGINAL VALUE of the operand where they stop, never a plain boolean.
// || stops at the first truthy operand and returns it. If none are truthy, it returns the last operand's value as-is (whatever falsy value that happens to be).
// && stops at the first falsy operand and returns it. If none are falsy, it returns the last operand's value as-is (whatever truthy value that happens to be).

// combined logical operators example:
const isLoggedIn = true;
const isAdmin = false;
const isGuest = true;

// precedence: && > ||
const canAccess = isLoggedIn && isAdmin || isGuest; // (isLoggedIn && isAdmin) || isGuest
// step 1: (isLoggedIn && isAdmin) => isAdmin => isAdmin || isGuest
// step 2: isAdmin || isGuest => isGuest
console.log(canAccess); // true

// proof of short-circuit behaviour
function sideEffect() {
  console.log("called!");
  return true;
}
const result1 = false && sideEffect(); // false
const result2 = true || sideEffect();  // true
console.log(result1, result2); // false true
// Proof: "called!" never printed above. sideEffect() itself was never executed,
// not just its return value ignored. The right-hand side of && and || is
// completely skipped when short-circuit already determined the result.

// operator ! (logical NOT)
console.log(!true);      // false
console.log(!false);     // true
console.log(!0);         // true
console.log(!"");        // true
console.log(!"text");    // false
console.log(!null);      // true

// !! (double NOT)
// Purpose is different from single !: ! inverts a boolean (or converts-then-inverts).
// !! forces ANY value into a plain boolean, keeping its original truthy/falsy category
// but discarding the original value itself. Useful when a variable must hold a real
// boolean (e.g. a database boolean column), not just "something truthy".
console.log(!!"hello");  // true
console.log(!!0);        // false
// real example:
const user = { discountCode: 'SAVE10', }
const hasDiscount = !!user.discountCode;
console.log(hasDiscount); // true