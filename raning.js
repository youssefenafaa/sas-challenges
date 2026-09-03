function createMultiplier(multiplier){

    
    return{ renvoye:(a)=> a*multiplier
        
    }
}
let  resolt =createMultiplier(2);
console.log(resolt.renvoye(2));