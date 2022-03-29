const extractCurrencyValue = (string, rate) => {
  return "THB" + string * rate;
};
console.log(extractCurrencyValue("120", 30));
