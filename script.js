// Magic 8 Ball

// Variables

let answer1 = "Without a doubt";
let answer2 = "As I see it, yes";
let answer3 = "Focus and ask again";
let answer4 = "Dont count on it";
let answer5 = "Outlook not so good!";
let answer = document.getElementById("answer");

// Event listener

document.getElementById("8-ball").addEventListener("click", shakeBall);

// Function

function shakeBall() {
  // Generate a number
  let randNum = Math.random() * 100 + 1;

  // Get question
  let question = document.getElementById("question").value;
  question = question.toLowerCase();
  let questLength = question.length;

  if (questLength == 0) {
    answer.innerHTML = "Please enter a question";
    answer.style.color = "grey";
  } else if (
    question === "am i gonna die tomorrow?" ||
    question === "am i gonna die today?"
  ) {
    answer.innerHTML = "Of course not!";
    answer.style.color = "skyblue";
  } else if (question === "how do i code?") {
    answer.innerHTML = "HelloWorld!('alert')";
    answer.style.color = "orange";
  } else if (randNum <= 20) {
    answer.innerHTML = answer1;
    answer.style.color = "green";
  } else if (randNum <= 40) {
    answer.innerHTML = answer2;
    answer.style.color = "green";
  } else if (randNum <= 60) {
    answer.innerHTML = answer3;
    answer.style.color = "goldenrod";
  } else if (randNum <= 80) {
    answer.innerHTML = answer4;
    answer.style.color = "maroon";
  } else {
    answer.innerHTML = answer5;
    answer.style.color = "maroon";
  }
}
