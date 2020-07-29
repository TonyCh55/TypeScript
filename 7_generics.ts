const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8];
const arrayOfStrings: Array<string> = ["hello", "bye", "nothing"];

function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);
