//PRACTICE
 // let text = document.getElementsByTagName("p");
// //let text = document.getElementById("#txt");
// // text.innerHTML = "<b>Sagol P126</b>";

// // let text2 = document.getElementsByClassName("text2");
// // console.log(text2)

// // let text = document.querySelector("#container p");
// // let texts = document.querySelectorAll("#container p");

// // text.style.color = "red";
// // text.style.backgroundColor = "blue"

// // for (const item of texts) {
// //    item.style.color = "teal"
// // }

// // console.log(text)
// // console.log(texts)

// // let sendBtn = document.getElementById("succes-btn");

// // sendBtn.onclick = function(){
// //     alert("Hello P126")
// // }

// // sendBtn.onclick = function(){
// //     alert("Bye P126")
// // }

// // sendBtn.addEventListener("click",function(){
// //     alert("Hello P126")
// // })
// // sendBtn.addEventListener("click",function(){
// //     alert("Bye P126")
// // })

// let txtInput = document.querySelector(".text-input");
// let btn = document.getElementById("add-btn");
// let parentLi = document.querySelector(".parent-li")

// // txtInput.className = "test";
// // console.log(txtInput)

// // btn.onclick = function(){
// //     if(txtInput.value.trim() != ""){
// //         console.log(txtInput.value)
// //     }

// //     txtInput.value = "";
// // }


// btn.addEventListener("click", function () {

//     if (txtInput.value == "") {
//         alert("Bosh buraxmayin");
//         return;
//     }

//     // parentLi.innerHTML += `<li class="list-group-item">${txtInput.value}</li>`

//     let li = document.createElement("li");
//     let icon = document.createElement("i");
//     icon.className = "fas fa-times pt-1";
//     icon.style.float = "right"
//     li.classList.add("list-group-item")
//     li.classList.add("test")
//     li.innerText = txtInput.value;
//     li.append(icon)
//     parentLi.append(li);



//     icon.onclick = function(){
//         li.remove();
//     }
//     txtInput.value = "";
// })


//Task:
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
  
  
  
