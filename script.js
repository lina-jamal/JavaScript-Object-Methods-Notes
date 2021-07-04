// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
// };
// console.log(person.firstName);
// console.log(person["firstName"]);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return person.firstName + " " + person.lastName;
//   },
// };

///How access an object method ???
///objectName.methodName();
// console.log(person.fullName());
/// i can also store the result in variable name
// let name = person.fullName()

// const addOne = {

// };
// console.log(addOne.sum());

///  Built-In Methods

///// 1- Object.keys()

// const employees = {
//   boss: "Michael",
//   secretary: "Pam",
//   sales: "Jim",
//   accountant: "Oscar",
// };

// // Get the keys of the object
// const keys = Object.keys(employees);

// console.log(keys);

///// 2- Object.values()

const session = {
  id: 1,
  time: `26-July-2018`,
  device: "mobile",
  browser: "Chrome",
};

// Get all values of the object
// const values = Object.values(session);

// console.log(values);
console.log(session.hasOwnProperty("devicew"));
