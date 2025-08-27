   
   let vowel = "a e i o u";

function myVowel(string){

    if(string == vowel){
        return vowel;

    }else if(string == 0-9){
        return "This is a number";

    }else{
        return "there is no vowel";
    }
        
    }
    console.log(myVowel("Elsie"));
