//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")

function greaterNum(num1, num2) {
  if (num1 > num2) {
    return num1
  }
  else { return num2 }
}
greaterNum(10, 5)
greaterNum(1, 7)


//Exercise #2
//Write a function named helloWorld that: 
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least 
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
// resultto make sure it works

function helloWorld() {
  switch (language) {
    case "es":
      return "Hola Mundo"
      break;

    case "de":
      return "Hallo Welt"
      break;

    case "hu":
      return "Helló Világ"
      break;

    default:
      return "Hello World";
      break;
  }
}
console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("hu"));


//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works

function assignGrade(grade) {
  if (grade < 60) {
    return "F";
  }
  else if (grade >= 61 && grade <= 70) {
    return "D";
  } else if (grade >= 71 && grade <= 80) {
    return "C";
  } else if (grade >= 81 && grade <= 90) {
    return "B";
  } else if (grade >= 91) {
    return "A";
  }
}
console.log(assignGrade(91));
console.log(assignGrade(55));
console.log(assignGrade(35));
console.log(assignGrade(81));



//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"

function pluralize(noun, num) {
  if (num > 1) {
    return `${num} ${noun}s`
  } else {
    return `${num} ${noun}`;
  }
}
console.log(pluralize("tiger", "1"));
console.log(pluralize("liger", "8"));
console.log(pluralize("lion", "1"));