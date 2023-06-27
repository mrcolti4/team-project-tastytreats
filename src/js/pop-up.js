
// /** Відкриття та закриття модального вікна з конкретною назвою p.*/

 $(document).ready(function() {
    $(".btn-popup").click(function() {
      // Отримуємо текст з елементу, на який натиснули
      var title = $(this).text();
      $(".modal").css("display", "block");
      $(".backdrop").css("visibility", "visible");
      $("#modal-title").text(title);
    });
    $(".modal-close-btn").click(function() {
      $(".modal").css("display", "none");
      $(".backdrop").css("visibility", "hidden");
    });
  });

// $(document).ready(function () {
//   $(".modal-close-btn").each(function () {

//     $(this).click(function () {
//       $(".modal").css("display", "none");
//       $(".backdrop").css("visibility", "hidden");
//     });
//   });
//   $(".btn-popup").each(function () {
//     $(this).click(function () {
//       $(".modal").css("display", "block");
//       $(".backdrop").css("visibility", "visible");
//     });
//   });
// });


/** CКРОЛ */

const recipeElements = document.getElementsByClassName('recipes-container');

Array.from(recipeElements).forEach((element) => {
  const elementHeightCook = element.scrollHeight;

  if (elementHeightCook > element.offsetHeight) {
    element.style.overflowY = 'scroll';
    element.style.scrollbarWidth = 'thin'; 
    element.style.msOverflowStyle = 'scrollbar'; 
   
  }
});

const recipeCook = document.getElementsByClassName('rcooking-recipes');

Array.from(recipeCook).forEach((element) => {
  const elementHeightRec = element.scrollHeight;

  if (elementHeightRec > element.offsetHeight) {
    element.style.overflowY = 'scroll';
    element.style.scrollbarWidth = 'thin'; 
    element.style.msOverflowStyle = 'scrollbar'; 
    
  }
});


