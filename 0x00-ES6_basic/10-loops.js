export default function appendToEachArrayValue(array, appendString) {
  const arrLast = [];
  for (const idx of array) {
    arrLast.push(`${appendString}${idx}`);
  }

  return arrLast;
}
