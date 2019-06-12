// If statemets?
// The if is a keyword which states that you want to run some code if some condition is met 
if(true){
    console.log(`I'm true!`);
}

// If the condition after the if is not evaluated to true, the code will not run but you can insert an else statement:
if(false){
    console.log(`I'm true!`);
} else {
    console.log(`I'm false!`);
}

// If you need to run different code for different values you can do the following:
var a = [1,2,3];
if(a.includes(0)){
    console.log(`I include 0`);
} else if (a.includes(1)) {
    console.log(`I include 1`);
} else {
    console.log(`I don't include either 0 or 1`);
}

// How to see if 2 variables are the same?
var one = 1;
var strOne = '1';

//This is the weak evaluation which doesn't check the type of the variables 
console.log(`${one == strOne}`); 
//This is the strong evaluation which checks the type of the variables 
console.log(`${one === strOne}`);

//Logical operators: -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
//You may need to run code if 1 of the sides of an evaluation is true
if(1 == '1' || 1 == '2'){
    console.log(`${1 == '1'} or ${1 == '2'} is evaluated to 'true'`)
}
if(!(1 == '1' && 1 == '2')){
    console.log(`${1 == '1'} and ${1 == '2'} is evaluated to 'false'`)
}

//You can ofcourse check if one number is bigger than other
var shortString = 'pesho';
var longString = 'pesho e mnogo dobur chovek!';

if(shortString.length < longString.length){
    console.log(`${shortString} is shorter than ${longString}`);
}

//While(condition){}
var whileCondition = 2;
while(whileCondition > 0){
    console.log(`Logging ${whileCondition}`);
    whileCondition--;
}
whileCondition = 2;
//While may not be executed!!!!!
while(false){
    console.log('Not executed!!');
}

//Do{} while()
// The do{}while() is ALWAYS EXECUTED ATLEAST ONCE!
do {
    console.log(`Logging ${whileCondition}`);
    whileCondition--;
} while(whileCondition > 0);

// In the second example the whileCondition is == 0 so (whileCondition > 0) is false and the script is stil executed!
do {
    console.log(`Logging ${whileCondition}`);
    whileCondition--;
} while(whileCondition > 0);
