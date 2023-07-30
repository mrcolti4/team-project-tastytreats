export class Loader {
  static loaderBox = document.querySelector('.backdrop-loader');
  static Start() {
    this.loaderBox.classList.add('active');
  }
  static Stop() {
    this.loaderBox.classList.remove('active');
  }
}
