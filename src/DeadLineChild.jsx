export const DeadLineChild = ({ dClass, dValue, spanValue }) => {
  return (
    <div className="deadline-format">
      <div>
        <h4 className={dClass}>{dValue}</h4>
        <span>{spanValue}</span>
      </div>
    </div>
  );
};
