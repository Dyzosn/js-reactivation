// Function declaration versus function expression
addition1(2, 3); // Runs fine: function declarations are hoisted (name + body moved to the top of scope before execution)
// addition2(2, 3); // This will be an error due to the Temporal Dead Zone (TDZ) rule that applies to const

function addition1(x, y) {
    return console.log(x + y);
}

const addition2 = function (x, y) {
    return console.log(x + y);
}

// Default parameter values
function subtraction(x = 'Could you please ', y = 'fill the argument parameter please?') {
    return typeof (x + y) === 'string'  ? console.log(x + y)  : console.log(x - y);
}
subtraction(4, 2); // 2
subtraction(); // Could you please fill the argument parameter please?
subtraction(null, null); // 0

// Rest parameters
function sumAll (...numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}

console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(0, 2, 7)); // 9
console.log(sumAll()); // 0

// A function that returns early, and a function that returns nothing
function checkPassword(password = '') {
    if (password.length < 8) {
        return 'Too short';
    } else {
        for (let i = 0; i < password.length; i++) {
            if (!Number.isNaN(Number(password[i]))) {
                return 'Valid';
            }
        }
        return 'Needs a number'
    }
}

function logOrderStatus(status) {
    console.log(`Order is: ${status}`);
}

console.log(checkPassword()); // Too short
console.log(checkPassword('dsad')); // Too short
console.log(checkPassword('nsaih3fk')); // Valid
console.log(checkPassword('hkkdshakdsha')); // Needs a number
const result = logOrderStatus('shipped');
console.log(result); // undefined due to this does not returns anything

// A function taking another function as an argument (callback pattern)
function applyDiscount(price, calculateFn) {
    console.log(`Final price: ${calculateFn(price)}`);
}

function tenPercentOff(price) {
    return price * 0.9;
}

function flatDiscount(price) {
    return price - 5;
}

applyDiscount(100, tenPercentOff); // 90
applyDiscount(100, flatDiscount);  // 95

function runTask(taskName, onFinish) {
    onFinish(taskName);
}

runTask('pooping', function (taskName) {
    console.log(`${taskName} finished successfully.`);
}); // pooping finished successfully.

function retryAction(action, maxAttempts) {
    for (let i = 1; i <= maxAttempts; i++) {
        action(i);
    }
}

retryAction(function (i) {
    console.log(`retry: ${i}`)
},3);
// retry: 1
// retry: 2
// retry: 3