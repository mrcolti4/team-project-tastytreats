/** Відкриття та закриття модального вікна. Очікую на назву класу. */


$(document).ready(function () {
  $(".modal-close-btn").each(function () {
    $(this).click(function () {
      $(".modal").css("display", "none");
    });
  });
  $(".btn").each(function () {
    $(this).click(function () {
      $(".modal").css("display", "block");
    });
  });
});