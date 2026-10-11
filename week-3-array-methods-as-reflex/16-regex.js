console.log(typeof /a/); // 'object'
console.log(/a/ instanceof RegExp); // true

// Item 1: regex is a pattern for matching text shapes, not exact strings.
// Literal form: /pattern/flags

// Flags:
// g = global, find ALL matches instead of stopping at the first one
// i = case-insensitive, treat 'A' the same as 'a'
const text = 'Cat, cat, and CAT';
console.log(text.match(/cat/)); // ['cat'], first exact lowercase match only
console.log(text.match(/cat/g)); // ['cat'], still just the one exact lowercase match, searched globally
console.log(text.match(/cat/gi)); // ['Cat', 'cat', 'CAT'], ignores case and finds all

const re = /dog/g;
console.log('Dog days, dog nights'.match(re)); // ['dog'], g doesn't change what matches, only how many are searched for

// Item 2: character classes match one character from a set of options.

// Shorthand classes:
console.log('a5b'.match(/\d/)); // ['5'], one digit
console.log('a5b'.match(/\w/g)); // ['a', '5', 'b'], word characters: letters, digits, underscore
console.log('a b'.match(/\s/)); // [' '], one whitespace character

// Negated shorthand (capital letter = opposite):
console.log('a5b'.match(/\D/g)); // ['a', 'b'], everything that is NOT a digit
console.log('a5b'.match(/\W/g)); // null, nothing here is a non-word character
console.log('a b'.match(/\S/g)); // ['a', 'b'], everything that is NOT whitespace

// Custom character class: pick your own set of characters in [ ]
console.log('cat'.match(/[abc]/)); // ['c'], index 0: scanning from the left, 'c' is the first character that is in the set
console.log('dog'.match(/[abc]/)); // null, none of d, o, g are in the set

// Negated custom class: ^ right after [ means "none of these"
console.log('dog'.match(/[^abc]/g)); // ['d', 'o', 'g'], matches chars that are NOT a, b, or c

// Ranges are just a shorthand way to write a custom class, not a new concept
console.log('Room 42B'.match(/[a-z]/gi)); // ['R', 'o', 'o', 'm', 'B'], [a-z] with i flag covers upper and lower

// Digits-only extraction (from earlier check):
console.log('Room 42B, Floor 3'.match(/\d/g)); // ['4', '2', '3']

// Item 3: quantifiers control how many times the preceding token can repeat.
// + = one or more (minimum 1, no upper limit)
// * = zero or more (can be absent entirely)
// ? = zero or one (optional, at most 1)
// {n} = exactly n times
// {n,} = at least n times, no upper limit
// {n,m} = at least n, at most m times

console.log('cooool'.match(/o+/));     // ['oooo'], one or more 'o' in a row
console.log('colour'.match(/colou?r/)); // 'colour', the u? is present and matches
console.log('color'.match(/colou?r/));  // 'color', the u? is absent and still matches
console.log('12345'.match(/\d{3}/));   // ['123'], exactly 3 digits
console.log('12345'.match(/\d{2,4}/)); // ['1234'], between 2 and 4 digits
console.log('bd'.match(/ba*d/)[0]);    // 'bd', a* allows zero 'a'
console.log('baaad'.match(/ba*d/)[0]); // 'baaad', a* also allows many
console.log('12345'.match(/\d{2,}/)[0]); // '12345', at least 2, no upper limit

// . (dot) matches any single character except a newline. It is a placeholder
// for one character, not the literal dot symbol.
console.log('cat'.match(/c.t/)); // ['cat'], . stands in for 'a'
console.log('cot'.match(/c.t/)); // ['cot'], . stands in for 'o'
console.log('ct'.match(/c.t/));  // null, . still needs one character to fill, can't be empty

// Greedy (default): a quantifier tries to consume as much as possible first,
// then backs off only if the rest of the pattern fails to match.
const html = '<b>bold</b> and <i>italic</i>';
console.log(html.match(/<.+>/));
// Matches the ENTIRE string from the first < to the LAST > in the whole
// string, not just <b>. .+ swallows everything first, then backs off one
// character at a time until it finds a > to stop at, which ends up being
// the very last > in the string.

// Lazy: adding ? right after a quantifier (+?, *?, {n,m}?) is not a separate
// "zero or one" rule. It's a modifier that flips that SAME quantifier from
// greedy to lazy: try the minimum amount first (still at least 1 for +),
// then add one character at a time only if the rest of the pattern hasn't
// matched yet. It changes the search STRATEGY, not the minimum/maximum count.
console.log(html.match(/<.+?>/g));
// ['<b>', '</b>', '<i>', '</i>'], stops at the FIRST > found after the
// minimum required characters, instead of swallowing to the last > in the string.

