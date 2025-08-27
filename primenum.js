// Write a function that takes a number and checks if it’s a prime number Return true or false

function findPrimeNumber(num){
//checking if the input is a number - "number" checks the numerical value not a string
if(typeof num !== "number" || isNaN(num)) 
    return "This is not a number, please input a number.";
 
// if a number is less than one it is not a prime number so it will return false
    if(num <= 1) return false;
//if the number is equal to 2, then it is a prime number because 2 is a prime number so it will return true
    if(num == 2) return true;
// if the number is divisible by 2 and the remainder is 0, it is not a prime number
    if (num % 2 === 0) return false;

    

    for(i = 3; i <= Math.sqrt(num); i+=2){
        if(num % i === 0) return false;

    }
       return true; 
}

console.log(findPrimeNumber('a'));