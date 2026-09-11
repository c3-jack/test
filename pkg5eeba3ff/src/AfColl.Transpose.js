/**
 * Transposes `matrix`, a rectangular array of row arrays, swapping rows and columns. Returns a
 * new array of arrays; neither `matrix` nor its rows are mutated.
 */
function transpose(matrix) {
  var rows = matrix || [];

  if (rows.length === 0) {
    return [];
  }

  var numCols = rows[0].length;
  var result = [];

  for (var col = 0; col < numCols; col++) {
    var newRow = [];
    for (var row = 0; row < rows.length; row++) {
      newRow.push(rows[row][col]);
    }
    result.push(newRow);
  }

  return result;
}
