export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const filteredValues = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      filteredValues.push(value.slice(startString.length));
    }
  });

  const resultString = filteredValues.join('-');

  return resultString;
}

// console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
// console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
