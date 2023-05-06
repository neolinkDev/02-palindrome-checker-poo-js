import { Palindrome } from './classes/palindrome';

// variables
const d = document;

export const $result = d.getElementById('result');
export const $button = d.querySelector('.container__form-button');
export const $input         = d.querySelector('.container__form-input');


// functions
export const handleClickButton = () => {
  
  const { value: word } = $input;
  
  // instance
  const palindrome = new Palindrome( word );
  
  // console.log(palindrome.isPalindrome());

  palindrome.displayResult();
  
  $input.value = '';

  Palindrome.disabledBtn();
}

export const handleInput = () => {
  const errorMessage = $result;
  
  if ($input.value.trim() === '') {
    errorMessage.textContent = '';
    Palindrome.disabledBtn();
  } else {
    $button.disabled = false;
    $button.classList.remove('true');
  }
  
}

// events
export const init = () => {
  Palindrome.disabledBtn();

  $input.addEventListener('input', handleInput);
  $button.addEventListener('click', handleClickButton);
}

