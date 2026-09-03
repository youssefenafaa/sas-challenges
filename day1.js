//While Loop Counting: Use a while loop to print the numbers from 1 to 20 in the console
let i=1;
while (i<=20) {console.log(i);
    i++;
}
//Sum of First 100 Numbers: Use a for loop to calculate the sum of all numbers from 1 to 100, then log the final total.
let somme=0;

for(let i=1;i<=100;i++){
    console.log(somme=somme+i);

}
 console.log("totla =" + somme);
// Multiplication Table: Choose a number (e.g., 5). Use a for loop to print its multiplication table from 1 to 10 (e.g., "5 x 1 = 5", "5 x 2 = 10").

for (i=0;i<=50;i++){
    if(i%3==0 && i%5==0 ){console.log("FIZZBUZZ");}
    else if (i%5==0){console.log("BUZZ");}
    else if (i%3==0){console.log("FIZZ");}
    else {console.log(i);}}
// Count Vowels (Loop): Declare a string variable. Use a for loop to iterate over each character of the string and count how many vowels (a, e, i, o, u) it contains.
 let chaine = "joseph";
let cont=0; // 0
for (i=0;i<chaine.length;i++){
    if(chaine[i] == "a" || chaine [i] == "e" ||chaine [i] == "i" || chaine [i] == "o" || chaine [i] == "u")
        {
        cont++;
        }
        else {console.log("pas de voyelles");}
   
}
console.log(cont);
//Square of Stars: Use nested loops to print a 5x5 square of asterisks (*) in the console.
let lin="5";
for(i=0;i<=5;i++){
    lin=""; 
    for(j=0;j<=5;j++)
      lin += "* ";


        console.log( lin );

}
//Prime Numbers: Use a loop to find and log all prime numbers between 1 and 50. (A prime number is only divisible by 1 and itself).
 (i=0;i<=50;i++)
{   
    if(i % 2 == 0) {console.log("ce n'est pas un nombre premier");}
    else if (i/i==1 && i/1==i){console.log("un nombre premier" );}
      else {("ce n'est pas un nombre premier ");
    }
}
//Right-Angled Triangle: Use nested for loops to draw a right-angled triangle of stars in the console (height of 5).
let ligne="5";
for(i=1;i<=5;i++){
    ligne=""; 
    for(j=1;j<=i;j++)
      ligne += "* ";


        console.log( ligne );

}
//Fibonacci Sequence: Use a loop to print the first 10 numbers of the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8...).

let oldsum=0;
let newsum=1;
let temp;
for(i=1;i<8;i++){
  newsum=oldsum + newsum;
  temp=oldsum;
  oldsum=newsum;
   newsum=temp;
console.log("F(N)=" +newsum)
}


