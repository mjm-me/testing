import { countWords, generatePassword } from './tools';

describe('countWords tests', () => {
  test('it should be 1 of words when sentence is a word', () => {
    const sentence = 'Hola';
    const expected = 1;
    expect(countWords(sentence)).toBe(expected);
  });
  test('it should be 3 of words when sentence is three word', () => {
    const sentence = 'Hola mundo cruel';
    const expected = 3;
    expect(countWords(sentence)).toBe(expected);
  });
  test('it should be 0 of words when sentence is empty', () => {
    const sentence = '';
    const expected = 0;
    expect(countWords(sentence)).toBe(expected);
  });
  test('it should be 3 of words when sentence three word with multiple spaces', () => {
    const sentence = 'Hola    mundo    cruel';
    const expected = 3;
    expect(countWords(sentence)).toBe(expected);
  });
});

describe('generatePassword tests', () => {
  test('it should be a string', () => {
    const length = 13;
    const result = generatePassword(length);
    expect(result).toBeTypeOf('string');
  });
  test('it should have length', () => {
    const length = 13;
    const result = generatePassword(length);
    expect(result).toHaveLength(length);
  });
  test('it should have three kinds of character:lower and uppercase letter + number length', () => {
    const length = 13;
    const result = generatePassword(length);
    expect(result).toMatch(/[A-Z]/);
    expect(result).toMatch(/[a-z]/);
    expect(result).toMatch(/[0-9]/);
  });
});
