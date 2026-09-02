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

