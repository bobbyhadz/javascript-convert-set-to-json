// EXAMPLE 1 - Convert a Set to JSON in JavaScript

const set1 = new Set(['a', 'b', 'c']);

const json = JSON.stringify(Array.from(set1));
console.log(json); // 👉️ '["a", "b", "c"]'

console.log(typeof json); // 👉️ "string"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function setToJSON(set) {
//   return JSON.stringify(Array.from(set));
// }

// const set1 = new Set(['a', 'b', 'c']);

// // 👇️ '["a","b","c"]'
// console.log(setToJSON(set1));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert a Set to JSON using spread syntax (...)

// const set1 = new Set(['a', 'b', 'c']);

// const json = JSON.stringify([...set1]);
// console.log(json); // 👉️ '["a", "b", "c"]'

// ------------------------------------------------------------------

// // EXAMPLE 4 - Defining a reusable function

// function setToJSON(set) {
//   return JSON.stringify([...set]);
// }

// const set1 = new Set(['a', 'b', 'c']);

// // 👇️ '["a","b","c"]'
// console.log(setToJSON(set1));

// ------------------------------------------------------------------

// // EXAMPLE 5 - Convert a JSON string to a `Set` in JavaScript

// const set1 = new Set(['a', 'b', 'c']);

// const json1 = JSON.stringify(Array.from(set1));
// console.log(json1); // 👉️ '["a", "b", "c"]'

// // ✅ Parse back to Set
// const parsed = new Set(JSON.parse(json1));
// console.log(parsed); // 👉️ {'a', 'b', 'c'}

// ------------------------------------------------------------------

// // EXAMPLE 6 - Convert an Object with Set values to JSON

// const obj = {
//   numbers: new Set([1, 2]),
//   colors: new Set(['red', 'green']),
// };

// const json = JSON.stringify(obj, (_key, value) => {
//   return value instanceof Set ? [...value] : value;
// });

// // 👇️ {"numbers":[1,2],"colors":["red","green"]}
// console.log(json);
