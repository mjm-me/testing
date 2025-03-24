export const fizzbuzzItem = (n: number): number | string => {
  if (n % 3 === 0 && n % 5 === 0) return 'fizzbuzz';
  //if (n === 3) return ['fizz'];
  if (n % 3 === 0) return 'fizz';
  //if (n === 5) return ['buzz'];
  if (n % 5 === 0) return 'buzz';
  return n;
};

export const fizzbuzz = (start: number, end: number): (number | string)[] => {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(...fizzbuzzItem(i));
  }
  return result;
};
