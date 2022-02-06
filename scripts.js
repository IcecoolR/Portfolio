"use strict";

const aboutButton = document.getElementById("aboutButton");
const workEducationButton = document.getElementById("workEducationButton");
const projectsButton = document.getElementById("projectsButton");
const interestsButton = document.getElementById("interestsButton");

const aboutButtonHandler = () => {
  document.getElementById("about").style.display = "block";
  document.getElementById("workEducation").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("interests").style.display = "none";

  document.getElementById("aboutButton").classList.add("selectedButton");
  document.getElementById("workEducationButton").classList.remove("selectedButton");
  document.getElementById("projectsButton").classList.remove("selectedButton");
  document.getElementById("interestsButton").classList.remove("selectedButton");
}

const wordEducationButtonHandler = () => {
  document.getElementById("about").style.display = "none";
  document.getElementById("workEducation").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("interests").style.display = "none";

  document.getElementById("aboutButton").classList.remove("selectedButton");
  document.getElementById("workEducationButton").classList.add("selectedButton");
  document.getElementById("projectsButton").classList.remove("selectedButton");
  document.getElementById("interestsButton").classList.remove("selectedButton");
}

const projectsButtonHandler = () => {
  document.getElementById("about").style.display = "none";
  document.getElementById("workEducation").style.display = "none";
  document.getElementById("projects").style.display = "block";
  document.getElementById("interests").style.display = "none";

  document.getElementById("aboutButton").classList.remove("selectedButton");
  document.getElementById("workEducationButton").classList.remove("selectedButton");
  document.getElementById("projectsButton").classList.add("selectedButton");
  document.getElementById("interestsButton").classList.remove("selectedButton");
}

const interestsButtonHandler = () => {
  document.getElementById("about").style.display = "none";
  document.getElementById("workEducation").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("interests").style.display = "block";

  document.getElementById("aboutButton").classList.remove("selectedButton");
  document.getElementById("workEducationButton").classList.remove("selectedButton");
  document.getElementById("projectsButton").classList.remove("selectedButton");
  document.getElementById("interestsButton").classList.add("selectedButton");
}
