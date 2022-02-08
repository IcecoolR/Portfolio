"use strict";

const aboutdiv = document.getElementById("about");
const workEducationdiv = document.getElementById("workEducation");
const projectsdiv = document.getElementById("projects");
const interestsdiv = document.getElementById("interests");

const aboutbtn = document.getElementById("aboutButton");
const workEducationbtn = document.getElementById("workEducationButton");
const projectsbtn = document.getElementById("projectsButton");
const interestsbtn = document.getElementById("interestsButton");

const scrollToMain = () => {
  document.getElementById("main").scrollIntoView();
}

const aboutButtonHandler = () => {
  aboutdiv.style.display = "block";
  workEducationdiv.style.display = "none";
  projectsdiv.style.display = "none";
  interestsdiv.style.display = "none";

  aboutbtn.classList.add("selectedButton");
  workEducationbtn.classList.remove("selectedButton");
  projectsbtn.classList.remove("selectedButton");
  interestsbtn.classList.remove("selectedButton");
}

const wordEducationButtonHandler = () => {
  aboutdiv.style.display = "none";
  workEducationdiv.style.display = "block";
  projectsdiv.style.display = "none";
  interestsdiv.style.display = "none";

  aboutbtn.classList.remove("selectedButton");
  workEducationbtn.classList.add("selectedButton");
  projectsbtn.classList.remove("selectedButton");
  interestsbtn.classList.remove("selectedButton");
}

const projectsButtonHandler = () => {
  aboutdiv.style.display = "none";
  workEducationdiv.style.display = "none";
  projectsdiv.style.display = "block";
  interestsdiv.style.display = "none";

  aboutbtn.classList.remove("selectedButton");
  workEducationbtn.classList.remove("selectedButton");
  projectsbtn.classList.add("selectedButton");
  interestsbtn.classList.remove("selectedButton");
}

const interestsButtonHandler = () => {
  aboutdiv.style.display = "none";
  workEducationdiv.style.display = "none";
  projectsdiv.style.display = "none";
  interestsdiv.style.display = "block";

  aboutbtn.classList.remove("selectedButton");
  workEducationbtn.classList.remove("selectedButton");
  projectsbtn.classList.remove("selectedButton");
  interestsbtn.classList.add("selectedButton");
}
