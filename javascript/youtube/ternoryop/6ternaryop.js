let loggedin = true;
let hastoken = false;
let access = loggedin && hastoken ? "allow" :"deny";
console.log(access);