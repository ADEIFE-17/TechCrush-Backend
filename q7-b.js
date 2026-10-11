const student = {
  name: "Chidi",
  score: 50,
};

Object.freeze(student);

student.score = 90;

console.log(student);
console.log(Object.isFrozen(student));
