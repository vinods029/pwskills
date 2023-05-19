const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const displayvalue = document.getElementById("displayvalue");
const resetBtn = document.getElementById("resetBtn");


var num = 0

const incre = () => {
    if (num >=10) {
        alert("10+ Values are not allowed")
    }else {
        num = num +1;
        displayvalue.innerHTML = num
    }
    
}

const decre = () => {
    if (num > 0) {
        num = num -1;
        displayvalue.innerHTML = num
    }else {
        alert("Negative value is not allowed")
        
    }

}

const reset = () => {
    num =0;
    displayvalue.innerHTML = num
}

incrementBtn.addEventListener("click",incre)

decrementBtn.addEventListener("click",decre)

resetBtn.addEventListener("click",reset)