const display = document.getElementById("display");
function appendToDisplay(value) {
 
  if (value === "+") {
    display.value += value;
  } else if (value === "-") {
    display.value += value;
  } else if (value === "*") {
    display.value += value;
  } else if (value === "/") {
    display.value += value;
  } else {
    display.value += value;
  }
}
function calculate() {
  try {
    if (display.value !== "") {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
