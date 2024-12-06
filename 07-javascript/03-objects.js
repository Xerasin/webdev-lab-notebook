let result = {};

const insertItem = (key, value) => {
  if (!key) {
    return;
  }
  result[key] = value;
  return key;
};

const deleteItem = (key) => {
  if (!key) {
    return;
  }

  return delete result[key];
};

const lookupItem = (key) => {
  if (!key) {
    return;
  }
  if (key in result) {
    return result[key];
  }
  return "Item does not exist";
};

const printItems = () => {
  return Object.keys(result).join(", ");
};

insertItem("hello", "world");
insertItem("lorem", "ipsum");
insertItem("sit", "amet");
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'ipsum'

deleteItem("lorem");
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'Item does not exist'
