let fromLeft = [];
let fromRight = [];
fromRight[heights.length - 1] = heights.length;
fromLeft[0] = -1;
for (let i = 1; i < heights.length; i++) {
  let p = i - 1;
  while (p >= 0 && heights[p] >= heights[i]) {
    p = fromLeft[p];
  }
  fromLeft[i] = p;
}
for (let i = heights.length - 2; i >= 0; i--) {
  let p = i + 1;
  while (p < heights.length && heights[p] >= heights[i]) {
    p = fromRight[p];
  }
  fromRight[i] = p;
}

let max = 0;
for (let i = 0; i < heights.length; i++) {
  let curr = heights[i] * (fromRight[i] - fromLeft[i] - 1);
  max = Math.max(max, curr);
}

module.exports = {
  solve: function (A) {
    const map = {};
    let top = 0;
    let result = "";

    for (let i = 0; i < A.length; i++) {
      const curr = A.charAt(i);

      if (map[curr] === undefined) {
        map[curr] = 1;
      } else {
        map[curr]++;
      }

      let fnr = A.charAt(top);
      while (map[fnr] > 1) {
        top++;
        fnr = A.charAt(top);
      }
      if (map[fnr] === 1) {
        result += fnr;
      } else {
        result += "#";
      }
    }

    return result;
  },
};
