"use strict";

const downArrow = document.getElementById("downArrow");

const aboutdiv = document.getElementById("about");
const workEducationdiv = document.getElementById("workEducation");
const projectsdiv = document.getElementById("projects");
const interestsdiv = document.getElementById("interests");

const aboutbtn = document.getElementById("aboutButton");
const workEducationbtn = document.getElementById("workEducationButton");
const projectsbtn = document.getElementById("projectsButton");
const interestsbtn = document.getElementById("interestsButton");

const chessBlitzRatingHighest = document.getElementById("chessBlitzRatingHighest");

const scrollToMain = (e) => {
  if (e.type == "click" || e.code == "Enter" || e.code == "NumpadEnter") {
    document.getElementById("main").scrollIntoView();
    document.activeElement.blur();
  }
}

const aboutButtonHandler = (e) => {
  if (e.type == "click" || e.code == "Enter" || e.code == "NumpadEnter") {
    aboutdiv.style.display = "block";
    workEducationdiv.style.display = "none";
    projectsdiv.style.display = "none";
    interestsdiv.style.display = "none";

    aboutbtn.classList.add("selectedButton");
    workEducationbtn.classList.remove("selectedButton");
    projectsbtn.classList.remove("selectedButton");
    interestsbtn.classList.remove("selectedButton");
  }
}

const wordEducationButtonHandler = (e) => {
  if (e.type == "click" || e.code == "Enter" || e.code == "NumpadEnter") {
    aboutdiv.style.display = "none";
    workEducationdiv.style.display = "block";
    projectsdiv.style.display = "none";
    interestsdiv.style.display = "none";

    aboutbtn.classList.remove("selectedButton");
    workEducationbtn.classList.add("selectedButton");
    projectsbtn.classList.remove("selectedButton");
    interestsbtn.classList.remove("selectedButton");
  }
}

const projectsButtonHandler = (e) => {
  if (e.type == "click" || e.code == "Enter" || e.code == "NumpadEnter") {
    aboutdiv.style.display = "none";
    workEducationdiv.style.display = "none";
    projectsdiv.style.display = "block";
    interestsdiv.style.display = "none";

    aboutbtn.classList.remove("selectedButton");
    workEducationbtn.classList.remove("selectedButton");
    projectsbtn.classList.add("selectedButton");
    interestsbtn.classList.remove("selectedButton");
  }
}

const interestsButtonHandler = (e) => {
  if (e.type == "click" || e.code == "Enter" || e.code == "NumpadEnter") {
    aboutdiv.style.display = "none";
    workEducationdiv.style.display = "none";
    projectsdiv.style.display = "none";
    interestsdiv.style.display = "block";

    aboutbtn.classList.remove("selectedButton");
    workEducationbtn.classList.remove("selectedButton");
    projectsbtn.classList.remove("selectedButton");
    interestsbtn.classList.add("selectedButton");
  }
}

fetch("https://api.chess.com/pub/player/icecoolr/stats")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Failed to get chess.com stats: " + response);
      chessBlitzRatingHighest.textContent = "about 1000";
    }
  })
  .then((data) => {
    chessBlitzRatingHighest.textContent = data.chess_blitz.best.rating;
  })
  .catch((error) => {
    console.log("Error with chess.com stats.");
    chessBlitzRatingHighest.textContent = "about 1000";
  });


downArrow.addEventListener("click", scrollToMain);
downArrow.addEventListener("keydown", scrollToMain);

aboutbtn.addEventListener("click", aboutButtonHandler);
aboutbtn.addEventListener("keydown", aboutButtonHandler);

workEducationbtn.addEventListener("click", wordEducationButtonHandler);
workEducationbtn.addEventListener("keydown", wordEducationButtonHandler);

projectsbtn.addEventListener("click", projectsButtonHandler);
projectsbtn.addEventListener("keydown", projectsButtonHandler);

interestsbtn.addEventListener("click", interestsButtonHandler);
interestsbtn.addEventListener("keydown", interestsButtonHandler);
