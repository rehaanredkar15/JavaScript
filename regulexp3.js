console.log("this is for character sets");

const regex = /reha[a-z]n/;
const str = "rehan is best  ";


let result = regex.exec(str);  // provides the array
console.log("the result from exec is ", result);

if(regex.test(str))  //to check if it contains the regular expression
{
    console.log(`The String ${str} matches the expression ${regex.source}`);
}
else{

    console.log(`The string ${str} does not match the expression ${regex.source}`)
}