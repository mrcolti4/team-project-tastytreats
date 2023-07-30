export const btnUp = {
  el: document.querySelector('.scroll-icon'),
    scrolling: false,
    show() {
    if (this.el.classList.contains('scroll-icon__hide') && !this.el.classList.contains('scroll-icon__hiding')) {
      this.el.classList.remove('scroll-icon__hide');
      this.el.classList.add('scroll-icon__hiding');
      window.setTimeout(() => {
        this.el.classList.remove('scroll-icon__hiding');
      }, 300);
    }
  },
  hide() {
    if (
      !this.el.classList.contains('scroll-icon__hide') &&
      !this.el.classList.contains('scroll-icon__hiding')
    ) {
      this.el.classList.add('scroll-icon__hiding');
      window.setTimeout(() => {
        this.el.classList.add('scroll-icon__hide');
        this.el.classList.remove('scroll-icon__hiding');
      }, 300);
    }
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;

      if (scrollY > 400) {
        this.show();
      } else {
        this.hide();
      }
    });
    document.querySelector('.scroll-icon').onclick = () => {
      this.scrolling = true;
      this.hide();

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();