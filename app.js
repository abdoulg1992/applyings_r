
/*----

var x = 10;
var y= x + 125 * 2;
document.write(y += x);


var x;
var y;
x = "5";
y = "10";
console.log( x === y);
document.write(y === x);

//----- The if else statment ------//
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

//----- The Switch conditional statement ------//
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

//----- The For Loop -----//
for ( i=1;i<=5; i++) {
    document.write(i+ "<br/>");
}
//---- Another way of doing the for loop syntax ----//
var i = 1;
for (;i<=5; i++) {
    alert("another way of for syntax");
}

//---- Another way of doing the for loop syntax ----//
// while loop
var i = 0;
while ( i <= 20 ) {
    if (i==10) {
        document.write( "Floor" + i + "Take a break please")
      //  break;
    } else if (i==19){
        document.write("This is the Last floor, get out please")
    } else {
        document.write("Floor" + " ")
    }
    document.write(i + "<br/>"); i++;
}

// Do....while Loop
var i = 20
do {
    document.write(i + "<br />"); i++;
}
while(i<=25);

// break statement
for (i=1; i<=100; i++) {
    if (i==50) {
        break;
    }
    document.write(i + "<br />");
}

// Continue statement
var x = 0;
while(x<6) {
  x++;
}
document.write(x);
------*/

//var day = 0;

var person = {
    name:"John",
    age:"31",
    favColor:"green",
    height: 183
};
var x = person.age;
console.log(x);

document.write(person.name.length);

function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

