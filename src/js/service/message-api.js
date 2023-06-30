import { Notify } from 'notiflix';

export class MessageApi {
  static showError() {
    Notify.failure(
      'Sorry, there are no recipes matching your search query. Please try again.'
    );
  }

  static onNetworkError() {
    Notify.failure('Problems with network. Please try again.');
  }

  static showTotalFound(totalFound) {
    Notify.success(`We found ${totalFound} pages of recipes.`);
  }
}
