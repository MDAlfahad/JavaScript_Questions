// Check whether a number is a palindrome.

let city = "malayalam";

function palindrome() {
  let reverse = city.split("").reverse().join("");

  if (reverse == city) {
    console.log(`The given text is Palindrome :${reverse}`);
  } else {
    console.log("Not palindrome");
  }
}

palindrome();
