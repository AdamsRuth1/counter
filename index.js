let count = 0
let countDisplay = document.getElementById("countshow")

const decrease = () =>{
    count-- 
    countDisplay.innerText = count
    textcolor();
}
const reset =() =>{
    count = 0
    countDisplay.innerText = count
    textcolor();
   
}

const increase =() =>{
    count++
    countDisplay.innerText = count
    textcolor();
}

const textcolor =() =>{
    countDisplay.style.color =  count < 0 ? "red" : "white"
    textcolor();
}