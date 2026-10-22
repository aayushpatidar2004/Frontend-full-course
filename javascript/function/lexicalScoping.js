let a = 10;              // global scope

function outer() {
    let b = 20;          // outer ka scope

    function inner() {
        let c = 30;      // inner ka scope
        console.log(a);  // 10 (global se mila)
        console.log(b);  // 20 (parent outer se mila)
        console.log(c);  // 30 (apna)
    }

    inner();
}

outer();
// Lexical Scoping kya hai?

// Lexical scoping ka matlab hai: ek variable kahan accessible hoga, ye is baat se decide hota hai ki code mein wo kahan likha gaya hai (define hua hai), na ki function kahan se call hua.

// Simple bhasha mein: andar wala function bahar wale (parent) function ke variables ko dekh sakta hai, lekin bahar wala andar ke variables ko nahi dekh sakta.

// Isko static scoping bhi kehte hain, kyunki scope code likhte waqt hi fix ho jata hai.