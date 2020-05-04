'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 1, true, 'hello'];
const tb = {};

const countTypesInArray = () => {
  for (const item of arr) {
    const type = typeof item;
    const count = tb[type] || 0;
    tb[type] = count + 1;
  }
  console.log(tb);
};
countTypesInArray();
module.exports = { countTypesInArray };
