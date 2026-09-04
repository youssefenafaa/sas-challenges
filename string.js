//Demander à l’utilisateur une chaîne et afficher cette chaîne inversée.Exemple : hello → olleh
let chaine = "abcd";
let reverse="";
for(let i=chaine.length-1;i>=0;i--){
reverse+=chaine[i];
}
console.log(reverse);
//Demander une chaîne et afficher combien de voyelles (a, e, i, o, u) elle contient.Exemple : javascript → 3
let stringg="abcde";

compt=0;
for (let i=0;i<=stringg.length;i++){
    if(stringg[i]=="a"||stringg[i]=="e"||stringg[i]=="o"||stringg[i]=="i"||stringg[i]=="u")
    {compt++;}
    else{console.log("pas d un variable");
}}
console.log(compt);

//palendrom:
let chane="srbn";
let ifgo=fasle;
for(i=0;i<=chane.length-1;i++){
    if (chane[i]!=chane[chane.length-1-i]){
        console.log(false);
        ifgo=true;
    }

}
if(ifgo=fasle){
    console.log(true);
}

