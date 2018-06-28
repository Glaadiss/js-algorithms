function min(...arr) {
  return arr.sort()[0];
}

function minEdit(A, B, currA = A.length - 1, currB = B.length - 1) {
  const ev = A[currA] === B[currB] ? 0 : 1;

  if (currA === 0 && currB === 0) return ev;
  if (currA === 0) return minEdit(A, B, currA, currB - 1) + ev;
  if (currB === 0) return minEdit(A, B, currA - 1, currB) + ev;

  return (
    min(
      minEdit(A, B, currA, currB - 1),
      minEdit(A, B, currA - 1, currB),
      minEdit(A, B, currA - 1, currB - 1)
    ) + ev
  );
}

module.exports = minEdit;
