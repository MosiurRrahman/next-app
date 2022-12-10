import React, { useEffect, useState } from "react";
function Preloader() {
  useEffect(() => {
    const interval = setInterval(() => {
      var c = parseInt(document.querySelector(".counter").textContent, 0);
        document.querySelector('.counter').textContent = ++c;
        if ( c >= 99 ) {
          document.querySelector('.counter').classList.add("hide");
          document.querySelector('.preloader').classList.add("active");
          clearInterval(interval);
        }
    });
  });
  return (
    <div className="preloader">
      <div className="counter">0</div>
    </div>
  );
}
export default Preloader;