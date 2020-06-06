
function makeCall(aPhoneNumber) {

    if(aPhoneNumber == undefined || aPhoneNumber == null ){
        console.log("Phone number is not valid");
    } else {
        console.log("Making a call to: " + aPhoneNumber);
        console.log("Ending call");
    }

}

makeCall();
makeCall(null);
makeCall(4545687888);

var name = "Fernando";
var dob = 1990;
var isItLunchTime = null;
var currentYear = 2020;
var age = currentYear - dob;
var fakeAge = age / 2;

var subtotal = 10.50;
var total = subtotal * 1.20;

console.log("Total: " + total);

console.log("Age: " + age);
console.log("Fake age: " + fakeAge);

console.log(isItLunchTime);

console.log(dob + 2);

console.log("Hello, " + name);

// console.log("Hello, Fer");

console.log('Hello world');
console.log(12 + 3);
console.log("12" + "3");

console.log(-10.50 - 5.50);

console.log(10 - 5);

console.log( 1 == 1 );
console.log( 1 == 2 );
// binary code 1,0

