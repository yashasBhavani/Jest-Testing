/* A reverseString function that takes a string and returns it reversed.*/

function reverseSting(string) {
  let result;
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

export { reverseSting };
