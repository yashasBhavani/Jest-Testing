/* A capitalize function that takes a string and returns it with the first character capitalized. */

function capitalize(string) {
  let i = 0;
  while (true) {
    if (typeof string[i] !== "string") i++;
    else {
      let replace = string[i].toUpperCase();
      string[i] = replace;
      return string;
    }
  }
}

export { capitalize };
