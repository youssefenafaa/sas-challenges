 //Find the Second Largest Number
 let tab=[1,2,3,4];
 let max=0;
 let secmax=0;
  
 if(tab[0] > tab[1]){
    max=tab [0];
    cecmax=tab [1];

 }else {
    max=tab [1];
    secmax=tab [0];
 }
 for (let i=0;i<=tab.length-1;i++){
    if(max<tab[i]){
        max=tab[i];
    }
    
    

 }
 console.log(max);
 for (let j=0;j<=tab.length-1;j++){
    if(secmax <tab[j] && secmax != max){
        secmax=tab[j];
    }}
    console.log(secmax);
    

