import React, { useEffect } from "react";

function Preloader() {
  useEffect(() => {
    numCounter("counter", 95, 100);
  });
  return (
    <div className="preloader" id="preloader">
      <div className="counter" id="counter">0</div>
    </div>
  );
}

export default Preloader;
function numCounter(tagId, maxCount, speed) {
  var initialNumber = 0;
  function counter() {
    document.getElementById(tagId).innerHTML = initialNumber;
    ++initialNumber;
  }
  var counterDelay = setInterval(counter, speed);
  function totalTime() {
    clearInterval(counterDelay);
    document.getElementById("preloader").classList.add("active");
  }
  var totalPeriod = speed * maxCount;
  setTimeout(totalTime, totalPeriod);
}
