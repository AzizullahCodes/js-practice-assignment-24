// js-little-problem-solving based ptactice assignment
// ___________________________________________________________________
// ques no 1
//  write a programm to distribute qurbani meat among family members and the needy.
// The programm should take the toal amount of meat and the number of people as inpup 
// as calculate the share for each person?
// ____________________ 
// ans 
// let enterMeetWeight = prompt('enter meet weight in kgs');
// let numberOfFamilyMembers = prompt('enter strength of family members');
//         numberOfFamilyMembers = Number(numberOfFamilyMembers);
// let numberOfNeedyPeople   = prompt('enter the number of needy people');
//          numberOfNeedyPeople = Number(numberOfNeedyPeople);
// let totalNumberOfDeservingPeople = numberOfFamilyMembers + numberOfNeedyPeople;
// console.log(totalNumberOfDeservingPeople);
// let shareForEachPerson = enterMeetWeight / totalNumberOfDeservingPeople;
//      shareForEachPerson = Math.round(shareForEachPerson);
// console.log('The share of meat for each person is : ' + shareForEachPerson + 'Kg');
// _________________________________________________________________________________________________
// ques no 2 
// Eid Gift Calculatro 
// Create a programm that calculates the total cost of gifts for family members 
// and friends during eid, The program should take the number of gifts and the 
// price of gifts as input. 
// ___________________________
//  ans 
// let enterNumberOfGifts = prompt('enter number of gifts');
//     enterNumberOfGifts = Number(enterNumberOfGifts);
// let priceOfEachGift    = prompt('enter price of each gifts');
//      priceOfEachGift   = Number(priceOfEachGift);
// let totalCostOfGifts   = enterNumberOfGifts * priceOfEachGift;
//     totalCostOfGifts   = Math.round(totalCostOfGifts);
//     console.log(totalCostOfGifts)
// _______________________________________________________________________________ 
// ques no 3 
// Qurbani animal Selection 
// Develop a programm that helps users select a qurbani animal based on their 
// budget and preferences. The program should consider factors like animal type, 
// weight and price 
// _______________________
//  ans 
// let enterBudget  = prompt('enter you budget in PKR like 40000,80000,etc');
//     enterBudget  = Number(enterBudget);
// let animalType   = prompt('enter animal type like goat,sheep,calf,camel etc');
//     animalType   = animalType.toLowerCase();
// let animalWeight = prompt('enter animal weight');
//     animalWeight = Number(animalWeight);
// let price        = prompt('enter price you can pay');
//     price        = Number(price);
//     if(enterBudget <= 40000 &&
//          animalType === 'goat' 
//          || animalType === 'sheep'
//           && animalWeight <= 15 
//           && price <= 40000 ){console.log('you can buy goat or sheep')}
//           else if(enterBudget <= 200000 &&
//          animalType === 'cow' ||animalType === 'buffalo' ||animalType ==='calf' 
         
