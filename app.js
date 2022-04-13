///array assignment ///

////1. Declare an empty array using JS literal notation to store////

// var array=[]
// console.log(array)//
//

// 2. Declare an empty array using JS object notation to store
// student names in future

// var array= Notification ["huzi"]


//         // /question 3//
// var string=["huzaifa"]
// console.log(string);
//question 4//
// var num=[1,2,3,4]       
// console.log(num);
//             ///5//
// // var Bool=[true,false]
//            //6//
// var mixarray=["huzaifa",1,2,3,true,false]
///
//                 // question7//
//  7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


// var dept =["BSCS" ,"BCOM" ,"BED" ,"BCS" ,"MS" ,"MPHIL" ,"PHD"]
// document.write("Qualification:<br /><br />")

// for (var i=0;i<dept.length;i++){
//     console.log(dept[i]);
//     document.write("("+[i+1]+") "+dept[i]+"<br />")
// // }
///////////////////////////////////////////////////////////

// var studentNames = ["Aun Ali", "Asim", "Qasim"];
// var studentScores = [320,230,480];
// var totalMarks = 500;
//  document.write(studentNames)
// for (var i=0;i<studentNames.length;i++){
//     document.write("Score of "+studentNames[i]+ " is : "+studentScores[i] +" Percentage : "+(((studentScores[i])/(totalMarks))*100)+" % "+"<br />");
// }

// // 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like

//  var studentNames = ["huzaifa", "hammad", "areeb"];
//  var studentScores = [320, 230, 480];
//  var totalMarks=500;
// for (var i = 0; i <studentNames.length;i++) {
//     document.write("Score of "+studentNames[i]+ " is : "+studentScores[i] +" Percentage : "+(((studentScores[i])/(totalMarks))*100)+" % "+"<br />");
// }

//             // question #9
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then

// var colorName = [];
// var col1 = prompt("Enter Your Color Name");
// colorName.unshift(col1);//add value in the begining of Array
// console.log(colorName);//updated Array
// var col2 = prompt("Enter Your end Color Name");
// colorName.push(col2);//add value in the end of Array
// console.log(colorName);//updated Array

// document.write(colorName);
// var desiredIndexPosition = +prompt("Enter Array Position to add Element");
// var desiredColor = prompt("Enter Color to add at Position");
// colorName.splice(desiredIndexPosition,0,desiredColor);
// console.log(colorName); //updated Array

// var value1 =prompt("Enter color again");
// var value2 =prompt("Enter second color again");
// colorName.unshift(value1,value2);//add two colors in a Array
// console.log(colorName);//updated array
// colorName.shift();//delete the first color in a Array ! 
// console.log(colorName); //updated Array
// // colorName.pop();//delete the last value of Array
// console.log(colorName); //updated Array
/////////////////////////////////////////////////////////////////////////////////

// var colorName=[];
// var col1=prompt("enter color");
// colorName.unshift(col1);
// console.log(colorName);
// var col2 =prompt("enter end color")
// colorName.push(col2);//add value in the end of Array
// console.log(colorName);///neww array//

// var value1 =prompt("enter color again");
// var value2 =prompt("enter 2nd color again");
// colorName.unshift(value1,value2);
// console.log(colorName);
// colorName.shift();
// console.log(colorName);
// colorName.pop();
// console.log(colorName);

// document.write(colorName);
// var indexPosition=+prompt("enter array position")
// var addColor=prompt("enter color");
// colorName.splice(indexPosition,0,addColor)
// console.log(colorName);

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// // method

// var studentScores=[250, 140,300,90];
// studentScores.sort();
// document.write(studentScores);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cities=["karachi","lahore","queeta","pindi","islamabad","peshawar"]
// console.log(cities);

// var copyArray=cities.slice(1,4)
// console.log(copyArray);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// /////
// var array=["this","is","my","cat"];
// console.log(array);
// var array1 = array.join(" ");
// console.log(array1);
//     /////////

//     / 13. Create a new array. Store values one by one in such a way
// // that you can access the values in the order in which they
// // were stored. (FIFO-First In First Out)

// var newArray=[];
// var val1=prompt("enter value1");
// var val2=prompt("enter value2");
// var val3=prompt("enter value3");

// newArray.unshift(val1,val2,val3);
// alert("main array:"+newArray);
// newArray.shift();
// alert(newArray);

