// Todo: Make M+ M- and MC functional
let string = "";
let inputField = document.querySelector('input');
let buttons = document.querySelectorAll('.button');

function handleButtonClick(value) {
  if (value === '=') {
    string = eval(string);
    inputField.value = string;
  } else if (value === 'C') {
    string = "";
    inputField.value = string;
  } else {
    string = string + value;
    inputField.value = string;
  }
}

// Click event for buttons
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    handleButtonClick(e.target.innerHTML);
  });
});

// Keyboard event listener
document.addEventListener('keydown', (e) => {
  const key = e.key;
  const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'C', '.','%'];

  if (validKeys.includes(key)) {
    handleButtonClick(key);
  }
});
