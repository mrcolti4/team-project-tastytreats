(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),i=()=>{let o="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");let i=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[i](document.body)};t.addEventListener("click",i),o.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const e=document.querySelector(".category-button-wrap"),t=document.querySelector(".cards__list.card-set"),o=document.querySelector(".no-recipe-box"),i=[{_id:"6462a8f74c3d0ddd28897fc1",title:"Chocolate Gateau",category:"Dessert",description:"A French dessert consisting of layers of chocolate sponge cake and chocolate ganache, typically topped with chocolate glaze and chocolate decorations.",preview:"https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/zyahxajhkglf8sisiqlh.jpg",time:"75",rating:3},{_id:"6462a8f74c3d0ddd28897fbc",title:"Irish stew",category:"Beef",description:"A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.",preview:' "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560408/kknfjaqupiqhufj5kspx.jpg',time:"160",rating:3},{_id:"6462a8f74c3d0ddd28897fb9",title:"Lamb tomato and sweet spices",category:"Beef",description:"A Moroccan-inspired dish made with lamb, tomatoes, onions, and spices (such as cinnamon, ginger, and cumin), typically served with couscous or bread.",preview:"https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560405/zlxxkd81sadgwzbugyzl.jpg",time:"90",rating:89},{_id:"6462a8f74c3d0ddd28897fc1",title:"Chocolate Gateau",category:"Dessert",description:"A French dessert consisting of layers of chocolate sponge cake and chocolate ganache, typically topped with chocolate glaze and chocolate decorations.",preview:"https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/zyahxajhkglf8sisiqlh.jpg",time:"75",rating:3},{_id:"6462a8f74c3d0ddd28897fbc",title:"Irish stew",category:"Beef",description:"A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.",preview:' "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560408/kknfjaqupiqhufj5kspx.jpg',time:"160",rating:3},{_id:"6462a8f74c3d0ddd28897fb9",title:"Lamb tomato and sweet spices",category:"Beef",description:"A Moroccan-inspired dish made with lamb, tomatoes, onions, and spices (such as cinnamon, ginger, and cumin), typically served with couscous or bread.",preview:"https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560405/zlxxkd81sadgwzbugyzl.jpg",time:"90",rating:89}],c=[];function r(e){let o=e.reduce((e,t)=>e+function({_id:e,title:t,category:o,description:i,preview:c,time:r,rating:a}){return`<li class="cards__item items-set fav-set">
  <img src="${c}" alt="" class="cards__img" />
  <svg class="cards__heart" width="19" height="17">
    <use href="./images/sprite.svg#icon-heart"></use>
  </svg>
  <div class="cards__descr">
    <h4 class="cards__title">${t}</h4>
    <p class="cards__text">
      ${i}
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
</li>`}(t),"");t.innerHTML=`${o}`}function a(e){return`
    <button type="button" class="category-button-button btn">${e}</button>
    `}i.length>0?(function(t){t.forEach(e=>{c.includes(e.category)||c.push(e.category)}),e.insertAdjacentHTML("afterbegin",a("All Categories")),e.firstElementChild.classList.add("active");let o=c.map(e=>a(e)).join("");e.insertAdjacentHTML("beforeend",o)}(i),r(i)):o.classList.remove("visually-hidden"),e.addEventListener("click",function(e){for(let t=0;t<e.currentTarget.children.length;t+=1)e.currentTarget.children[t].classList.remove("active");e.target.classList.add("active")}),e.addEventListener("click",function(e){let o=String(e.target.textContent);if("All Categories"===o)r(i);else{t.innerHTML="";let e=i.filter(e=>e.category===o);r(e)}});const n={light:document.querySelector("[rel='stylesheet'][media*='prefers-color-scheme'][media*='light']"),dark:document.querySelector("[rel='stylesheet'][media*='prefers-color-scheme'][media*='dark']"),btnCollection:document.querySelectorAll(".switcher-input"),inputLabel:document.querySelector(".input-label")};function s(){return localStorage.getItem("color-scheme")}function l(e){let t,o;"auto"===e?(t="(prefers-color-scheme: light)",o="(prefers-color-scheme: dark)"):(t="light"===e?"all":"not all",o="dark"===e?"all":"not all"),n.light.media=t,n.dark.media=o}(function(){let e=s();null!==e&&n.btnCollection.forEach(t=>{t.checked="light"!==e}),n.btnCollection.forEach(e=>{e.addEventListener("change",t=>{let o=!1===e.checked?"light":"dark";l(o),localStorage.setItem("color-scheme",o),n.btnCollection.forEach(t=>{t.checked=e.checked})})})})(),l(s()),function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(class{static Start(){this.loaderBox.classList.add("active")}static Stop(){this.loaderBox.classList.remove("active")}},"loaderBox",document.querySelector(".backdrop-loader"));let d={closeBtn:document.querySelector(".modal-close-btn"),closeVideo:document.querySelector(".tiezer-close-btn"),tiezer:document.querySelector(".tiezer"),trailerBox:document.querySelector(".trailer-box"),btnOpenYouTube:document.querySelector(".js-btn-openYouTube"),preview:document.querySelector(".recipes"),video:document.querySelector("iframe"),title:document.querySelector(".js-title"),time:document.querySelector(".js-minute"),modalRecipe:document.querySelector(".js-modal-recipe"),backdropRecipe:document.querySelector(".js-backdrop-recipe"),ratingBox:document.querySelector(".js-rating-recipe-wraper"),IngredientBox:document.querySelector(".recipes-list"),hashtagsBox:document.querySelector(".hashtags-list"),textContentBox:document.querySelector(".cooking-recipes")};function u(){window.removeEventListener("keydown",m),document.body.classList.remove("overflowHidden"),d.backdropRecipe.classList.remove("active"),d.modalRecipe.classList.remove("active")}function m(e){"Escape"===e.code&&u()}function h(){d.trailerBox.classList.remove("active"),document.querySelectorAll("iframe").forEach(e=>{e.src=e.src}),document.querySelectorAll("video").forEach(e=>{e.pause()})}d.closeBtn.addEventListener("click",u),d.backdropRecipe.addEventListener("click",function(e){e.currentTarget===e.target&&(h(),u())}),d.closeVideo.addEventListener("click",h),d.btnOpenYouTube.addEventListener("click",function(){d.trailerBox.classList.add("active")});const p={openModalBtn:document.querySelector(".shopping-link"),openModalBtnHero:document.querySelector(".btn-hero"),closeModalBtn:document.querySelector(".order-modal-close-btn"),backdrop:document.querySelector(".backdrop-order"),modal:document.querySelector(".modal-order"),forma:document.querySelector(".modal-form-order")};try{p.openModalBtnHero.addEventListener("click",g)}catch(e){}function g(){window.addEventListener("keydown",y),document.body.classList.add("overflowHidden"),p.backdrop.classList.add("active"),p.modal.classList.add("active")}function v(){document.body.classList.remove("overflowHidden"),window.removeEventListener("keydown",y),document.body.classList.remove("overflowHidden"),p.backdrop.classList.remove("active"),p.modal.classList.remove("active")}function y(e){"Escape"===e.code&&v()}p.openModalBtn.addEventListener("click",g),p.closeModalBtn.addEventListener("click",v),p.backdrop.addEventListener("click",function(e){e.currentTarget===e.target&&v()}),p.forma.addEventListener("submit",function(e){e.preventDefault();let{name:t,tel:o,email:i,comment:c}=e.currentTarget,r={name:t.value,tel:o.value,email:i.value,comment:c.value};console.log(r),e.currentTarget.reset(),v()});const b={el:document.querySelector(".scroll-icon"),scrolling:!1,show(){this.el.classList.contains("scroll-icon__hide")&&!this.el.classList.contains("scroll-icon__hiding")&&(this.el.classList.remove("scroll-icon__hide"),this.el.classList.add("scroll-icon__hiding"),window.setTimeout(()=>{this.el.classList.remove("scroll-icon__hiding")},300))},hide(){this.el.classList.contains("scroll-icon__hide")||this.el.classList.contains("scroll-icon__hiding")||(this.el.classList.add("scroll-icon__hiding"),window.setTimeout(()=>{this.el.classList.add("scroll-icon__hide"),this.el.classList.remove("scroll-icon__hiding")},300))},addEventListener(){window.addEventListener("scroll",()=>{let e=window.scrollY||document.documentElement.scrollTop;this.scrolling&&e>0||(this.scrolling=!1,e>400?this.show():this.hide())}),document.querySelector(".scroll-icon").onclick=()=>{this.scrolling=!0,this.hide(),window.scrollTo({top:0,left:0,behavior:"smooth"})}}};b.addEventListener();
//# sourceMappingURL=favorites.a123ce90.js.map
