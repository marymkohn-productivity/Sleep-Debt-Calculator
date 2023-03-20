// This project calculates if you’re getting enough sleep each week using a sleep debt calculator.

const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 6;
      break;
    case "tuesday":
      return 5;
      break;
    case "wednesday":
      return 7;
      break;
    case "thursday":
      return 4;
      break;
    case "friday":
      return 6;
      break;
    case "saturday":
      return 10;
      break;
    case "sunday":
      return 10;
      break;
    default:
      console.log("invalid item");
      break;
  }
};
// total hours slept calculated using the getSleepHours function
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

// ideal sleep hours
const getIdealSleepHours = () => {
  idealHours = 8;
  return idealHours * 7;
};
// function calculates extra/missing sleep
const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  if (actualSleepHours > idealSleepHours) {
    console.log(
      actualSleepHours -
        idealSleepHours +
        "hours of extra sleep!" +
        "You've got enough beauty sleep!"
    );
  } else if (actualSleepHours === idealSleepHours) {
    console.log(
      actualSleepHours -
        idealSleepHours +
        "hours of extra sleep! I guess a few more hours wouldn't hurt!"
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      actualSleepHours -
        idealSleepHours +
        "hours of missing sleep!" +
        " uhoh! time to sleep!!"
    );
  } else {
    console.log("invalid input?");
  }
};

console.log("I get " + getActualSleepHours() + " hours of sleep a week.");
console.log("I desire " + getIdealSleepHours() + " hours of sleep a week.");
console.log(calculateSleepDebt());
