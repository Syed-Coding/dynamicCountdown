import { useEffect } from "react";
import { DeadLineChild } from "./DeadLineChild";
import { getRemaningTime } from "./timeRemain";
import { useState } from "react";
import Expired from "./Expired";
import DiscountedPrice from "./DiscountedPrice";
import OriginalPrice from "./OriginalPrice";

export const Deadlines = ({
  tempYear,
  tempMonth,
  tempDay,
  hours,
  minutes,
  seconds,
  discountedPrice,
  discountedsubPrice,
  originalPrice,
  originalsubPrice,
  buyLink,
}) => {
  const [updatedVal, setUpdatedVal] = useState(
    getRemaningTime(
      new Date(tempYear, tempMonth, tempDay, hours, minutes, seconds)
    )
  );
  const [newcountdown, setNewCountDown] = useState("");
  useEffect(() => {
    // console.log("inisde useeffect");
    let countdown = setInterval(() => {
      // console.log("INSIDE SETINTERVAL");
      setUpdatedVal(
        getRemaningTime(
          new Date(tempYear, tempMonth, tempDay, hours, minutes, seconds)
        )
      ); // function returns values of getRemaningTime()
    }, 1000);
    // console.log("COUNTDOWN INISDE USEEFFECT", countdown);
    setNewCountDown(countdown); // initially set the countdown , useeFFECT WORKS ONLy ONCE
    // console.log("COUNTDOWN INISDE USEEFFECT after setnewcountdown", countdown);

    return () => {
      // console.log("inisde return");
      clearInterval(countdown); // used for clear initial time when comes to useeffect
    };
  }, []);
  // console.log("rendering");
  // console.log("COUNTODOWN STATE", newcountdown);
  const [val] = updatedVal; //destructred array
  const { timeDiff } = val; // destructured obbject
  // console.log("TIMEDIFFVALUES", timeDiff);
  if (timeDiff < 0) {
    // console.log("inside if ELSE");
    clearInterval(newcountdown); //( it stops the setinterval after the interval comes from useEffect)
  }
  return (
    <>
      <div className="deadline">
        {timeDiff > 0 &&
          updatedVal.map((date, i) => {
            return <DeadLineChild key={i} {...date}></DeadLineChild>;
          })}
        {timeDiff < 0 && <Expired></Expired>}
      </div>
      {timeDiff > 0 && (
        <DiscountedPrice
          discountedPrice={discountedPrice}
          discountedsubPrice={discountedsubPrice}
          originalPrice={originalPrice}
          originalsubPrice={originalsubPrice}
          buyLink={buyLink}
        ></DiscountedPrice>
      )}
      {timeDiff < 0 && (
        <OriginalPrice
          originalPrice={originalPrice}
          originalsubPrice={originalsubPrice}
          buyLink={buyLink}
        ></OriginalPrice>
      )}
    </>
  );
};

// import { getRemaningTime } from "./timeRemain";
// const values = getRemaningTime();
// console.log(values);
// const Deadlines = () => {
//   return (
//     <div className="deadline">
//       {values.map(({ dValue, dClass, spanValue }, i) => {
//         return (
//           <div className="deadline-format" key={i}>
//             <div>
//               <h4 className={dClass}>{dValue}</h4>
//               <span>{spanValue}</span>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Deadlines;
