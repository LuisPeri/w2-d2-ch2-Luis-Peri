let strictEquals = (valueA, valueB) => {
  if (Object.is(valueA, valueB)) {
    return true;
  } else {
    return false;
  }
};

strictEquals();

module.exports = strictEquals;
