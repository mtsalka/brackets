module.exports = function check(str, bracketsConfig) {
  const conform = new Map;
  const stack = [];
  const brackets = str.split('');
  bracketsConfig.forEach(brackets => {
    conform.set(`${brackets[1]}`, `${brackets[0]}`);
  });
  brackets.forEach(bracket => {
      if (stack.length > 0 && conform.get(bracket) === stack[stack.length - 1]) {
        stack.pop();
      }else{
        stack.push(bracket);
      }
  });
  return stack.length === 0;
}