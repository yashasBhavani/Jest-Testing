import { caesarCipher } from "./caesarCipher";

test("to check if protocols of caesarCipher is followed for small letters", () => {
  expect(caesarCipher("a", 1)).toMatch("b");
  expect(caesarCipher("A", 6)).toMatch("G");
  expect(caesarCipher("   a!", 2)).toMatch("   c!");
  expect(caesarCipher("yashas", 6)).toMatch("egyngy");
  expect(caesarCipher("w", 6)).toMatch("c");
});

test("to check if protocols of caesarCipher is followed for capital letters", () => {
  expect(caesarCipher("W", 6)).toMatch("C");
  expect(caesarCipher("Y", 6)).toMatch("E");
});

// bug is detected
// if i keep w test is passing
// for reason i keep W test is not passing
// for A test is passing
// so the problem is that for capital letter only , if indice is greater that 25 , then wrong out is comming
// gotta check the code
