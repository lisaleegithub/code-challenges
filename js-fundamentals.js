// JS Fundamentals Challenges - Lisa Lee
// Feb 3, 2022

// #1
// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.
function divideByThree(num) {
    if (num % 3 === 0) {
        return true;
    } return false;
}
console.log(divideByThree(9)); // true
console.log(divideByThree(10)); // false

// #2
// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.
function getLength(str) {
    return str.length;
}
console.log(getLength("b")); // 1
console.log(getLength("")); // 0
console.log(getLength("hello world")); // 11

// #3
// part 1. Create an array of numbers, (ex: [1, 2, 3])
let arr = [1, 2, 3];
console.log(arr);

// part 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
console.log(arr[0]); // 1
//   - Return the last item in the array (ex: 3)
console.log(arr[arr.length-1]); // 3
//   - Add a new item to the end of the array (ex: [1,2,3,4])
arr.push(4);
console.log(arr); // [1,2,3,4]
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
arr.unshift(["a","b","c"]);
console.log(arr); // [["a","b","c"],1,2,3,4]
//   - Return the first item from the first item in the array. (ex: "a")
console.log(arr[0][0]); // "a"

// #4
// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.
function MinutesSinceMidnight() {
    let midnight = new Date();
    midnight.setHours(0,0,0,0);
    // console.log("this is midnight in UTC time zone", midnight);
  
    let currentTime = new Date();
    // console.log("this is current time in UTC time zone", currentTime);
  
    var diffMs = (currentTime - midnight);
    var diffMins = (Math.floor((diffMs % 86400000) / 3600000) * 60) + (Math.round(((diffMs % 86400000) % 3600000) / 60000)); 
    
    console.log(diffMins, "minutes have elapsed since midnight in UTC time zone");
  }
  
  MinutesSinceMidnight();
// See my comments in the Pull Request
