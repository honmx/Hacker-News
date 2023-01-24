export const convert = (symbol) => {
  const div = document.createElement('div');
  div.innerHTML = symbol;
  const decodedResult = div.textContent;
  return decodedResult
}