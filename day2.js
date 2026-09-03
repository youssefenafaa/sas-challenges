//Greeting Function: Write a standard function greet(name) that takes a string and logs "Hello, [name]!".
function greet(nom){
    console.log("bonjour"+nom);

}
greet("youssef");
//Arrow Addition: Write an arrow function add(a, b) that takes two numbers and returns their sum. Log the result of calling the function.
function add(a,b){
    let somme =a+b;
    console.log(somme);
}
add(1,2);
//Square Function: Write a function square(num) that returns the square of a given number
function sqaure(num){
    let carre = num * num ;
     console.log(carre);
}
sqaure(2);
//Temperature Converter: Write a function celsiusToFahrenheit(c) that converts Celsius to Fahrenheit and returns the result. Formula: (C * 9/5) + 32.
function celsiusToFuhrenheit(c){
    let F=(c*9/5)+32;
    console.log(F + "en Fahrenheit.");
}
celsiusToFuhrenheit(18);
//String Emptiness Check: Write an arrow function isEmpty(str) that returns true if a string is empty or contains only spaces, and false otherwise.
function  isEmpty(str){
    for (i=0;i<=str.length;i++);{
        if(str==""||str == " "){
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}
isEmpty("");
//Factorial Calculator: Write a function factorial(n) that uses a loop inside it to calculate and return the factorial of n.
let result=0;
let number=0; 
function factorial(n){
  if (n == 0){return  1;} 
let fac =1;
    for(i=n;i>=1;i--) {
       fac = fac *i;
    
    }
    return fac;
     
}
number = 5;
result = factorial(5);
printOffactoriel(number,result);

function printOffactoriel(Num,result){
  console.log(Num + "! = " +result );
}
//Math Callback: Write a higher-order function calculate(a, b, operation) where operation is a callback function. Call it twice passing different arrow functions for addition and subtraction.
let addOperation = (a,b)=> a+b;
let subOperation = (a,b)=> a-b;

function calc(a,b,operation){
  return operation(a,b);
}

function Print(num){
  console.log(num);
}

Print(calc(1,2,addOperation));
Print(calc(1,2,subOperation));
// Closure Intro: Writ a function createMultiplier(multiplier) that returns a new arrow function. The returned function should take a number and multiply it by the original multiplier.
function createMultiplier(multiplier){

    
    return{ renvoye:(a)=> a*multiplier
        
    }
}
let  resolt =createMultiplier(2);
console.log(resolt.renvoye(2));

// Custom Filter Outline: Write a function filterOddNumbers(arr, callback) where the callback is an arrow function that returns true if a number is odd. Use it to filter an array.
  
function callback(){

return{ ronvoyee:()=>{
    for(i=0;i< ;i++)
        if(num %2 != 0 ){
            console.log("true");
            else{
                console.log("false");
            }
        }
}

}



}
function filterOodNumbers(arr,callback){

}



