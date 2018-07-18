'use strict';

function jediName(firstName, lastName) {
  let retString = lastName.slice(0,3) + firstName.slice(0,2);
  return retString;
}

jediName('Beyonce', 'Knowles');


function beyond(num){
  if (num === Infinity || num === -Infinity) {
    console.log('And beyond');
  } else if (num > 0){
    console.log('To infinity');
  } else if (num < 0){
    console.log('To negative infinity');
  } else {
    console.log('Staying home');
  }
}


function decode (string) {
  let splitStringArr = string.split(' ');
  let decodeArr = [];
  splitStringArr.forEach(function(word) {
    if (word[0] === 'a') {
      decodeArr.push(word[1]);
    } else if (word[0] === 'b') {
      decodeArr.push(word[2]);
    } else if (word[0] === 'c') {
      decodeArr.push(word[3]);
    } else if (word[0] === 'd') {
      decodeArr.push(word[4]);
    } else {
      decodeArr.push(' ');
    }
  });
  let retString = decodeArr.join('');
  return retString;
}

decode('craft block argon meter bells brown croon droop');


//Rich's answer of decodeWord()
function decodeWord(word) {
  const charCode = word[0].charCodeAt();
  
  if (charCode > 96 && charCode < 101) {
    return word[charCode - 96];
  }
  return ' '; //default case
}

function decodeWords(words) {
  return words 
    .split(' ')
    .map(decodeWord)
    .join('');
}
//Rich's answer of decodeWord()



function daysInMonth(month, leapYear) {
  let result = '';
  if (month === 'February') {
    if (leapYear) {
      result = `${month} has 29 days`;
    } else {
      result = `${month} has 28 days`;
    }
  } else {
    switch(month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      result = `${month} has 31 days`;
      break;

    default:
      result = `${month} has 30 days`;   
    }
  }
  console.log(result);
  return result;
}



function rockPaperScissors(userMove) {
  let result = '';
  const compMove = Math.floor(Math.random() * 3) + 1;
  if (!userMove || typeof userMove !== 'number' || userMove < 1 || userMove > 3) {
    throw 'Invalid move';
  } else if ((userMove === 1 && compMove === 3) || (userMove === 2 && compMove === 1) || (userMove === 3 && compMove === 2)){
    result = 'User wins';
  } else {
    result = 'Computer wins';
  }
  console.log(result);
  return result;
}


rockPaperScissors(1);
rockPaperScissors(2);
rockPaperScissors(3);
rockPaperScissors(6);
rockPaperScissors();
rockPaperScissors('hello');