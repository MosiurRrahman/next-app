import React, { useEffect } from "react";

function Preloader() {
  useEffect(() => {
    counter_num();
  });
  return (
    <div className="preloader">
        <div className="counter">0</div>
    </div>
  );
}

export default Preloader;

// function counter_num() {
//   var count = setInterval(function () {
//     var c = parseInt(document.querySelector(".counter").textContent, 0);
//     console.log(c);
//     document.querySelector('.counter').textContent = ++c;
//     if (c === 100) {
//       console.log(c);
//       clearInterval(count);
//       console.log(count);
//       document.querySelector(".counter").classList.add("hide")
//       document.querySelector(".preloader").classList.add("active");
//     }
//   });
// }
