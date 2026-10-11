let requestBody = null;

console.log(typeof requestBody);
if (typeof requestBody === "object" && requestBody !== null) {
  console.log(requestBody.name);
}

//NaN
let age = Number("hello");

console.log(age);

console.log(typeof age);

if (typeof age === "number") {
  console.log("Valid age");
}