// Note: .? (dot followed by a standalone ?) is a completely different thing
// from .+? (lazy plus). .? means "zero or one character total", so it only
// matches tags with 0 or 1 character inside, missing closing tags like </b>
// which have 2 characters (/ and b) between < and >.
console.log(html.match(/<.?>/g)); // ['<b>', '<i>'], </b> and </i> are missed entirely

// Item 4: anchors match a POSITION, not a character. They don't consume
// any characters themselves.
// ^ = position at the start of the string
// $ = position at the end of the string
// \b = position at a word boundary (transition between a word character
//      \w and a non-word character, or the start/end of the string)

console.log(/^cat/.test('cat food')); // true, 'cat' is right at the start
console.log(/^cat/.test('a cat'));    // false, 'cat' is not at the start
console.log(/cat$/.test('my cat'));   // true, 'cat' is right at the end
console.log(/cat$/.test('cat food')); // false, 'cat' is not at the end
// Note: ^ inside [...] means negation ([^abc]), ^ outside [...] means
// "start of string" anchor. Same symbol, different meaning by context.

// \b solves the "cat inside concatenate" problem: /cat/ alone only cares
// about the letters c-a-t appearing in a row, it doesn't care what's
// around them.
console.log(/cat/.test('concatenate'));    // true, c-a-t appears mid-word
console.log(/\bcat\b/.test('concatenate')); // false, the 'c' in cat is preceded
// by 'n', a word character too, so that's a word-to-word transition, not
// a boundary. \b fails there, so the whole pattern fails.
console.log(/\bcat\b/.test('a cat sat'));   // true, spaces on both sides
// of 'cat' are non-word characters, so both sides are real word boundaries.

console.log('category cat cats'.match(/\bcat\b/g));
// ['cat'], only the standalone word. 'category' and 'cats' both fail
// because one side of their c-a-t is still attached to another word
// character (word-to-word transition, not a boundary).

// Item 5: groups (...) let you capture PART of the overall match separately,
// without changing what the overall match itself covers.

const date = '2026-09-25';
const dateResult = date.match(/(\d{4})-(\d{2})-(\d{2})/);
console.log(dateResult[0]); // '2026-09-25', the whole match
console.log(dateResult[1]); // '2026', first group
console.log(dateResult[2]); // '09', second group
console.log(dateResult[3]); // '25', third group
// Numbered groups work, but the index alone doesn't say what each one means.

// Named groups (?<name>...) solve that: access by name instead of position.
const namedDateResult = date.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
console.log(namedDateResult.groups.year);  // '2026'
console.log(namedDateResult.groups.month); // '09'
console.log(namedDateResult.groups.day);   // '25'
// This is what the `groups` property (seen as `groups: undefined` since
// item 1) actually holds once named groups are used.

// Groups don't need to be adjacent in the source string. Whatever sits
// between two groups in the pattern (here .+) still gets consumed and is
// still part of the overall match, it's just not captured under a name.
const orderStr = 'Order #12345 placed on 2026-09-25';
const orderResult = orderStr.match(/(?<orderId>\d{5}).+(?<orderYear>\d{4})/);
console.log(orderResult[0]); // '12345 placed on 2026', the FULL match, including
// the " placed on " text in between, groups don't shrink the overall match
console.log(orderResult.groups.orderId);   // '12345'
console.log(orderResult.groups.orderYear); // '2026'
// Groups only ADD labeled access to parts of the match, they never remove
// or hide anything from the overall result[0].

// Item 6: the three methods you will actually use.
// .test()    asks "is there a match?"     -> boolean
// .match()   asks "what matched?"         -> array, or null if nothing matched
// .replace() asks "change it into what?"  -> a NEW string
// .test() is called on the regex: regex.test(string)
// .match() and .replace() are called on the string: string.match(regex)

console.log(/\d/.test('a5b')); // true
console.log(/\d/.test('abc')); // false

console.log('a5b7'.match(/\d/g)); // ['5', '7'], with g: plain array of matches
console.log('abc'.match(/\d/g));  // null, NOT an empty array, so guard before using the result

const sample = 'a5b7';
console.log(sample.replace(/\d/, '#'));  // 'a#b7', without g only the FIRST match is replaced
console.log(sample.replace(/\d/g, '#')); // 'a#b#', with g every match is replaced
console.log(sample);                     // 'a5b7', strings are immutable, replace returns a new string

// Gotcha: a regex with the g flag remembers where it stopped (lastIndex),
// so calling .test() repeatedly on the same regex object alternates results.
// Rule: do not use g on a regex that is used with .test().
const stateful = /\d/g;
console.log(stateful.test('a5')); // true
console.log(stateful.test('a5')); // false, same string, different answer
console.log(stateful.test('a5')); // true

