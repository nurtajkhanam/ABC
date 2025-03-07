import React from "react";

const CurrentTime = () => {
  let time = new Date();
  return (
    <div className="lead">The Current Time is : {time.toTimeString()} </div>
  );
};

export default CurrentTime;
