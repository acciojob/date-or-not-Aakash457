var isDate = function (input) {
  // If input is a Date object
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  // If input is a number (timestamp)
  if (typeof input === "number") {
    return !isNaN(new Date(input).getTime());
  }

  // If input is a string
  if (typeof input === "string") {
    return !isNaN(Date.parse(input));
  }

  // Other types are not valid dates
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));