export const displayTime = centiseconds => {
  let minutes = 0; // .. initial set minutes = 0
  let seconds = 0; // .. initial set seconds = 0

  // .. 1 second has 100 centiseconds
  if (centiseconds < 0) {
    centiseconds = 0;
  }

  if (centiseconds < 100) {
    return `00:00:${padToTwo(centiseconds)}`;
  }

  // .. calculate remainingCentiseconds = // 115 % 100 = 15
  let remainCentiseconds = centiseconds % 100;

  // .. calculate seconds = (115 - 15)/100 = 1
  seconds = (centiseconds - remainCentiseconds) / 100;

  // .. seconds is 1, which is less than 60. So the output will be
  if (seconds < 60) {
    return `00:${padToTwo(seconds)}:${padToTwo(remainCentiseconds)}`;
  }
  // .. calculate remainSeconds = 85 % 60 = 25
  let remainSeconds = seconds % 60;

  // .. calculate minutes = ((85 - 25) / 60) = 1
  minutes = (seconds - remainSeconds) / 60;

  return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}:${padToTwo(
    remainCentiseconds,
  )}`;
};

// .. To display digit into Counter.For example, 9 is returned as 09, and 19 is returned as 19.
const padToTwo = number => (number <= 9 ? `0${number}` : number);