// Check from the session:
const phones = 'Call 0412 345 678 or 0499 111 222';
console.log(/\d/.test(phones));         // true
console.log(phones.replace(/\d/g, 'X')); // 'Call XXXX XXX XXX or XXXX XXX XXX'

// Item 7: replace() with a function instead of a string.
// The second argument of .replace() can be a string (same text for every
// match) or a function (replacement computed from the match).

// A string is enough when every match gets the same replacement...
console.log('Call 0412 345 678'.replace(/\d/g, 'X')); // 'Call XXXX XXX XXX'

// ...or when you only rearrange groups. $1, $2, $3 are placeholders for the
// content of group 1, 2, 3. Write $$ for a literal dollar sign.
console.log('2026-09-25'.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1')); // '25/09/2026'

// A function is needed when the replacement depends on the matched text.
// Rules:
// 1. It is called once per match.
// 2. First argument is the matched text, then one argument per group, then
//    the match position, then the original string (and a groups object last
//    if named groups are used).
// 3. Whatever it returns replaces the match. A number becomes a string.
// 4. The original string is never changed, replace returns a new string.
const calls = 'a1b22'.replace(/\d+/g, (m) => {
  console.log('called with', m); // called with 1, then called with 22
  return m * 2;
});
console.log(calls); // 'a2b44'

// Coercion note: * converts a string to a number, + concatenates text.
console.log('22' * 2); // 44
console.log('22' + 2); // '222'

// Scenario 1: change the matched text.
console.log('hello big world'.replace(/\b\w/g, (m) => m.toUpperCase())); // 'Hello Big World'

// Scenario 2: compute. Number(m) first, otherwise + would concatenate.
console.log('Price 10 and 25'.replace(/\d+/g, (m) => Number(m) + 5)); // 'Price 15 and 30'

// Scenario 3: lookup table. ?? falls back to m only for null or undefined.
const map = { 1: 'active', 2: 'pending' };
console.log('order 1, order 2, order 3'.replace(/\d/g, (m) => map[m] ?? m)); // 'order active, order pending, order 3'

// Scenario 4: redaction with variable length, keep the last 4 digits.
// '*'.repeat(n) repeats text n times. .slice(-4) takes the last 4 characters.
console.log('Card 411122223333444'.replace(/\d{5,}/g, (m) => '*'.repeat(m.length - 4) + m.slice(-4))); // 'Card ***********3444'

// Scenario 5: redaction using groups as arguments, keep the first letter.
// [^\s@] is "any character except whitespace or @", so dots are included and
// the match cannot run across spaces the way .* would.
console.log('Contact john.doe@example.com now'.replace(/([^\s@])([^\s@]*)@/g, (m, first, rest) => first + '*'.repeat(rest.length) + '@')); // 'Contact j*******@example.com now'

// How the engine scans: it tries each start position from the left, and the
// leftmost position where the WHOLE pattern succeeds wins. With g, the search
// continues right after the previous match.

// Check from the session:
console.log('ab cd ef'.replace(/\w+/g, (m) => m.toUpperCase())); // 'AB CD EF'

// Item 8: rewrite a manual loop as a regex, then compare which is easier to maintain.

// Manual loop version: collect every word that ends with 'at'.
const loopText = 'cat sat on the mat';
const loopWords = loopText.split(' ');
const loopResult = [];
for (let i = 0; i < loopWords.length; i++) {
    if (loopWords[i].endsWith('at')) loopResult.push(loopWords[i]);
}
console.log(loopResult); // [ 'cat', 'sat', 'mat' ]

// Regex version: one line, same input, same output.
console.log(loopText.match(/\b\w*at\b/g)); // [ 'cat', 'sat', 'mat' ]

// Task: collect every word that starts with the letter c.
const practiceText = 'chat at home, cool cat';
console.log(practiceText.match(/\bc\w*/g)); // [ 'chat', 'cool', 'cat' ]

// Read both aloud, then say what each one does in my own words:
// Loop version says:
// const loopText = 'cat sat on the mat'; converted into an array with const loopWords = loopText.split(' '); and turned into ['cat', 'sat', 'on', 'the', 'mat'], the spaces are gone due to split(' ')
// for (let i = 0; i < loopWords.length; i++) declaring and initializing the iteration with incrementation from i = 0 until less than loopWords.length
// if (loopWords[i].endsWith('at')) loopResult.push(loopWords[i]); each iteration it checks if current element ends with 'at' or not, if yes it got pushed into loopResult
// all result collected into loopResult and printed console.log(loopResult); // [ 'cat', 'sat', 'mat' ]
// Regex version says: loopText.match is the method to match the string with the assigned criteria or pattern within its argument
// \b placed at the start means transition from non word to word char and conversely if placed at the last
// \w* means all the word char with quantity of matched 0 or more
// \w* it applies greedy scanning mechanism, so it take the whole word after that check from right to left and got stopped after 'at' got passed
// after it reached at 'at' after that must be transitioned from word to non word due to \b at the last to prevent from any other word chars included
// g means a global flag, which could returns more than one matched

// Decision: which one would I rather maintain in six months, and why?
// Decision: it depends on the demand and the purpose. The loop version is easier to change,
// because it is flexible enough for many different scenarios. The regex version is shorter,
// so it fits when the goal is only to match a simple text pattern.
// For the 'at' task in this file, I would pick the regex version, because it goes
// straight to the point of what the task needs.

// Extra practice (not in the roadmap): .repeat() and .slice(-4).
// Turn 'abcdefgh' into '****efgh' without typing the stars by hand.
const maskSource = 'abcdefgh';
console.log('*'.repeat(maskSource.length - 4) + maskSource.slice(-4)); // '****efgh'
console.log(maskSource.replace(/.+/, (m) => '*'.repeat(m.length-4) + m.slice(-4))); // '****efgh'

// Item 9: when not to use regex. If the pattern needs a comment to be understood, write plain code instead.

// A. Check whether 'error: disk full' contains the word 'error'.
console.log('error: disk full'.includes('error')); // true
// This objective is only to seek if certain text exists within a string, so I think, just utilise a specialised method to cope with this is more straightforward.

// B. Extract all numbers from 'a1b22c333'.
console.log('a1b22c333'.match(/\d+/g)); // [ '1', '22', '333' ]
// This needs utilise a regex pattern to solve with is more simple and effective than a whole looping code.

// C. Check whether the file name 'photo.png' ends with 'png'.
console.log('photo.png'.endsWith('png')); // true
// The reason for this is similar with objective A, so the answer is just use the specialised method and solving it with straightforward.

// Rule: I use regex when the objective is needs to tackle with some complex patterns and difficult to cope with basic looping mechanism.
// And I'm not gonna use the regex when the objective is simple and obvious only needs a certain specialised method to solve with.

// Item 10: catastrophic backtracking. A nested quantifier like (a+)+ can hang on hostile input.

function timeIt(n) {
    const input = 'a'.repeat(n) + 'b';       // n letters 'a', then one 'b'
    const start = Date.now();                // time before, in milliseconds
    const result = /^(a+)+$/.test(input);    // the risky pattern
    console.log(n, result, Date.now() - start, 'ms'); // time after minus time before
}
timeIt(10);
timeIt(20);
timeIt(22);
timeIt(24);
timeIt(26);

console.log(/^(a+)+/.test('aaaaaaaaaab'));  // true, no $ so the b is just left over
console.log(/^(a+)+$/.test('aaaaaaaaaab')); // false, $ needs the string to end

// Safe version: one a+ only, no nested quantifier.
function timeSafe(n) {
    const input = 'a'.repeat(n) + 'b';
    const start = Date.now();
    const result = /^a+$/.test(input);
    console.log('safe', n, result, Date.now() - start, 'ms');
}
timeSafe(26);
timeSafe(100000);

// Both patterns accept exactly the same strings. The outer + adds nothing, it only adds risk.
console.log(/^(a+)+$/.test('aaaa'), /^a+$/.test('aaaa')); // true true
console.log(/^(a+)+$/.test('aaab'), /^a+$/.test('aaab')); // false false

// Second safety net: reject long input before the regex runs.
function isValidName(name) {
    if (name.length > 50) return false;
    return /^\w+$/.test(name);
}

console.log(isValidName('naufal')); // true
console.log(isValidName('naufal!')); // false
console.log(isValidName('a'.repeat(100000) + '!')); // false

// Summary Item 10:
// Danger: a nested quantifier like (a+)+ makes the number of attempts grow exponentially (about 2^n)
// when the input almost matches but fails at the end. A short hostile string can freeze the CPU.
// Fix 1: rewrite the pattern without nesting. ^a+$ accepts the same strings with only about n attempts.
// Fix 2: limit the input length before the regex runs, so n can never get huge.
// Why it matters for my apps: Tallo, Relai and Corvus accept user text, and one hostile request
// could tie up the whole server.

// Item 11: Success Check, answered from memory.
const checkSample = 'a5 7 b9';
console.log(checkSample.match(/\d/g));   // [ '5', '7', '9' ]
// / / wrap the regex, \d matches one digit at a time, g finds every match, not only the first.
console.log(checkSample.match(/\b\d/g)); // [ '7' ]
// \b needs a word / non-word transition before the digit. '5' follows 'a' and '9' follows 'b'
// (both word characters, no boundary). '7' follows a space, so it passes.