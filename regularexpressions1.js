console.log("This is regex meta characters tutorial");

let regex = /rehan/; // our regular expression


//now we will se some metacharractter symbols

regex = /^rehandc/; // ' ^ ' this  is the char at symbol this gives the starts with i.e if the string starts with  ^rehan then the expression matches
//regex = /rehan$/ ; //this works like ends with 

regex = /r.ehan/   // this is to match a single character  
regex = /r*ehan/   // this is to match a multiple character  
let str = "rehan is best  "; //the string

let result = regex.exec(str);  // provides the array
console.log("the result from exec is ", result);

if(regex.test(str))  //to check if it contains the regular expression
{
    console.log(`The String ${str} matches the expression ${regex.source}`);
}
else{

    console.log(`The string ${str} does not match the expression ${regex.source}`)
}