//convertidor de celsius a fahrenheit
function convertCtoF(celsius) {
  return celsius * (9 / 5) + 32;
}
//convertidor de fahrenheit a celsius
function convertFtoC(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}


//asistente para cortar cartas
let count = 0;

function cardCounter(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}

//calculador de años bisiestos
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

let year = 2024;
let result = isLeapYear(year);
console.log(result);

//string ending checker
function checkStringEnding(str, target) {
  return str.endsWith(target);
}
//string ending checker using slice
 function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
 }

 // truncate a string
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// v2
function truncateStringV2(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
console.log(truncateStringV2("Peter Piper picked a peck of pickled peppers", 11));