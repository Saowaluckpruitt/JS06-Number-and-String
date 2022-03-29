const checkWord = (msg) => {
  if (
    msg.toUpperCase() === "XXX" ||
    msg.toUpperCase() === "SEX" ||
    msg.toUpperCase() === "PORN"
  ) {
    return false;
  } else {
    return true;
  }
};
