export const fizzbuzz = (n: number): number | string => {
  if (n % 3 === 0 && n % 5 === 0) return ['fizzbuzz'];
  //if (n === 3) return ['fizz'];
  if (n % 3 === 0) return ['fizz'];
  if (n === 15) return ['fizzbuzz'];
  //if (n === 5) return ['buzz'];
  if (n % 5 === 0) return ['buzz'];
  return [n];
};
