let intervalId = null;
let bginterVal = null;

document.querySelector("#start1").addEventListener("click", function () {
  if (intervalId === null)
    intervalId = setInterval(function () {
      const date = new Date();
      console.log(date.toLocaleTimeString());
      document.querySelector("#time").innerHTML = date.toLocaleTimeString();
    }, 1000);
});

document.querySelector("#stop1").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  document.querySelector("#time").innerHTML = "Want to Start Live Time ?";
});

document.querySelector("#start2").addEventListener("click", function () {
  if (bginterVal === null) {
    bginterVal = setInterval(function () {
      let red = Math.floor(Math.random() * 255 + 1);
      let green = Math.floor(Math.random() * 255 + 1);
      let blue = Math.floor(Math.random() * 255 + 1);
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }, 1000);
  }
});

document.querySelector("#stop2").addEventListener("click", function () {
  clearInterval(bginterVal);
  bginterVal = null;
});
