matrix = [[1, 0, 0, 2], 
          [0, 5, 0, 1], 
          [0, 0, 3, 5]]
rowsToDelete = [1]
columnsToDelete = [0, 2]

function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  const subMatrix = [];
  const rowSet = new Set(rowsToDelete);
  const colSet = new Set(columnsToDelete);

  // Delete rows
  for (let i = 0; i < matrix.length; i += 1) {
    let row = [];
    for (let j = 0; j < matrix[0].length; j += 1) {
      if (!rowSet.has(i) && !colSet.has(j)) row.push(matrix[i][j]);
    }
    if (row.length) subMatrix.push(row);
  }


  return subMatrix;
}


constructSubmatrix(matrix, rowsToDelete, columnsToDelete);