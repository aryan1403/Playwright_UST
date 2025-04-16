/*function btnclick() {
    alert('alert from js')
}*/
// let --> keyword, (a,b) --> var names, (=) --> assignment operator
let a = 5;
let b = 6;

const c = 45;
// c = 5; const --> final value

// console.log(c);
/*
console.log("Sum of " + a + " & " + b + " is " + (a + b));
console.log("Substraction is ", a - b);
console.log(`Product of ${a} & ${b} is ${a * b}`);
console.log(`Division of ${a} & ${b} is ${a / b}`);
console.log(`Remainder of ${a} & ${b} is ${a % b}`);*/

let val = true;
// console.log(!val);
let arr = ["Aaryan", "Arush", true, 23, 45, 0, "Kirti"];
// console.log(arr);
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

for (const name in arr) {
    // console.log(arr[name]);
}

for (const name of arr) {
    // console.log(name);
}

arr.push("meow");
arr.pop();

// arr.forEach((e) => console.log(e));
// arr.filter((e) => e.toString().startsWith('K'))
   // .forEach((e) => console.log(e));

arr.filter((e) => Number.isInteger(e))
    .map((e) => e * 2)
    .sort()
    .forEach((e) => console.log(e));

// JSON --> Javascript Object Notation
let obj = {
    name: "Aaryan",
    role: "Trainer",
    exp: 9,
    lang: ["Java", "Python", "C", "Dart", "Node", "JS"]
}

// lang --> add playwright --> print (spread operator)
console.log([...obj.lang, "playwright"])
//          ["Java", "Python", "C", "Dart", "Node", "JS", playwright]
console.log(obj);

function add(a, b = 10) {
    console.log(a + b);
}

function rec(a) {
    if(a == 10) {
        // termination
    }
    rec(a + 1)
}
rec(1);
add(5, 20)


// HTML Page --> username, pass --> validate --> login success/failed




