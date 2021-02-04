import { rhyuFindSum, rhyuUpperCase } from "./helper_functions/array_helper";
import { sum, sub } from "./helper_functions/number_helper";
import { reverseString, capitalizer } from "./helper_functions/string_helper";

console.log(sum(2, 2));
console.log(sub(4, 2));
console.log(
  capitalizer("this sentance should return a string of capitalized words")
);
console.log(reverseString("Hello there how are you today?"));
console.log(rhyuFindSum([1, 2, 3]));
console.log(rhyuUpperCase("Hey hi hello"));
