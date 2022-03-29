const ucFirst = (str) => {
  let sl = str.slice(0, 1);
  let slt = sl.toUpperCase();
  let sl2 = str.slice(1);
  return slt + sl2;
};
console.log(ucFirst("hello"));
