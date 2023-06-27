
// /** Відкриття та закриття модального вікна */
// $(document).ready(function () {
//   $(".modal-close-btn").each(function () {

//     $(this).click(function () {
//       $(".modal").css("display", "none");
//       $(".backdrop").css("visibility", "hidden");
//     });
//   });
//   $(".btn-primary").each(function () {
//     $(this).click(function () {
//       $(".modal").css("display", "block");
//       $(".backdrop").css("visibility", "visible");
//     });
//   });
// });

/**2 ф-я */
// var modalRecipte = document.querySelector('.modal-order');
// var openBtnRecipte = document.querySelector('.cards__btn');
// var closeBtnRecipte = document.querySelector('.modal-close-btn');
// function openModal() {
//   modal.style.display = 'block';
// }
// function closeModal() {
//   modal.style.display = 'none';
// }
// openBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);


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

const recipeCook = document.getElementsByClassName('cooking-recipes');

Array.from(recipeCook).forEach((element) => {
  const elementHeightRec = element.scrollHeight;

  if (elementHeightRec > element.offsetHeight) {
    element.style.overflowY = 'scroll';
    element.style.scrollbarWidth = 'thin'; 
    element.style.msOverflowStyle = 'scrollbar'; 
    
  }
});
