function npArgwhere(input) {
    const shape = dim(input);
    const result = [];
    
    for (let i = 0; i < shape[0]; i++) {
        for (let j = 0; j < shape[1]; j++) {
            for (let k = 0; k < shape[2]; k++) {
                if (input[i][j][k] !== 0) {
                    result.push([i, j, k]);
                }
            }
        }
    }
    
    return result;
  }
  
function dim(input) {
    if (input instanceof Array) {
        return [input.length].concat(dim(input[0]));
    } else {
        return [];
    }
}
  
const input = 
[
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
];

console.log(npArgwhere(input));