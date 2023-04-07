const phylosophyBtn1 = document.querySelector(".phylosophy-btn1");
const phylosophyText1 = document.querySelector(".phylosophy-content1");
const phylosophySpan1 = document.querySelector(".phylosophy-icon1");
const phylosophyicon1 = document.querySelector(".phylosophy-icon-before1");

phylosophyBtn1.addEventListener("click", function () {
  phylosophyText1.classList.toggle("display-none");
  phylosophyicon1.classList.toggle("phylosophy-icon-before-clicked");
  phylosophySpan1.classList.toggle("black-bg");
});
const phylosophyBtn2 = document.querySelector(".phylosophy-btn2");
const phylosophyText2 = document.querySelector(".phylosophy-content2");
const phylosophySpan2 = document.querySelector(".phylosophy-icon2");
const phylosophyicon2 = document.querySelector(".phylosophy-icon-before2");

phylosophyBtn2.addEventListener("click", function () {
  phylosophyText2.classList.toggle("display-none");
  phylosophyicon2.classList.toggle("phylosophy-icon-before-clicked");
  phylosophySpan2.classList.toggle("black-bg");
});

const phylosophyBtn3 = document.querySelector(".phylosophy-btn3");
const phylosophyText3 = document.querySelector(".phylosophy-content3");
const phylosophySpan3 = document.querySelector(".phylosophy-icon3");
const phylosophyicon3 = document.querySelector(".phylosophy-icon-before3");

phylosophyBtn3.addEventListener("click", function () {
  phylosophyText3.classList.toggle("display-none");
  phylosophyicon3.classList.toggle("phylosophy-icon-before-clicked");
  phylosophySpan3.classList.toggle("black-bg");
});
