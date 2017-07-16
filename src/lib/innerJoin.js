// Inner joins two tables based on their if key vals are the same for given key

export default function innerJoin(t1, t2, col) {
  let t3 = [];
  let colVals = t2.map(r => r[col]);
  t1.map(r => {
    let t2Index = colVals.indexOf(r[col]);
    if (t2Index !== -1) {
      let newVal = {};
      newVal[col] = r[col];
      t3.push(newVal);
    }
  });
  return t3;
}
