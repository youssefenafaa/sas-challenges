function afficherPairs(n) {
    for(i=0;i<=n;i++){
        
        
        if(n % 2==0){
           console.log(n)
            ;
        }
        else{
            console.log("pas d un nombre pairs");
        }
    }

}
afficherPairs(10);

//exercice2
function resultNbpair(nb1,nb2){
    for(i=0;i<=nb2;i++){
       let somme=nb1 + nb2 + i;
       if(somme%2==0){  console.log(pair);}
        
    else{console.log(impair)}
    }
}