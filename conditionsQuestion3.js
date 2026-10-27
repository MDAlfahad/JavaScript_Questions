//Check whether a year is a leap year.

function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(leapYear(2024));
//Output: true
const date = (year) => new Date(year, 1, 29).getDate() === 29;
console.log(date(2025));

// Output: false
