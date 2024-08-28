
let outputScreen = document.getElementById("displayScreen")

function display(num){
    outputScreen.value += num; 
}

function calculate(){
    try {
        outputScreen.value = eval(outputScreen.value)
    } catch (error) {
        alert("Enter Valid Input");
    }
}

function clearDisplay(){
    outputScreen.value = "";
}

function deleteValue(){
    outputScreen.value = outputScreen.value.slice(0 , -1);
}

function darkMore(){
   document.getElementById("calculator").classList.toggle("dark-mode");

    const element = document.getElementById("toggleButton");
    if (element.className == "toggle-button") {
        element.className = "white-button";
    } else {
        element.className = "toggle-button";
    }
}