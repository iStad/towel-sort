module.exports = function towelSort (matrix = []) {
  let array = [];
  for (i = 0; i < matrix.length; i++) {
    array = array.concat(matrix[i].sort(function  (a, b) {
      if (i%2) return b-a;
      return a-b;
    }));
  };
  return array;
}