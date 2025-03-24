import { add } from './sample';
import { fizzbuzz } from './fizzbuzz';

// Las variables start y end se dan.
// Devuelve un array con el contenido de los números individuales.
// Reemplaza todos los números divisibles por tres con "Fizz"
// y todos los números divisibles por 5  "Fizz"
// Si un número es divisible por 5 y 3, reemplázalo por "FizzBuzz"

test('si la entrada es 3, la salida es ["fizz"]', () => {
  expect(fizzbuzz(3)).toEqual(['fizz']);
});

test('si la entrada es 5, la salida es ["buzz"]', () => {
  expect(fizzbuzz(5)).toEqual(['buzz']);
});

test('si la entrada es 2, la salida es [2]', () => {
  expect(fizzbuzz(2)).toEqual([2]);
});

test('si la entrada es 15, la salida es ["fizzbuzz"]', () => {
  expect(fizzbuzz(15)).toEqual(['fizzbuzz']);
});

test('si la entrada es 6, la salida es ["fizz"]', () => {
  expect(fizzbuzz(6)).toEqual(['fizz']);
});

test('si la entrada es 10, la salida es ["buzz"]', () => {
  expect(fizzbuzz(10)).toEqual(['buzz']);
});

test('si la entrada es 45, la salida es ["fizzbuzz"]', () => {
  expect(fizzbuzz(45)).toEqual(['fizzbuzz']);
});
