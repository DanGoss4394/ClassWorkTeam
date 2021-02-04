//  String
export function reverseString(string) {
  let newArray = string.split(" ");
  console.log(newArray);
  let reverseArray = [];
  let length = newArray.length;
  for (let i = 0; i < length; i++) {
    if (newArray[i] == newArray[length - 1]) {
      let word = newArray[length - 1].slice(0, -1);
      reverseArray.unshift(word);
    } else {
      reverseArray.unshift(newArray[i]);
    }
  }
  reverseArray.push(newArray[length - 1].slice(-1));
  return reverseArray.join(" ");
}

console.log(reverseString("Hello there how are you today?"));

export const capitalizer = (sentence) => {
  const divSen = sentence.split(" ");
  return divSen.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
};

console.log(
  capitalizer("this sentance should return a string of capitalized words")
);
