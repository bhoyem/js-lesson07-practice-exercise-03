var moodSelection = document.querySelector("#moods");
// console.log(moodselection.outerHTML);
var bodyColor = document.querySelector("body");
// console.log(bodyColor.outerHTML);

moodSelection.addEventListener("change", function (e) {
  var mood = e.target.value;
  if (mood == "happy") {
    bodyColor.classList.add("happy");
    bodyColor.classList.remove("sad");
    bodyColor.classList.remove("passionate");
  } else if (mood == "sad") {
    bodyColor.classList.remove("happy");
    bodyColor.classList.add("sad");
    bodyColor.classList.remove("passionate");
  } else if (mood == "passionate") {
    bodyColor.classList.remove("happy");
    bodyColor.classList.remove("sad");
    bodyColor.classList.add("passionate");
  }
  // console.log(mood);
});
