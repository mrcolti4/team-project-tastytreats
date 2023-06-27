
/** Відкриття та закриття модального вікна.*/
$(document).ready(function () {
  $(".modal-close-btn").each(function () {
    $(this).click(function () {
      $(".modal").css("display", "none");
       $(".backdrop").css("visibility", "hidden");
    });
  });
  $(".btn").each(function () {
    $(this).click(function () {
      $(".modal").css("display", "block");
      $(".backdrop").css("visibility", "visible");
    });
  });
});


/** CКРОЛ */

const recipeElements = document.getElementsByClassName('recipes-container');

Array.from(recipeElements).forEach((element) => {
  const elementHeight = element.scrollHeight;

  if (elementHeight > element.offsetHeight) {
    element.style.overflowY = 'scroll';
    element.style.scrollbarWidth = 'thin'; 
    element.style.msOverflowStyle = 'scrollbar'; 
  }
});

const recipeCook = document.getElementsByClassName('rcooking-recipes');

Array.from(recipeCook).forEach((element) => {
  const elementHeight = element.scrollHeight;

  if (elementHeight > element.offsetHeight) {
    element.style.overflowY = 'scroll';
    element.style.scrollbarWidth = 'thin'; 
    element.style.msOverflowStyle = 'scrollbar'; 
  }
});