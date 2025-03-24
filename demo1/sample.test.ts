//import { test, expect } from 'vitest'; lo quitamos porque lo hemos puesto como global en tsconfig y en vistest
import { add } from './sample';

//Test elements
//describe: agrupa los test de una suite
//test: test unitario
//it: test unitario
//expect: aserción
//to...: match

describe('add tests', () => {
  it('should be 5 when add 2 and 3', () => {
    expect(add(2, 3)).toBe(5);
  });
  test('it should be -5 when add -2 and -3', () => {
    expect(add(-2, -3)).toBe(-5);
  });
});
