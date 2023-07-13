export const Giveaway = ({
  tempYear,
  tempMonth,
  tempDay,
  hours,
  minutes,
  seconds,
}) => {
  // date , day and month
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const futureDate = new Date(
    tempYear,
    tempMonth,
    tempDay,
    hours,
    minutes,
    seconds
  );
  const displayFutureDate = futureDate.toLocaleDateString("en-us", options);
  //future time
  const displayFutureTime = futureDate.toLocaleTimeString("en-us");
  // name export
  return (
    <h4 className="giveaway">
      {`Discount ends on ${displayFutureDate} ${displayFutureTime}`}
    </h4>
  );
};
