// let userOne = { name: "Amaka", age: 22 };

// let userTwo = { ...userOne };

// userTwo.age = 40;

// console.log(userOne.age);
// console.log(userTwo.age);


let userOne = {
  name: "Amaka",
  age: 22,
  address: {
    city: "Lagos",
    street: "Akoka"
  }
};

let userTwo = { ...userOne };

userTwo.age = 40;

userTwo.address.city = "Abuja";

console.log(userOne.age);
console.log(userTwo.age);

console.log(userOne.address.city);
console.log(userTwo.address.city);