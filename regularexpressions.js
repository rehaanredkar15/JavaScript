/*A regular expression is a sequence of characters that forms a search pattern. 
When you search for data in a text, you can use this search pattern to describe 
what you are searching for.
 A regular expression can be a single character, or a more complicated pattern.*/




console.log("this is the regular expression tutorial");

let reg = /rehaan/;  //this is the declaration of the regualr expressions
 reg = /rehaan/g;  //this contains the flag g which means global which spots all the rehan from our string
 reg = /rehaan/;  //this contains the flag i which means the insensitivity is caught , means if the letter is capital or small it doesnt matter

let s = "This is the string we will use to check the regular expression containing Rehaan and rehaan";

console.log(reg.source);  //this gives the  masala of our regular expression 

let result = reg.exec(s);  // this is a function which returns an array and its index
console.log(result);
// result = reg.exec(s);  // if the i flag is not present then this will provide us the  index of the other rehan and not the rehan which appears first
// console.log(result);

result = reg.test(s);
console.log(result);



// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

// 2. test() - Returns true or false
let result2 = reg.test(s);
// console.log(result2); --> This will only print true if the "reg" is there in the string "s"

// 3. match() - It will return an array of results or null
// let result3 = reg.match(s) ---> This is wrong!!
let result3 = s.match(reg) // ---> This is right
// console.log(result3);

// 4. search() - Returns index of first match else -1
// let result4 = reg.search(s) ---> This is wrong!!
let result4 = s.search(reg) // ---> This is right
// console.log(result4);

// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

let result5 = s.replace(reg, 'SHUBHAM');
console.log(result5);