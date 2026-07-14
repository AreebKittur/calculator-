const display = document.getElementById("display");

// Add numbers/operators
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    if (display.value === "") return;

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        appendValue(key);
    }

    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});