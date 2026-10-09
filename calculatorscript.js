function Addition () {
    let val1 = document.getElementById("num1").value;
    let val2 = document.getElementById("num2").value;
    if(val1==="" || val2 ===""){
     document.getElementById("answer").textContent = "Value missing";
     document.getElementById("answer").style.color="red";
    } else {
    
     let a = Number(val1);
     let b = Number(val2);
     let sum = a + b;
    document.getElementById("answer").textContent = sum;
    document.getElementById("answer").style.color="white";}
    
}

function Subtraction () {
    let val1 = document.getElementById("num1").value;
    let val2 = document.getElementById("num2").value;
    if(val1==="" || val2 ===""){
     document.getElementById("answer").textContent = "Value missing";
     document.getElementById("answer").style.color="red";
    } else {
    
     let a = Number(val1);
     let b = Number(val2);
     let ans = a - b;
    document.getElementById("answer").textContent = ans;
    document.getElementById("answer").style.color="white";}
}

function Multiply () {
    let val1 = document.getElementById("num1").value;
    let val2 = document.getElementById("num2").value;
    if(val1==="" || val2 ===""){
     document.getElementById("answer").textContent = "Value missing";
     document.getElementById("answer").style.color="red";
    } else {
    
     let a = Number(val1);
     let b = Number(val2);
     let ans = a * b;
    document.getElementById("answer").textContent = ans;
    document.getElementById("answer").style.color="white";}
}

function Division () {
    let val1 = document.getElementById("num1").value;
    let val2 = document.getElementById("num2").value;
    if(val1==="" || val2 ===""){
     document.getElementById("answer").textContent = "Value missing";
     document.getElementById("answer").style.color="red";
    } else{

     let a = Number(val1);
     let b = Number(val2);

    if (b === 0) {
        document.getElementById("answer").textContent= "Divison Error ";
        document.getElementById("answer").style.color="red";
    } else {
    let ans = a/b;
    document.getElementById("answer").textContent = ans;
    document.getElementById("answer").style.color="white";
    }
   }
}
