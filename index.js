function sumItems(array) {

  let sum = 0;
  for (item of array) {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
     sum += item;
    }
  }
  return sum;
}

module.exports = sumItems;