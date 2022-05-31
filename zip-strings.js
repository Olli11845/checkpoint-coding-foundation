function zipStrings(strA, strB) {
  let result;

  result = strA.charAt(0);
  result = result + strB.charAt(0);

  let lengthOfLongest = 0;

  if (strA.length < strB.length) {
    lengthOfLongest = strB.length;
  } else {
    lengthOfLongest = strA.length;
  }

  for (let i = 1; i < lengthOfLongest; i++) {
    result = result + strA.charAt(i);
    result = result + strB.charAt(i);
  }

  console.log(result);
  console.log("Ende");

  return result;
}
