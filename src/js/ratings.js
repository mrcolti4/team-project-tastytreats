let ratings;
let ratingActive, ratingValue;

function initRating(rating) {
  // Для кожного окремого рейтингу ініціалізуємо різні змінні
  initValues(rating);
  // Рахуємо відсоток заповненого рейтингу
  if (ratingValue.innerHTML > 5) {
    ratingValue.innerHTML = 5;
  }
  const ratingActiveWidth = ratingValue.innerHTML / 0.05;

  ratingActive.style.width = `${ratingActiveWidth}%`;
}

function initValues(rating) {
  ratingActive = rating.querySelector('.rating__active');
  ratingValue = rating.querySelector('.rating__value');
}

export function markUpRating() {
  ratings = document.querySelectorAll('.rating');
  ratings.forEach(item => {
    const rating = item;
    initRating(rating);
  });
}
