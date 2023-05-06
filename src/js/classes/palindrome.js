import { $button, $result } from '..';

// CLASS
export class Palindrome {

  static disabledBtn() {
    $button.disabled = true;
    $button.classList.add('true');
  }

  constructor(word) {
    this.word = word;
  }

  /**
   *
   * @returns {boolean}
   */
  isPalindrome() {
    // validation
    if (!/^[a-zA-Z ]+$/g.test(this.word)) {
      const errorMessage =
        'Carácter inválido. Solo se aceptan letras.';
      $result.textContent = errorMessage;
      throw new Error(errorMessage);
    }

    const string = this.word.toLowerCase();
    const length = string.length;

    if (length === 1) return true;

    // Apply two pointers technique to compare first and last elements on each iteration
    for (let start = 0, end = length - 1; start < end; start++, end--) {
      // Early return if compared items are different, input is not a palindrome
      if (string[start] !== string[end]) return false;
    }
    // If early return in condition inside for loop is not reached, then input is palindrome
    return true;
  }

  displayResult() {
    const message = this.isPalindrome()
      ? `${this.word.toUpperCase()} es un palíndromo`
      : `${this.word.toUpperCase()} NO es un palíndromo`;

    $result.classList.toggle('is-palindrome', this.isPalindrome());
    $result.classList.toggle('no-palindrome', !this.isPalindrome());

    $result.textContent = message;

    setTimeout(() => {
      $result.textContent = '';
      $result.classList.remove('is-palindrome', 'no-palindrome');
    }, 2000);
  }
  
}
