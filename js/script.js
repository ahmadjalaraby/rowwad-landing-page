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
(function ($) {
  "use strict";
  /*==================================================================
      [ Daterangepicker ]*/
  try {
    $(".js-datepicker").daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      autoUpdateInput: false,
      locale: {
        format: "DD/MM/YYYY",
      },
    });

    var myCalendar = $(".js-datepicker");
    var isClick = 0;

    $(window).on("click", function () {
      isClick = 0;
    });

    $(myCalendar).on("apply.daterangepicker", function (ev, picker) {
      isClick = 0;
      $(this).val(picker.startDate.format("DD/MM/YYYY"));
    });

    $(".js-btn-calendar").on("click", function (e) {
      e.stopPropagation();

      if (isClick === 1) isClick = 0;
      else if (isClick === 0) isClick = 1;

      if (isClick === 1) {
        myCalendar.focus();
      }
    });

    $(myCalendar).on("click", function (e) {
      e.stopPropagation();
      isClick = 1;
    });

    $(".daterangepicker").on("click", function (e) {
      e.stopPropagation();
    });
  } catch (er) {
    console.log(er);
  }
  /*[ Select 2 Config ]
      ===========================================================*/

  try {
    var selectSimple = $(".js-select-simple");

    selectSimple.each(function () {
      var that = $(this);
      var selectBox = that.find("select");
      var selectDropdown = that.find(".select-dropdown");
      selectBox.select2({
        dropdownParent: selectDropdown,
      });
    });
  } catch (err) {
    console.log(err);
  }
})(jQuery);
// لعرض وإخفاء كلمة المرور
// const togglePassword = document.querySelector("#togglePassword");
// const password = document.querySelector("#id_password");

// togglePassword.addEventListener("click", function (e) {
//   // toggle the type attribute
//   const type =
//     password.getAttribute("type") === "password" ? "text" : "password";
//   password.setAttribute("type", type);
//   // toggle the eye slash icon
//   this.classList.toggle("far fa-eye");
// });
