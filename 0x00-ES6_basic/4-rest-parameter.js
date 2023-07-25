export default function returnHowManyArguments(...args) {
  let sum = 0;
  for (let arg of args) sum += 1; // eslint-disable-line
  return sum;
}
