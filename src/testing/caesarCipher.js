/*A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. 
Read more about how a Caesar cipher works.*/

function caesarCipher(string, number) {
  const aplhabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let userString = "",
    isUpperCase = /^[A-Z]+$/,
    isLowerCase = /^[a-z]+$/,
    encryption = "",
    index = 0;

  for (let i = 0; i < string.length; i++) {
    let left = 0,
      right = aplhabets.length - 1;
    userString = string[i];
    while (right > left) {
      if (string[i] === aplhabets[right]) {
        index = right;
      }
      if (string[i] === aplhabets[left]) {
        index = left;
      }
      if (string[i] !== left && string[i] !== right) {
        left++;
        right--;
      }
    }
    let encryptedIndex = (number + index) % 26;
    if (isUpperCase.test(string[i]))
      encryption += aplhabets[encryptedIndex].toUpperCase();
    else if (isLowerCase.test(string[i]))
      encryption += aplhabets[encryptedIndex];
    else if (!/^[a-zA-Z]+$/.test(string[i])) encryption += string[i];
  }
  return encryption;
}

export { caesarCipher };
