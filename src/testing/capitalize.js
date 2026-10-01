/* A capitalize function that takes a string and returns it with the first character capitalized. */

function capitalize(string) {
  let result = "",
    notFirstLetter = false,
    lettersRegex = /^[a-z]+$/i;
  for (let i = 0; i < string.length; i++) {
    if (!lettersRegex.test(string[i]) || notFirstLetter === true)
      result += string[i];
    else {
      notFirstLetter = true;
      result += string[i].toUpperCase();
    }
  }

  return result;
}

export { capitalize };
