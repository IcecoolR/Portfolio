"use strict";

const aboutButton = document.getElementById("aboutButton");
const workEducationButton = document.getElementById("workEducationButton");
const projectsButton = document.getElementById("projectsButton");
const interestsButton = document.getElementById("interestsButton");

const aboutButtonHandler = () => {
  const divAbout = document.getElementById("about");
  const divWorkEducation = document.getElementById("workEducation");
  const divProjects = document.getElementById("projects");
  const divInterests = document.getElementById("interests");
  divAbout.style.display = "block";
  divWorkEducation.style.display = "none";
  divProjects.style.display = "none";
  divInterests.style.display = "none";
}

const wordEducationButtonHandler = () => {
  const divAbout = document.getElementById("about");
  const divWorkEducation = document.getElementById("workEducation");
  const divProjects = document.getElementById("projects");
  const divInterests = document.getElementById("interests");
  divAbout.style.display = "none";
  divWorkEducation.style.display = "block";
  divProjects.style.display = "none";
  divInterests.style.display = "none";
}

const projectsButtonHandler = () => {
  const divAbout = document.getElementById("about");
  const divWorkEducation = document.getElementById("workEducation");
  const divProjects = document.getElementById("projects");
  const divInterests = document.getElementById("interests");
  divAbout.style.display = "none";
  divWorkEducation.style.display = "none";
  divProjects.style.display = "block";
  divInterests.style.display = "none";
}

const interestsButtonHandler = () => {
  const divAbout = document.getElementById("about");
  const divWorkEducation = document.getElementById("workEducation");
  const divProjects = document.getElementById("projects");
  const divInterests = document.getElementById("interests");
  divAbout.style.display = "none";
  divWorkEducation.style.display = "none";
  divProjects.style.display = "none";
  divInterests.style.display = "block";
}
