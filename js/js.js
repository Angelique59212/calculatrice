let champs = document.getElementById("champ");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let erase= document.getElementById("erase");
let four= document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let addition = document.getElementById("addition");
let seven = document.getElementById("seven");
let height = document.getElementById("height");
let nine = document.getElementById("nine");
let substraction = document.getElementById("substraction");
let zero = document.getElementById("zero");
let pourcent = document.getElementById("pourcent");
let equal = document.getElementById("equal");
let multiplication = document.getElementById("multiplication");
let parenthesis = document.getElementById("parenthesis");
let parenthesis2 = document.getElementById("parenthesis2")
let copy = document.getElementById("copy");
let comma = document.getElementById("comma");
let touch ;

function written () {
    champs.value += touch ;
}
one.addEventListener("click",function (){
    touch = 1;
    written();
})

two.addEventListener("click",function (){
    touch = 2;
    written();
})

three.addEventListener("click",function (){
    touch = 3;
    written();
})

erase.addEventListener("click",function (){
    champs.value = "";
})

parenthesis.addEventListener("click", function (){
    touch = "(";
    written();
})

four.addEventListener("click",function (){
    touch = 4;
    written();
})

five.addEventListener("click",function (){
    touch = 5;
    written();
})

six.addEventListener("click",function (){
    touch = 6;
    written();
})

addition.addEventListener("click",function (){
    touch = "+";
    written();
})

parenthesis2.addEventListener("click", function (){
    touch = ")";
    written();
})

seven.addEventListener("click",function (){
    touch = 7;
    written();
})

height.addEventListener("click",function (){
    touch = 8;
    written();
})

nine.addEventListener("click",function (){
    touch = 9;
    written();
})

substraction.addEventListener("click",function (){
    touch = "-";
    written();
})

copy.addEventListener("click", function (){
    let textCopy = document.querySelector("#champ");
    textCopy.select ();
    document.execCommand("copy");
})

zero.addEventListener("click",function (){
    touch = 0;
    written();
})

pourcent.addEventListener("click",function (){
    touch = "%";
    written();
})

equal.addEventListener("click",function (){
    champs.value = eval(champs.value);
})

multiplication.addEventListener("click",function (){
    touch = "*";
    written();
})

comma.addEventListener(("click"), function() {
    touch = ".";
    written();
})


