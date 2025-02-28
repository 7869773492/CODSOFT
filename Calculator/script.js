// Function to Append Characters to Display
function appendCharacter(char) {
    document.getElementById("display").value += char;
}

// Function to Clear Display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to Calculate Result
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}
