
let wicone = document.getElementsByClassName("w-icon");
let login = document.getElementById("logindive");
let register = document.getElementById("registerdirve");
let wlogin = document.getElementById("wlogin");
let wsingin = document.getElementById("wsingin");
let rrlogin = document.getElementById("rlogin");
let lregister = document.getElementById("lregister");
let welcometo = document.getElementById("welcometo");


addEventListener("load", () => {
    const register = document.getElementsByClassName("register")[0].style.filter = "blur(10px)";
    const welcome = document.getElementsByClassName("welcome")[0].style.filter = "blur(0px)";
    const login = document.getElementsByClassName("login")[0].style.filter = "blur(10px)";
})



wlogin.addEventListener("click", () => {
    const register = document.getElementsByClassName("register")[0].style.filter = "blur(10px)";
    const welcome = document.getElementsByClassName("welcome")[0].style.filter = "blur(5px)";
    const login = document.getElementsByClassName("login")[0].style.filter = "blur(0px)";

})

wsingin.addEventListener("click", () => {
    const login1 = document.getElementsByClassName("login")[0].style.filter = "blur(10px)";
    const welcome1 = document.getElementsByClassName("welcome")[0].style.filter = "blur(10px)";
    const register1 = document.getElementsByClassName("register")[0].style.filter = "blur(0px)";

})

rrlogin.addEventListener("click", () => {
    const register = document.getElementsByClassName("register")[0].style.filter = "blur(10px)";
    const welcome = document.getElementsByClassName("welcome")[0].style.filter = "blur(10px)";
    const login = document.getElementsByClassName("login")[0].style.filter = "blur(0px)";

})

lregister.addEventListener("click", () => {
    const login = document.getElementsByClassName("login")[0].style.filter = "blur(10px)";
    const welcome = document.getElementsByClassName("welcome")[0].style.filter = "blur(10px)";
    const register = document.getElementsByClassName("register")[0].style.filter = "blur(0px)";

})
