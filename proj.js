function play() {
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play().catch((error) => {
      console.error("Audio play failed: ", error);
  });
}

setInterval(() => {
  let d = new Date();
  document.getElementById("time").innerHTML = d.toDateString() + " " + d.toTimeString();
}, 1000);

const setAlarm = (seconds) => {
  let d = new Date().getTime();
  setTimeout(() => {
      play();
      document.getElementById("alarm").innerHTML = "Alarm ringing!";
  }, seconds * 1000);

  const intervalId = setInterval(() => {
      let secondsLeft = Math.floor((d + seconds * 1000 - new Date().getTime()) / 1000);
      if (secondsLeft > 0) {
          document.getElementById("alarm").innerHTML = "Alarm ringing in " + secondsLeft + " seconds";
      } else {
          clearInterval(intervalId); // Clear the interval when the alarm goes off
      }
  }, 1000);
}

// Set alarm on button click
document.getElementById("setAlarmButton").addEventListener("click", () => {
  let s = document.getElementById("alarmTime").value;
  if (!isNaN(s) && s > 0) {
    setAlarm(parseInt(s));
  } else {
    alert("Please enter a valid number of seconds.");
  }
});
