// Declare a variable age and assign a number to it. Log to the console: "You are [age] years old."
let age = 50;
console.log("You are "+ age +" years old");
//Declare a variable temperature. If the temperature is strictly greater than 30, log "It's hot outside!". Otherwise, log "The weather is nice."
let temp;
if (temp>30) {console.log("It's hot outside!");}
else{console.log("The weather is nice");}
//Declare a variable number. Use the modulo operator (%) and an if/else statement to check if the number is even or odd, and log the result
let number = 12;
if (number%2==0) {console.log(" even ");}
else{console.log("odd"); }
//Declare a variable score (0-100). Use if/else if/else statements to log "A" for 90-100, "B" for 80-89, "C" for 70-79, and "F" for anything below 70.
let score =15;
if (score>=90 && score <= 100) {console.log("A");}
else if(score>=80 && score <= 89){console.log("b");}
else if(score>=70 && score <= 79){console.log("c");}
else{console.log("f");}
// Declare three number variables. Write conditions to find and log the largest of the three numbers without using Math.max.
let numb1 =12;
let numb2 =13;
let numb3 =14;
if (numb1 > numb2 && numb1 > numb 3)   (numb1 + " est le plus grand");}
else if (numb2 > numb1 && numb2 > numb 3){  (numb2 + " est le plus grand");}
else  { (numb3 + " est le plus grand");}
//Leap Year Checker: Declare a year variable. Write a condition to check if it's a leap year (divisible by 4 AND NOT divisible by 100, UNLESS it's divisible by 400). Log true or false.
let annee = 2026;
if((annee % 4==0 && annee % 100 !=0) || annee % 400 ==0 ){console.log("true");}
else {console.log("false");}
//Basic Calculator: Declare variables num1, num2, and operator (a string like "+", "-", "*", "/"). Use a switch statement to perform the correct math operation and log the result. Handle division by zero.
let number1 =12;
let number2 =14;
let somme;
let sustraction;
let multiplication;
let division;

calculatrise = 1;
switch (calculatrise) {
    case 1:
         somme = (number1 + number2) 
         console.log("la somme est : " + somme ) ;
        break;
     case 2: 
     sustraction = (number1 - number2) 
     console.log("la sustraction est : " + sustraction) ;
        break;    
        case 3: multiplication = (number1 * number2) 
        console.log("la multiplication est : " + multiplication) ;
        break; 
          case 4:division = (number1 / number2)
           console.log("la division est : " + division) ;

    default:console.log("ereur ");
        
}
// Declare three variables representing the angles of a triangle. Check if they form a valid triangle (all three add up to exactly 180, and no angle is 0 or less).
let A =45;
let b =45;
let c =90;
if( A + b + c < 0){console.log("inferieur 0");} 
else if(A + b + c ==180){console.log("triangle");}
else{console.log("aucun triangle")}
// Declare variables for weight (kg) and height (m). Calculate the BMI (weight / (height * height)). Log the BMI along with a category: "Underweight" (<18.5), "Normal" (18.5-24.9), or "Overweight" (>=25).
let weight=20;
let height=10;
let BMI;
BMI = (weight / (height * height));
if(BMI >= 25 ){console.log(" Overweight");}

else if (BMI> 18,5 && BMI < 24,9 ){console.log("Normal");}
else 
{console.log("Underweight");}