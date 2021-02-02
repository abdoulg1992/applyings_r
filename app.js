


var x = 10;
var y= x + 125 * 2;
document.write(y += x);


var x;
var y;
x = "5";
y = "10";
console.log( x === y);
document.write(y === x);


var age = 18;
if (age < 18) {
    alert("your are too young! come back next year")
} else if (age > 18) {
    alert("your are old enough, you can to participate")
    console.log("your are old enough to participate")
} else {
    alert("Right on time!! Go head, we been waiting for you");
    console.log("thank you for your understanding")
}

var Num1 =12;
var Num2 = 10;
    if (Num1 > Num2) {
    alert("This is my first condition");
}
    else {
        alert("This is my seconde condition");
    }

Num1 > Num2 ? alert("New way of doing this. This is my first condition") : alert("This is my second condition");


var course = 5;
var message;
if (course == 1) {
    document.write("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
    document.write("<h1>CSS Tutorial</h1>");
} else {
    document.write("<h1>JavaScript Tutorial</h1>");
}


var status = 2;
var msg;
if (status == 1) {
    alert(msg = "Online")
} else if (status == 2) {
   alert(msg = "Away");
} else {
    alert(msg = "Offline")
}


var day = 50;
var weekDay = "First Day of The Week";
switch (day) {
    case 90: 
        alert("Monday" + " " + "is the " + weekDay);
        break;
    case 50:
        alert("Tuesday" + " " + "is the coolest Day");
        break;
    case "c": 
        alert("Wednesday");
        break;
    default:
        alert("Another time");
}

let color = "red";
switch(color) {
    case "blue":
        document.write("Blue!! This is Blue color");
    break;
    case "red":
        document.write("Red!! This is Red color");
    break;
    default:
        document.write("Sorry!! No such color exist");
}