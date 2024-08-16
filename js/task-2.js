function makeArray(firstArray, secondArray, maxLength) {
  const result = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (maxLength === 0) {
      break;
    } else {
      result.push(firstArray[i]);
      maxLength -= 1;
    }
  }

  for (let b = 0; b < secondArray.length; b++) {
    if (maxLength === 0) {
      break;
    } else {
      result.push(secondArray[b]);
      maxLength -= 1;
    }
  }
  return result;
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
