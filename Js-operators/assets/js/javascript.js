let num1 =document.querySelector(".input-1");
let num2 =document.querySelector(".input-2");
let btntop =document.querySelector (".btn-top");
let btncix =document.querySelector(".btn-cix");
let btnvur =document.querySelector(".btn-vur");
let btnbol =document.querySelector(".btn-bol");
let result =document.querySelector(".result");
let resultSum;

btntop.addEventListener("click", function () {
    
    if(num1.value == "" && num2.value == "" ) {
        alert("Hesablayin");
        return;
    }

    let li = document.createElement("li");
    li.innerText = parseInt(num1.value) + parseInt(num2.value);
    li.classList.add("list-group-item");
    result.append(li);
    num1.value = "";
    num2.value = "";


})

btncix.addEventListener("click",function() {
    
    if(num1.value == "" && num2.value == "" ) {
        alert("Hesablayin");
        return;
    }
    let li = document.createElement("li")
    li.innerText = parseInt(num1.value) - parseInt(num2.value);
    li.classList.add("list-group-item")
    result.append(li);
    num1.value = "";
    num2.value = "";


})

btnvur.addEventListener("click",function() {
    
    if(num1.value == "" && num2.value == "" ) {
        alert("Hesablayin");
        return;
    }
    let li = document.createElement("li")
    li.innerText = parseInt(num1.value) * parseInt(num2.value);
    li.classList.add("list-group-item")
    result.append(li);
    num1.value = "";
    num2.value = "";


})
btnbol.addEventListener("click",function() {
    
    if(num1.value == "" && num2.value == "" ) {
        alert("Hesablayin");
        return;
    }
    let li = document.createElement("li")
    li.innerText = parseInt(num1.value) / parseInt(num2.value);
    li.classList.add("list-group-item")
    result.append(li);
    num1.value = "";
    num2.value = "";


})
  
  
  
