/// <reference types="../@types/jquery/" />;
const toggleMenu = (menuStatus) => {
  let isOpened = menuStatus;
  if (isOpened) {
    $("#hero > div").addClass("opened");
    $(".side-menu").css("transform", "translateX(0)");
  } else {
    $("#hero > div").removeClass("opened");
    $(".side-menu").css("transform", "translateX(-300px)");
  }
};

const zeroPrefix = (num) => (num < 10 ? `0${num}` : num);
const countDown = (targetDate) => {
  const now = new Date();
  const distance = targetDate.getTime() - now.getTime();
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#timerDays").html(zeroPrefix(days));
  $("#timerHours").html(zeroPrefix(hours));
  $("#timerMin").html(zeroPrefix(minutes));
  $("#timerSec").html(zeroPrefix(seconds));
};

$(".side-menu-btn").on("click", () => toggleMenu(true));
$(".close-btn").on("click", () => toggleMenu(false));
$(".singer-title").on("click", function () {
  $(this).next(".singer-details").slideToggle();
  $(this)
    .closest(".song-accordion")
    .siblings()
    .find(".singer-details")
    .slideUp();
});

setInterval(() => countDown(new Date("2024-09-30T23:59:59")), 1000);
$(".contact-form textarea").on("input", function () {
  const messageMaxLength = 100;
  let messageLength = $(this).val().length;
  $(".contact-form p").html(
    `<span class="text-danger">${messageMaxLength - messageLength} </span> ${
      messageLength <= 1 ? "Character" : "Characters"
    } Remaining`
  );
});
