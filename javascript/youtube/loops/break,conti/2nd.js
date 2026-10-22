// print first 5 odd number only
let count=0;
for(let i=1;i<101;i++){
    if(i%2===1){
        count++;
        console.log(i);

    }
    if(count===5)break;
}