/*هذا الجزء المسؤول عن تغير النافبار عند النزول في الصفحة*/
const nav = document.querySelector(".navbar");
const toggler = document.querySelector("#toggler");
const navCollapse = document.querySelector("#navbarNav");

toggler.addEventListener("click", changeBackgroundColor);

window.addEventListener("scroll", fixNav);

navCollapse.classList.remove("white-nav");

function changeBackgroundColor() {
  navCollapse.classList.toggle("white-nav");
}

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 110) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "عرض المزيد";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "عرض اقل";
    moreText.style.display = "inline";
  }
}
