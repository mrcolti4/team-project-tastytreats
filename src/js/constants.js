function getLimit(windowWidth) {
  let limitCount = 0;
  if (windowWidth < 768) {
    limitCount = 6;
  } else if (windowWidth > 768 && windowWidth < 1280) {
    limitCount = 8;
  } else if (windowWidth > 1280) {
    limitCount = 9;
  }
  return limitCount;
}

const limitCount = getLimit(document.documentElement.clientWidth);
const KEY = 'favCards';
export { limitCount, KEY };
