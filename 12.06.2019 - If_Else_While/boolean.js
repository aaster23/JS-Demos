var t = true;
var f = false;

console.log(`${t} ${f}`);
console.log(`${typeof t} ${typeof false}`);

// But what happens if true and false are strings and not booleans ?

var tString = 'true';
var fString = 'false';

console.log(`They are both evaluated to ${!!tString}, ${!!fString}`);

// How to cast a number to boolean ? --> !1 or !0 --> !1 is false and !0 is true
// If you want to cast a number to a boolean and retain it's truth/false value you can do it with !!1 or !!0
var tNumber = 1;
var fNumber = 0;
console.log(`Casting the number 1 to boolean with '!' operator results in ${!tNumber}`);
console.log(`Casting the number 0 to boolean with '!' operator results in ${!fNumber}`);
console.log(`Casting the number 1 to boolean with '!!' operator results in ${!!tNumber}`);
console.log(`Casting the number 0 to boolean with '!!' operator results in ${!!fNumber}`);

var pNumber = 100;
var nNumber = -100;
console.log(`Casting a positive number to boolean with the '!!' operator: ${!!pNumber} `);
console.log(`Casting a negative number to boolean with the '!!' operator: ${!!nNumber} `);

// What are those exclamation marks???
console.log(`!variable is handled as if you have said Boolean(variable). It's the same as for number -> 
+variable is the same as writing Number(variable) `);
console.log(typeof +'2')
// // What about strings, are they true?

var str = 'Pesho';
var emptyString = '';
var spaceString = ' ';

console.log(`The string which contains 'Pesho' evaluated with '!!' operator evaluates to '${!!str}'`);
console.log(`The empty string evaluated with '!!' operator evaluates to '${!!emptyString}'`);
console.log(`The space string evaluated with '!!' operator evaluates to '${!!spaceString}'`);

// // What about arrays ?

var array = [1,'string','', ' ', null, undefined];
console.log(`${typeof undefined} & ${typeof array[5]}`);
console.log(`${typeof null} & ${typeof array[4]}`);
var emptyArray = [];
console.log(`The nonempty array evaluated with '!!' operator evaluates to '${!!array}'`);
console.log(`The empty array evaluated with '!!' operator evaluates to '${!!emptyArray}'`);

// What are null and undefined evaluated to ?
console.log(`null, casted with '!!' results in '${!!null}' and undefined casted with '!! results in '${!!undefined}'`);

// What about objects ?

var emptyObj = {};
var obj = {
    date: new Date(),
};
console.log(`The empty object evaluated with '!!' operator evaluates to ${!!emptyObj}`);
console.log(`The nonempty object evaluated with '!!' operator evaluates to ${!!obj}`);

// What is the flow of evaluating and why are parentheses important?
console.log(`4>5>6 results in '${!(4>5>6)}' because it's evaluated in the following way: is 4 > 5 ? no so it evaluates to false -> '${4>5}' and when true is evaluated
to number it is always evaluated to '${+true}' and false to '${+false}', so in reality the statement is evaluated to 0 > 6 ? which results in '${0>6}'`);
console.log(`Another evaluation just to see the flow 4>6<5 which will evaluate to '${4>6<5}'`)

// Don't use the constructor new Boolean!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//The boolean object in javascript is an object wrapper for boolean values. Booleans in JavaScript can also be defined using the new keyword.//
// It returns an OBJECT, the object is ALWAYS evaluated to TRUE if it has no value that the engine can handle!!!!!!!!!
var falsy = new Boolean(true);
console.log(falsy.valueOf());