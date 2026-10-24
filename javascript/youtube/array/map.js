// jab bhi aapko aisa koi case dikhe jaye jaha pr ek array se naya array banega and wo naya array kuch value ko rakhega tb map lagega

let arr =[11,12,62,3,4,25];

let newarr =arr.map(function(val){
    if(val>10) return val;

});