// ********** Chapter 5 **********

// Question 1
// var num1 = +prompt("Write first number:");
// var num2 = +prompt("Write second number:");
// var total = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + total);

// Question 2
// Subtraction
// var num1 = +prompt("Write first number:");
// var num2 = +prompt("Write second number:");
// var total = num1 - num2;
// document.write(num1 + " - " + num2 + " = " + total);

// Multiplication
// var num1 = +prompt("Write first number:");
// var num2 = +prompt("Write second number:");
// var total = num1 * num2;
// document.write(num1 + " * " + num2 + " = " + total);

// Division
// var num1 = +prompt("Write first number:");
// var num2 = +prompt("Write second number:");
// var total = num1 / num2;
// document.write(num1 + " / " + num2 + " = " + total);

// Modulus
// var num1 = +prompt("Write first number:");
// var num2 = +prompt("Write second number:");
// var total = num1 % num2;
// document.write(num1 + " % " + num2 + " = " + total);

// Question 3
// var var1;
// document.write("Value after variable declaration is: " + var1);
// var1 = 2;
// document.write("<br />Initial value: " + var1);
// var1++;
// document.write("<br />Value after increment is: " + var1);
// var1 = var1 + 7;
// document.write("<br />Value after addition is: " + var1);
// var1--;
// document.write("<br />Value after decrement is: " + var1);
// var1 = var1 % 3;
// document.write("<br />The remainder is: " + var1);

// Question 4
// var price = 600;
// document.write("Total cost to buy 5 tickets to a movie is " + price*5 + "PKR");

// Question 5
// var num = prompt("Write a number:");
// document.write("<h1>Table of " + num + "</h1>");
// document.write(num + " X 1 = " + num*1);
// document.write("<br />" + num + " X 2 = " + num*2);
// document.write("<br />" + num + " X 3 = " + num*3);
// document.write("<br />" + num + " X 4 = " + num*4);
// document.write("<br />" + num + " X 5 = " + num*5);
// document.write("<br />" + num + " X 6 = " + num*6);
// document.write("<br />" + num + " X 7 = " + num*7);
// document.write("<br />" + num + " X 8 = " + num*8);
// document.write("<br />" + num + " X 9 = " + num*9);
// document.write("<br />" + num + " X 10 = " + num*10);

// Question 6
// var c = 25;
// document.write(c + "<sup>0</sup>C is " + (c * 9/5 + 32) + "<sup>0</sup>F");
// var f = 90;
// document.write("<br />" + f + "<sup>0</sup>F is " + (f - 32 * 5/9) + "<sup>0</sup>C");

// Question 7
// var price1 = 650;
// var price2 = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var shipCharges = 100;
// document.write("<h1>Shopping Cart</h1>");
// document.write("<br /><br />Price of Item 1 is " + price1);
// document.write("<br />Quantity of Item 1 is " + quantity1);
// document.write("<br />Price of Item 2 is " + price2);
// document.write("<br />Quantity of Item 2 is " + quantity2);
// document.write("<br />Shipping Charges " + shipCharges);
// document.write("<br /><br />Total cost of your order is " + ((price1 * quantity1) + (price2 * quantity2) + shipCharges));

// Question 8
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained/totalMarks) * 100;
// document.write("<h1>Marks Sheet</h1>");
// document.write("<br /><br />Total marks: " + totalMarks);
// document.write("<br />Marks Obtained: " + marksObtained);
// document.write("<br />Percentage: " + percentage + "%");

// Question 9
// document.write("<h1>Currency in PKR</h1>");
// document.write("<br />Total Currency in PKR: " + ((10 * 104.80) + (25 * 28)));

// Question 10
// var num = 2;
// num = ((num + 5) * 10) / 2;
// console.log(num);

// Question 11
// var currentYear = 2023;
// var birthYear = 2003;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;
// document.write("They are either " + age1 + " or " + age2 + " years old.");

// Question 12
// var radius = 20;
// var c = 2 * 3.14 * radius;
// var area = 3.14 * 20 * 20;
// document.write("The circumference is: " + c);
// document.write("<br />The area is: " + area);

// Question 13
// var favSnack = "Chocolate Chip";
// var curAge = 20;
// var maxAge = 75;
// var perDay = 3;
// var total = ((maxAge * 365) - (curAge * 365)) * perDay;
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("<br />Favourite Snack: " + favSnack);
// document.write("<br />Current age: " + curAge);
// document.write("<br />Estimated maximum age: " + maxAge);
// document.write("<br />Amount of snacks per day: " + perDay);
// document.write("<br />You will need " + total + " " + favSnack + " to last you until the ripe old age of " + maxAge);

