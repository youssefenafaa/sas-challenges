//1Array Basics: Create an array of 3 colors. Add a new color to the end, remove the first color, and log the final array
let fruit=["panane","ornage","pomme"];
console.log(fruit.push("fraise"));
console.log(fruit.shift(0));
console.log(fruit);

//2Array Sum: Create an array of 5 numbers. Iterate through it with a loop and calculate the total sum.
let num=[1,2,3,4,5];
let sum=0;
for (let i=0;i<=num.length;i++){
    sum+=i;}
    console.log(sum);
    //3Element Existence: Write a function that takes an array and a value, returning true if the value exists in the array and false otherwise (without using .includes()).
function elementExectence(T,value){
  

  
    for (let i=0;i<=T.length-1;i++){
        if(T[i]==value){
          return true;
        }
     
    }
    return false ;
}
console.log(elementExectence(T=[1,2,3,4],4));
//niveau 2 Find Maximum: Write a function that takes an array of numbers and returns the largest number (without using Math.max).
function findMax(Tab){
    let Max=Tab[0];
  
    for (let i=1; i<=Tab.length-1;i++){
        if (Max < Tab[i]){
            Max = Tab [i];
            
        }
       
           
        
    } return Max;
}
console .log(findMax(Tab=[4,3,7]));
//2 Remove Duplicates: Write a function that takes an array with duplicate values and returns a new array with only unique values.
function removeDuplicates(eray){


    for (let i=0; i<=eray.length-1;i++){
        if(eray[i]==eray[i+1]){
            console.log(eray.)
        }

    }

}
console.log (removeDuplicates(eray[1,2,3,3,4,5]));
