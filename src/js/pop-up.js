
fetchRecipeById('6462a8f74c3d0ddd28897feb');
let refs = {
  closeVideo: document.querySelector('.tiezer-close-btn'),
  tiezer: document.querySelector('.tiezer'),
  trailerBox: document.querySelector('.trailer-box'),
  btnOpenYouTube: document.querySelector('.js-btn-openYouTube'),
  preview: document.querySelector('.recipes'),
  video: document.querySelector('iframe'),
  title: document.querySelector('.js-title'),
  time: document.querySelector('.js-minute'),
};
let data1;



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

  // renderModalRecipe(data);
  // refs = getRefs();
  data1 = data;
  renderIMG(data);
  renderVIDEO(data)
  renderTitle(data);

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


// YouTUBE module
refs.btnOpenYouTube.addEventListener('click', openPlayer);

function openPlayer() {
  refs.trailerBox.classList.add('active');
}

function renderIMG(data) {
  refs.preview.src = data.preview;
}
function renderVIDEO(data) {

  const markUp = `
   <iframe
                width="100%"
                height="100%"
                src="http://www.youtube.com/embed/${getKeyYouTybe(data.youtube)};

title = "YouTube video player"
frameborder = "0"
allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen
  ></iframe > `;
  refs.tiezer.insertAdjacentHTML('beforeend', markUp);
}

function getKeyYouTybe(url) {
  let indexLast = url.split('').length;

  let key = url.split('').splice(32, indexLast).join('');
  return key;
}

function renderTitle(data) {
  refs.title.textContent = data.title;
}