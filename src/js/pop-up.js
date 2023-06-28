
// fetchRecipeById('6462a8f74c3d0ddd28898040');
let refs = {
  closeVideo: document.querySelector('.tiezer-close-btn'),
  tiezer: document.querySelector('.tiezer'),
  trailerBox: document.querySelector('.trailer-box'),

};

const modalRecipe = document.querySelector('.js-modal-recipe');
// /** Відкриття та закриття модального вікна */
$(document).ready(function () {
  $(".modal-close-btn").each(function () {

    $(this).click(function () {
      $(".modal").css("display", "none");
      $(".backdrop").css("visibility", "hidden");
    });
  });
  $(".cards__btn").each(function () {
    $(this).click(function () {
      $(".modal").css("display", "block");
      $(".backdrop").css("visibility", "visible");
    });
  });
});


function getRefs() {
  return {
    closeVideo: document.querySelector('.tiezer-close-btn'),
    tiezer: document.querySelector('.tiezer'),
    trailerBox: document.querySelector('.trailer-box'),

  }
}
async function fetchRecipeById(id) {
  const resp = await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${id}`);
  const data = await resp.json();
  console.log(data);

  renderModalRecipe(data);
  refs = getRefs();


}

function renderModalRecipe(data) {
  const markUp = 1;

  modalRecipe.insertAdjacentHTML('beforeend', markUp);
}
// refs = getRefs();



const stopVideos = () => {
  refs.trailerBox.classList.remove('active');

  document.querySelectorAll('iframe').forEach(video => {
    video.src = video.src;
  });
  document.querySelectorAll('video').forEach(video => {
    video.pause();
  });

};

refs.closeVideo.addEventListener('click', stopVideos);




