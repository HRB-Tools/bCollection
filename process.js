/**** Complementary to readInput.js ****/
function proc(op, pos) {
  if (op == 2 || op == 1 || op === 0) {
    return {
      position: pos,
      operation: op
    };
  } else return "-";
}