// ********** Chapter 6-9 **********

// Question 1
// var num = 10;
// document.write("<h1>Result:</h1>")
// document.write("The value of num is: " + num);
// document.write("<br />.......................................................");
// document.write("<br /><br />The value of ++num is: " + ++num);
// document.write("<br />Now the value of num is: " + num);
// document.write("<br /><br /><br />The value of num++ is: " + num++);
// document.write("<br />Now the value of num is: " + num);
// document.write("<br /><br /><br />The value of --num is: " + --num);
// document.write("<br />Now the value of num is: " + num);
// document.write("<br /><br /><br />The value of num-- is: " + num--);
// document.write("<br />Now the value of num is: " + num);

// Question 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result);
// document.write("--a; Here the value of a changes to 1");
// document.write("<br />--a - --b; Here the value of a is 1 and value of b changes to 0 and after subtraction the result will be 1");
// document.write("<br />--a - --b + ++b; Here the value of --a - --b is 1 and value of b changes to 1 and after addition the result will be 2");
// document.write("<br />--a - --b + ++b + b--; Here the value of --a - --b + ++b is 2 and value of b remains 1 and after addition the result will be 3");

// Question 3
// var userName = prompt("Write your name:");
// document.write("Hi " + userName);

// Question 4
// var num = parseInt(prompt("Write a number:"));
// if(num || num == 0){
//     document.write("<h1>Table of " + num + "</h1>");
//     document.write(num + " X 1 = " + num*1);
//     document.write("<br />" + num + " X 2 = " + num*2);
//     document.write("<br />" + num + " X 3 = " + num*3);
//     document.write("<br />" + num + " X 4 = " + num*4);
//     document.write("<br />" + num + " X 5 = " + num*5);
//     document.write("<br />" + num + " X 6 = " + num*6);
//     document.write("<br />" + num + " X 7 = " + num*7);
//     document.write("<br />" + num + " X 8 = " + num*8);
//     document.write("<br />" + num + " X 9 = " + num*9);
//     document.write("<br />" + num + " X 10 = " + num*10);
// }else{
//     num = 5;
//     document.write("<h1>Table of " + num + "</h1>");
//     document.write(num + " X 1 = " + num*1);
//     document.write("<br />" + num + " X 2 = " + num*2);
//     document.write("<br />" + num + " X 3 = " + num*3);
//     document.write("<br />" + num + " X 4 = " + num*4);
//     document.write("<br />" + num + " X 5 = " + num*5);
//     document.write("<br />" + num + " X 6 = " + num*6);
//     document.write("<br />" + num + " X 7 = " + num*7);
//     document.write("<br />" + num + " X 8 = " + num*8);
//     document.write("<br />" + num + " X 9 = " + num*9);
//     document.write("<br />" + num + " X 10 = " + num*10);
// }

// Question 5
// var sub1 = prompt("Write first subject:"), sub2 = prompt("Write second subject:"), sub3 = prompt("Write third subject:");
// var totalNum = 100;
// var sub1Num = +prompt("Write number of first subject:"), sub2Num = +prompt("Write number of second subject:"), sub3Num = +prompt("Write number of third subject:");
// document.write(`<table>
//   <tr>
//     <th>Subject</th>
//     <th>Total Marks</th>
//     <th>Obtained Marks</th>
//     <th>Percentage</th>
//   </tr>
//   <tr>
//     <td>` + sub1 + `</td>
//     <td>` + totalNum + `</td>
//     <td>` + sub1Num + `</td>
//     <td>` + (sub1Num * 100 / totalNum) + "%" + `</td>
//   </tr>
//   <tr>
//     <td>` + sub2 + `</td>
//     <td>` + totalNum + `</td>
//     <td>` + sub2Num + `</td>
//     <td>` + (sub2Num * 100 / totalNum) + "%" + `</td>
//   </tr>
//   <tr>
//     <td>` + sub3 + `</td>
//     <td>` + totalNum + `</td>
//     <td>` + sub3Num + `</td>
//     <td>` + (sub3Num * 100 / totalNum) + "%" + `</td>
//   </tr>
//   <tr>
//     <td>Total</td>
//     <td>300</td>
//     <td>` + (sub1Num + sub2Num + sub3Num) + `</td>
//     <td>` + ((sub1Num + sub2Num + sub3Num) * 100 / 300) + "%" + `</td>
//   </tr>
// </table>`);

// ********** Chapter 9-11 **********

