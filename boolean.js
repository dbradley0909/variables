const numbers = new Boolean(5);
console.log(numbers.valueOf());

if (!numbers.valueOf(5)){
    console.log("I want to print the number 5 to the console.");
} else if(numbers.valueOf()) {
    console.log("I want to print a different number to the console.");
}
git add README.md

// understanding the .valueOf method if it is completely blank in the parenthesis it will automaically render false but if a number is in there it will render true
