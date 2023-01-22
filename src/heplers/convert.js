export const convert = (symbol) => {
  // debugger
  const div = document.createElement('div');
  div.innerHTML = symbol;
  const decodedResult = div.textContent;
  return decodedResult
}