//           && animalWeight <= 100 
//           && price <= 200000 ){console.log('you can buy cow,buffalo or calf')}
//           else{console.log('you can buy camel')}
// ___________________________________________________________________________________
// ques no 4 
// Zakat Calculator 
// Create a program that calculates the zakat(charity) amount based on the 
// user's income and expenses. This program can be useful during Eid-ul-Adha 
// when Muslims are encouraged to give the charity.
// _______________________ 
// ans 
// let enterIncome = prompt('Enter your yearly Income in PKR');
//      enterIncome = Number(enterIncome);
// let enterExpenses = prompt('enter your Yearly expenses');
//     enterExpenses = Number(enterExpenses);
// let savings       = enterIncome - enterExpenses;
// let charity       = (savings * 2.5) / 100;
//     charity       = Math.ceil(charity);
// console.log('You should pay charity : ' + charity + ' Rupees to any one deserving and needy');
// _______________________________________________________________________________________
// ques no 5 
// randomly sacrifice animal comes 
// _______________________________
// ans 
// let animals = ['goat','sheep','cow','calf','buffalo','camel'];
// let randomly = Math.floor(Math.random() * animals.length);
// console.log(animals[randomly])
// ______________________________________________________________________________
// ques no 6
// Simple Decimal with toFixed()
// Use prompt() to ask the user for a number with many decimal places
//  (e.g., 3.1415926535).
// Use toFixed(2) to round it to 2 decimal places.
// Use alert() to show the result.
// _________________ 
//  ans 
// let enterNumber = prompt('Enter number with any decimal places');
//      enterNumber = Number(enterNumber);
// let output      = enterNumber.toFixed(2);
// console.log(output)
// ___________________________________________________________________________________
// ques no 7 
// Round to Nearest Whole Number
// Ask the user to enter a decimal number.
// Use Math.round() to round it to the nearest whole number.
// Show the result using alert().
// ___________________
// ans 
// let enterNumber = prompt('enter a decimal number');
//    console.log(enterNumber);
//    enterNumber = Math.round(enterNumber);
//    alert(enterNumber);
// _______________________________________________________________________
// ques no 8 
// Ask the user for the number and how many decimal places they want 
// (0, 1, or 2), then display the result using toFixed().
// _______________
// ans 
// let enterNumber = prompt('Enter decimal number');
//      enterNumber = Number(enterNumber);
//     console.log(enterNumber);
//     let decimalPlaces = prompt('Enter decimal places you want');
//          decimalPlaces = Number(decimalPlaces)
//     let result = enterNumber.toFixed(decimalPlaces);
//     console.log(result)
// _____________________________________________________________________________
// ques no 9
// Create a number and convert it into a string using the .toString() method.
// Then log both the number and the string version in the console.
// ______________________
// ans 
// let number = 63746;
// console.log(number);
// console.log(typeof number);
//    number = number.toString();
//    console.log(number);
//    console.log(typeof number);
// ______________________________________________________________________________
// ques no 10
// Create three different numbers and convert them to strings using the
//  String() constructor.
// Print all three string values.
// ___________________ 
//  ans 
// let number1 = 3432;
// console.log(number1);
// console.log(typeof number1);
//     number1 = number1 + '';
//     console.log(number1);
//     console.log(typeof number1);
//    //  second number
// let number2 = 7866.7686;
//     console.log(number2);
//     console.log(typeof number2);
//       number2 = number2.toString();
//       console.log(number2);
//       console.log(typeof number2);
//       // third number
// let number3 = 87887.4795;
//   console.log(number3);
//   console.log(typeof number3);
//    number3 = number3 + '2';
//    console.log(number3);
//    console.log(typeof number3);
   // __________________________________________________________________
   // ques no 11
   //  Task 1: Convert using Number()
// Declare a variable str1 and assign it the string "123".
// Convert str1 to a number using Number().
// Use console.log() to print both the string and the number.
// _____________ 
// ans 
// let str1 = '123';
// console.log(str1);
// console.log(typeof str1);
//     str1 = Number(str1);
//     console.log(str1);
//     console.log(typeof str1);
// ________________________________________________________________________
// ques no 12
//  Convert using parseInt()
// Declare a variable str2 and assign it the string "456px".
// Convert it to a number using parseInt().
// Print the result using console.log().
// _____________________
// ans 
// let str2 = '456.8';
// console.log(str2);
// console.log(typeof str2);
//    str2 = parseInt(str2);
//    console.log(str2);
//    console.log(typeof str2);
// ______________________________________________________________________________
// ques no 13 
//  Convert using parseFloat()
// Declare a variable str3 and assign it the string "3.14".
// Convert it using parseFloat().
// Log the result.
// _________________ 
// ans 
// let str3 = '3.14';
//    console.log(str3);
//    console.log(typeof str3);
//    str3 = parseFloat(str3);
//    console.log(str3);
//    console.log(typeof str3);
// ________________________________________________________________________
// ques no 14 
// Try invalid conversion
// Declare a variable str4 and assign it the string "hello".
// Try converting it using Number() and print the result. What do you see?
// __________________ 
// ans 
// let str4 = 'hello';
//     console.log(str4);
//     console.log(typeof str4);
//      str4 = Number(str4);
//      console.log(str4);
//      console.log(typeof str4);
// ________________________________________________________________________
// ques no 15
// ✅ Assignment 1: Roll a Dice 🎲
// Generate a random number between 1 and 6 and show it in the browser console like a dice roll.
// Use: Math.random() and Math.floor() or Math.ceil()
// Expected output: A number like 4 (between 1 to 6)
// _______________________
// ans 
// let randomNumber = Math.random()*6;
//    randomNumber = randomNumber + 1;
//    randomNumber = Math.floor(randomNumber);
//     console.log(randomNumber);
// _____________________________________________________________________________
// ques no 16
// Math.random();
let colors = ['green','red','yellow','blue','skyblue'];
let randomNumber = Math.floor(Math.random()* colors.length);
     let output = colors[randomNumber]
     if(output === 'red'){console.log('stop')}
     else if(output === 'yellow'){console.log('stop but start vehicle')}
     else if( output === 'green'){console.log('move')}
     else{console.log('invalid entry')}