// 14. Create a new array. Store values one by one in such a way
// // that you can access the values in reverse order. (Last InFirst Out)

// var newArray = [];
// var val1 = prompt("Enter Value 1");
// var val2 = prompt("Enter Value 2 ");
// var val3 = prompt("Enter Value 3");


// 

// var phone = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// //console.log(phone);
// document.write("<h3>Select these Options</h3>");
// document.write("<select><option>"+phone[0]+"</option><option>"+phone[1]+"</option><option>"+phone[2]+"</option><option>"+phone[3]+"</option></select>")

// // newArray.push(val1,val2,val3);
// alert("Orignial Array : "+newArray);
// newArray.pop();
// 15. Write a program to store phone manufacturers (Apple,
// //     Samsung, Motorola, Nokia, Sony & Haier) in an array.
// //     Display the following dropdown/select menu in your
// //     browser using document.write() method

// var mobile=["nokia","samsung","apple","motorola","techno","infinix","oppo"];
// console.log(mobile);
// document.write("<h3>select mobile brands</h3>")
// document.write(`<select><option>${mobile[0]}</option><option>${mobile[1]}</option><option>${mobile[2]}</option><option>${mobile[3]}</option><option>${mobile[4]}</option><option>${mobile[5]}</option></select>`)

                                    //// java assignment 2 array and loops////

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var array=[]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var array=[
//           [0,1,2,3],
//           [1,0,1,2],
//           [2,1,0,1],
// ]        
// console.log(array)
//             /////

// 3. Write a program to print numeric counting from 1 to 10.


// for (var i=0;i<=10 ; i++){
//     document.write(i+"<br />");
// }


// 4 .Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var num =+prompt("enter no");
// var numLength = +prompt("enter length");
// for (var i=1;i<=numLength;i++){
// console.log(num + " x " +numLength + "="+(num*i));
//  }


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”

// var fruits=["apple","orange","mango","cherry"];
// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br />")
// }
// for(var i=0;i<fruits.length;i++){
//     document.write("Element at index" +i + " is "+fruits[i]+"<br />");
// }
///////////////////////////////////////////////////////////////////////////
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// document.write("<h3>Counting</h3>")
// for(i=1;i<=15;i++){
// document.write(i+"<br />")
// }
// document.write("<h3>Reverse Counting</h3>")
// for(i=10;i>=1;i--){ 
// document.write(i+"<br />")
// }
// document.write("<p>Even Number</p>")
// for(var i=0;i<=20;i+=2){
//     document.write(i+"<br />")
// }
// document.write("<p>Odd Number</p>")
// for(var i=1;i<=20;i+=2){
//     document.write(i+"<br />")
// }
// document.write("<p>Series</p>")
// for(var i=2;i<=20;i+=2){
//     document.write(i+"k"+"<br />")
// }

// // 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

//solution:
// var isMatch = false;
// var arr = ["cake","apple pie","cookie","chips","patties"]
// alert(arr);
// var userInput = prompt("Welcome to ABCD Bakery what do you want to Buy ?");

// for(var i=0;i<arr.length;i++)//we don't use else inside Loop
// {
//     if(userInput==arr[i]){
//         // document.write(" Value Match  ! ");
//         isMatch = true;
//         break;
//     }
    
// }
// if(isMatch == true){
//     document.write(userInput+" is Available at index "+arr.indexOf(userInput)+" in our Bakery");
// }
// else if(isMatch==false){
//     document.write("We are Sorry "+userInput+" is not Avaiable in our Bakery");
// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12]

//solution:

// var arr = [24, 53, 78, 91, 12];
// var checkNum =0;

// for(var i=0;i<arr.length;i++){
//     if(arr[i]>checkNum){
//         checkNum=arr[i];
//     }
// }
// // console.log(checkNum)
// document.write("Greate Number in a Array is : "+checkNum);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
//solution:


// var arr = [25,98,76,36,12,10];
// var max = arr[0];
// for(var i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// document.write("<br />Array Elements are : "+arr);
// document.write("<br /> Largest Element in a Array is  "+max);



// 10. Write a program to print multiples of 5 ranging 1 to 100.
// // solution:
// var a=1;
// for(var i=5;i<=100;i+=5){
//   document.write("<h4>"+i+"<h4>");      
