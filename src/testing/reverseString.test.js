import { reverseSting } from "./reverseString";

test("a test to determine that if a string is reversed or not", () => {
  expect(reverseSting("hi")).toMatch("ih");
  expect(reverseSting("   cat")).toMatch("tac   ");
  expect(reverseSting("*^4e")).toMatch("e4^*");
});
