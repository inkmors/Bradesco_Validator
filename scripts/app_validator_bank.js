let one_digit = document.getElementById('one-digit');
let two_digit = document.getElementById('two-digit');
let three_digit = document.getElementById('three-digit');
let four_digit = document.getElementById('four-digit');

let end_digit = document.getElementById('validator-digit');

let span_sucess = document.getElementById('span-message');
let span_error = document.getElementById('span-message-error');

function count_characters() {

    let limit_characters = 1;

    let LC_one = one_digit.value;
    let LC_two = two_digit.value;
    let LC_three = three_digit.value;
    let LC_four = four_digit.value;

    if(LC_one.length > limit_characters || LC_two.length > limit_characters || LC_three.length > limit_characters || LC_four.length > limit_characters){

        one_digit.value = LC_one.slice(0, limit_characters);
        two_digit.value = LC_two.slice(0, limit_characters);
        three_digit.value = LC_three.slice(0, limit_characters);
        four_digit.value = LC_four.slice(0, limit_characters);
    }
}

let inputs = document.querySelectorAll('input');
let lastInput = inputs[inputs.length - 1];

inputs.forEach((input, index) => {
  input.addEventListener('input', (event) => {
    let currentInput = event.target;
    let value = currentInput.value;

    if (value && inputs[index + 1]) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (event) => {
    let currentInput = event.target;
    let value = currentInput.value;

    if (event.key === 'Backspace' && !value) {
      if (inputs[index - 1]) {
        inputs[index - 1].focus();
        inputs[index - 1].value = '';
      }
    }
  });
});

function error(){
    span_sucess.style.display = "";
    span_error.style.display = "block";
    span_error.textContent = "Preencha todos os campos, com números!";
}

function resetPage(){
    window.location.href = './index.html'
}

function multiply_digits() {
  if (one_digit.value.length < 1 || two_digit.value.length < 1 || three_digit.value.length < 1 || four_digit.value.length < 1) {

    error();

  } else {
    let value_one = one_digit.value;
    let value_two = two_digit.value;
    let value_three = three_digit.value;
    let value_four = four_digit.value;

    let mult_one = value_one * 5;
    let mult_two = value_two * 4;
    let mult_three = value_three * 3;
    let mult_four = value_four * 2;

    let sum = mult_one + mult_two + mult_three + mult_four;
    let rest = sum % 11;
    let end = 11 - rest;

    if (end == 11) {
      end = 0;
        span_error.style.display = "";
        span_sucess.style.display = "block";
        span_sucess.textContent = "Validado!";
        end_digit.textContent = `${end}`;
    } else if (end == 10) {
      end = "P";
        span_error.style.display = "";
        span_sucess.style.display = "block";
        span_sucess.textContent = "Validado!";
        end_digit.textContent = `${end}`;
    }else{
        span_error.style.display = "";
        span_sucess.style.display = "block";
        span_sucess.textContent = "Validado!";
        end_digit.textContent = `${end}`;
    }
  }
}
