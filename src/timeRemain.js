export const getRemaningTime = (futureDate) => {
  const currentDateinMs = new Date().getTime();
  // console.log(currentDateinMs);
  const futureDateinMs = futureDate.getTime();
  // console.log(futureDateinMs);
  const timeDiff = futureDateinMs - currentDateinMs;
  // console.log(timeDiff);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  // no:of remaining days
  let days = timeDiff / oneDay;
  // console.log(days);
  days = Math.floor(days) < 10 ? `0${Math.floor(days)}` : Math.floor(days);
  // console.log(days);
  // no:of remaining hours
  let hours =
    Math.floor((timeDiff % oneDay) / oneHour) < 10
      ? `0${Math.floor((timeDiff % oneDay) / oneHour)}`
      : Math.floor((timeDiff % oneDay) / oneHour);
  // console.log(hours);
  let minutes =
    Math.floor((timeDiff % oneHour) / oneMinute) < 10
      ? `0${Math.floor((timeDiff % oneHour) / oneMinute)}`
      : Math.floor((timeDiff % oneHour) / oneMinute);

  // console.log(minutes);
  let seconds =
    Math.floor((timeDiff % oneMinute) / 1000) < 10
      ? `0${Math.floor((timeDiff % oneMinute) / 1000)}`
      : Math.floor((timeDiff % oneMinute) / 1000);
  // console.log(seconds);

  const values = [
    { dValue: days, dClass: "days", spanValue: "days", timeDiff },
    { dValue: hours, dClass: "hours", spanValue: "Hours" },
    { dValue: minutes, dClass: "minutes", spanValue: "Minutes" },
    { dValue: seconds, dClass: "seconds", spanValue: "Seconds" },
  ];
  return values;
};
