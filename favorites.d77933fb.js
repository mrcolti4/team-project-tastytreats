var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},i=t.parcelRequired3cd;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in a){var i=a[t];delete a[t];var d={id:t,exports:{}};return e[t]=d,i.call(d.exports,d,d.exports),d.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){a[t]=e},t.parcelRequired3cd=i),i("91veQ"),i("lBCTD");var d=i("2shzp");const r=document.querySelector(".category-button-list"),s=document.querySelector(".cards__list.card-set"),n=document.querySelector(".no-recipe-box"),c=JSON.parse('["6462a8f74c3d0ddd28897fc1", "6462a8f74c3d0ddd28897fbc", "6462a8f74c3d0ddd28897fb9", "6462a8f74c3d0ddd28897fdf", "6462a8f74c3d0ddd28897fc2", "6462a8f74c3d0ddd28897fbf"]');function l(t){let e=(0,d.default).get(`https://tasty-treats-backend.p.goit.global/api/recipes/${t}`);return e}console.log(l("6462a8f74c3d0ddd28897fc1")),c.map(t=>{l(t).then(({data:t})=>{r.insertAdjacentHTML("afterbegin",`<li class="category-button-item">
          <button type="button" class="category-button-button btn">
            ${t.category}
          </button>
        </li>`)}).catch(t=>console.log("error"))}),c.map(t=>{l(t).then(({data:t})=>{s.insertAdjacentHTML("afterbegin",`<li class="cards__item items-set fav-set">
        <img src="${t.preview}" alt="" class="cards__img" />
        <svg class="cards__heart" width="19" height="17">
          <use href="./images/sprite.svg#icon-heart"></use>
        </svg>
        <div class="cards__descr">
          <h4 class="cards__title">${t.title}</h4>
          <p class="cards__text">
            ${t.description}
          </p>
          <div class="cards__info">
            <div class="cards__rating rating">
              <div class="rating__value">5</div>
              <div class="rating__body">
                <div class="rating__active"></div>
                <div class="rating__items">
                  <input
                    type="radio"
                    class="rating__item"
                    name="rating"
                    value="1"
                  />
                  <input
                    type="radio"
                    class="rating__item"
                    name="rating"
                    value="2"
                  />
                  <input
                    type="radio"
                    class="rating__item"
                    name="rating"
                    value="3"
                  />
                  <input
                    type="radio"
                    class="rating__item"
                    name="rating"
                    value="4"
                  />
                  <input
                    type="radio"
                    class="rating__item"
                    name="rating"
                    value="5"
                  />
                </div>
              </div>
            </div>
            <button class="btn btn-primary cards__btn">See recipe</button>
          </div>
        </div>
      </li>`)}).catch(t=>console.log("error"))}),n.classList.add("visually-hidden");
//# sourceMappingURL=favorites.d77933fb.js.map
