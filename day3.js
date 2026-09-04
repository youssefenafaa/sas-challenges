//Length & Uppercase:
let str="Hello world";
console.log(str.length);
console.log(str.toUpperCase());
//First & Last Char: 
let strn="hellowordl";
console.log( strn.slice(0,1));
console.log(strn.slice(9));
//Word Replacer:
 let stringg="i love appels";
console.log(stringg.replace("appels","bananas"));
//Palindrome Check: 
let stringgg="abdcba";

for(i=0;i<=stringg.length;i++)
{
    if(){
        console.log("lit dans la meme façon");
        break;
    }
    else{
        ("pas lit dans la meme façon");
        break;
    }
}
//reverse

function reveSrting("Stringggg"){
    for(i="Stringggg";i>=0;i++){
        let reversstring = i ;
    }
return reversstring;
}
console.log("abc");
//sans split: 
function reveSrting(Stringggg){
   let reversstring =""; 
    for(let i=Stringggg.length-1;i>=0;i--){
         reversstring +=Stringggg[i ];
    }
return reversstring;
}
console.log (reveSrting("abc"));



//Palindrome Check dynamique: 

let stringggg="abcba";
let goInIf = false
bled:
for(let i=0;i<=(stringggg.length/2);i++) {
  console.log(stringggg[i],stringggg[stringggg.length-1-i])
   if(stringggg[i]!=stringggg[stringggg.length-1-i]){
    console.log("false"); 
    goInIf = true
    break bled;
  }
}

if(goInIf==false){
    console.log("true")
  }

  
//Character Counter: Write a function countChar(str, char) that counts how many times a specific character appears in a string.
function contChar(str,char){
    let compt=0;
for (i=0;i<=str.length;i++)
{
    if (str[i]==char){
        compt++;
        
}    

}console.log(compt);}

contChar("abcd","a");

//niveau3    
    
    