// Question 1
// var city = prompt("Write the name of your city");
// if(city == "karachi" || city == "Karachi"){
//   alert("Welcome to the city of lights");
// }else{
//   alert("Welcome to " + city);
// }

// Question 2
// var gender = prompt("Write your gender");
// if(gender == "Male" || gender == "male"){
//   alert("Good Morning Sir");
// }else if(gender == "Female" || gender == "female"){
//   alert("Good Morning Mam");
// }else{
//   alert("Reload the page and type your gender correctly!");
// }

// Question 3
// var color = prompt("What is the color of the traffic signal?");
// if(color == "red" || color == "Red"){
//   alert("Must stop");
// }else if(color == "yellow" || color == "Yellow"){
//   alert("Ready to move");
// }else if(color == "green" || color == "Green"){
//   alert("Move now");
// }else{
//   alert("Reload the page and write the correct color");
// }

// Question 4
// var fuel = prompt("Write remaining fuel in your car in liter");
// if(fuel < 0.25){
//   alert("Please refill your car");
// }else{
//   alert("You're good to go");
// }

// Question 5a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// Question 5b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// Question 5c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// Question 5d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// Question 5e
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// Question 5f
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Question 6
// var sub1num = +prompt("Write the obtained numbers in subject 1");
// var sub2num = +prompt("Write the obtained numbers in subject 2");
// var sub3num = +prompt("Write the obtained numbers in subject 3");
// var totalMarks = +prompt("Write the total marks");
// var obtainedMarks = sub1num + sub2num + sub3num;
// var percentage = obtainedMarks * 100 / totalMarks;
// document.write("<h1>Marks Sheet</h1>");
// if(percentage >= 80){
//     document.write("<br />Total Marks: " + totalMarks);
//     document.write("<br />Marks Obtained: " + obtainedMarks);
//     document.write("<br />Percentage: " + percentage + "%");
//     document.write("<br />Grade: A-one");
//     document.write("<br />Remarks: Excellent!");
// }else if(percentage >= 70){
//     document.write("<br />Total Marks: " + totalMarks);
//     document.write("<br />Marks Obtained: " + obtainedMarks);
//     document.write("<br />Percentage: " + percentage + "%");
//     document.write("<br />Grade: A");
//     document.write("<br />Remarks: Good!");
// }else if(percentage >= 60){
//     document.write("<br />Total Marks: " + totalMarks);
//     document.write("<br />Marks Obtained: " + obtainedMarks);
//     document.write("<br />Percentage: " + percentage + "%");
//     document.write("<br />Grade: B");
//     document.write("<br />Remarks: You need to improve");
// }else{
//     document.write("<br />Total Marks: " + totalMarks);
//     document.write("<br />Marks Obtained: " + obtainedMarks);
//     document.write("<br />Percentage: " + percentage + "%");
//     document.write("<br />Grade: Fail");
//     document.write("<br />Remarks: Sorry");
// }

// Question 7
// var num = 6;
// var guess = +prompt("Guess the secret number");
// if(guess == num){
//     alert("Bingo! Correct answer");
// }else if(guess == 5 || guess == 7){
//     alert("Close enough to the correct answer");
// }else{
//     alert("Wrong number");
// }

// Question 8
// var num = +prompt("Write a number");
// if(num % 3 == 0){
//     alert("Number is divisible by 3");
// }else{
//     alert("Number is not divisible by 3");
// }

// Question 9
// var num = +prompt("Write a number");
// if(num % 2 == 0){
//     alert("Number is even");
// }else{
//     alert("Number is odd");
// }

// Question 10
// var temp = +prompt("What's the tempertature?");
// if(temp > 40){
//     alert("It is too hot outside.");
// }else if(temp > 30){
//     alert("The weather today is normal.");
// }else if(temp > 20){
//     alert("Today's weather is cool.");
// }else{
//     alert("OMG! Today's weather is so cool.");
// }

// Question 11
// var num1 = +prompt("Write first number:");
// var num2 = +prompt("Write second number:");
// var oper = prompt("Choose the operation(+, -, *, /, %)");
// if(oper == '+'){
//     alert(num1 + " + " + num2 + " = " + (num1 + num2));
// }else if(oper == '-'){
//     alert(num1 + " - " + num2 + " = " + (num1 - num2));
// }else if(oper == '*'){
//     alert(num1 + " * " + num2 + " = " + (num1 * num2));
// }else if(oper == '/'){
//     alert(num1 + " / " + num2 + " = " + (num1 / num2));
// }else{
//     alert(num1 + " % " + num2 + " = " + (num1 % num2));
// }