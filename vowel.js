//Write a function that takes in a string(parameters and arguments)and returns all the vowels.


function getVowel(string){
    if(typeof string === "number" || /\d/.test(string))
        return "Invalid input: Kindly input a string"
   /* We are going to use a string object called .match() for example string.match() which helps us to
 searches a string for matches against a regular expression and returns the results. 
*/
//using regular expression to check
/* The gi in your regex /[aeiou]/gi are flags that change how the regular expression works.
 the g stands for global search while the i is for case insensitive search
 */
let  vowel = string.match(/[aeiou]/gi);

/*using tenary or conitional operator to check, if there are vowels it returns them as 
 string else it returns an empty string*/
return vowel? vowel.join(""): "there is no string";

}
console.log(getVowel("5"));



//