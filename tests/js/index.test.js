import { Palindrome } from '../../src/js/classes/palindrome';
import { fireEvent } from '@testing-library/dom';


describe('Palindrome class', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <input class="container__form-input" />
        <button class="container__form-button" disabled />
        <div id="result"></div>
      </div>
    `;
  });

  test('should return true if word is a palindrome', () => {
    const palindrome = new Palindrome('racecar');
    expect(palindrome.isPalindrome()).toBe(true);
  });

  test('should return false if word is not a palindrome', () => {
    const palindrome = new Palindrome('hello');
    expect(palindrome.isPalindrome()).toBe(false);
  });

  test('should enable button when input has value', () => {
    const input = document.querySelector('.container__form-input');
    const button = document.querySelector('.container__form-button');

    expect(button.disabled).toBe(true);

    fireEvent.input(input, { target: { value: 'hello' } });

    expect(button.classList).not.toContain('true');
  });

  test('should disable button when input is empty', () => {
    const input = document.querySelector('.container__form-input');
    const button = document.querySelector('.container__form-button');

    fireEvent.input(input, { target: { value: '' } });

    expect(button.disabled).toBe(true);
  });

});
