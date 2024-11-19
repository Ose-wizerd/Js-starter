let arr = [2, 3, "osama", "cala", "husen"];
// console.log(arr[3]);
function calc_Age(age) {
  let currentAge = 2024 - age;
  return currentAge;
}
// let age = Number(prompt("enter your birth year: "));
// console.log(calc_Age(age));
// let info = [prompt("enter your name"), age];
// console.log(info);
// let n = Number(prompt("enter length of the array: "));

// ARRAY METHODS
//.PUSH() ussed to add element to array end
// .pop() remove the last element
// .unshift() add to the beginig
// .shift() to remove the first element
// .indexOf("element name "): return index of the element if exist;
// .includes("element name"): retuen true if element exist else false;

// for (i = 0; i < n; i++) {
//   arr.push(prompt(`enter the element ${i}`));
// }
// console.log(arr);

// const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.5 : bill * 0.2);

// const bills = [200, 300, 50];
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const bonus = [
//   bills[0] + calcTip(bills[0]),
//   bills[1] + calcTip(bills[1]),
//   bills[2] + calcTip(bills[2]),
// ];
// console.log(bills, tip, bonus);

// OBJECT

// const osama = {
//   firstName: "osama",
//   lastName: "dawud",
//   job: "student",
//   bestFriend: ["cala", "husen", "gutema"],
// };

// // console.log(osama.bestFriend[0]);

// osama.momName = "qamaria";

// console.log(osama);
// osama["sisName"] = "lelo";
// console.log(osama);

// let osama = {
//   firstName: prompt("enter your name:"),
//   lastName: prompt("enter your last name:"),
// };
// console.log(osama);

// const osamasFriend = ["cala", "gutu", "balanbal"];
// console.log(osamasFriend[2]);
// osamasFriend.pop();
// osamasFriend.shift();
// osamasFriend.unshift("bakate");
// osamasFriend.push(prompt("enter new name"));
// console.log(osamasFriend);

let osama = {
  age: 20,
  firstName: "osama",
  lastName: "dawud",
};

const need = prompt("enter what you want to search: ");
console.log(osama[need]);
