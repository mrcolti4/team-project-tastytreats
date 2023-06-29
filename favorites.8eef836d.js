(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),i=()=>{let a="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open");let i=a?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[i](document.body)};t.addEventListener("click",i),a.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const e=document.querySelector(".category-button-wrap"),t=document.querySelector(".cards__list.card-set"),a=document.querySelector(".no-recipe-box"),i=[{_id:"6462a8f74c3d0ddd28897fc1",title:"Chocolate Gateau",category:"Dessert",description:"A French dessert consisting of layers of chocolate sponge cake and chocolate ganache, typically topped with chocolate glaze and chocolate decorations.",preview:"https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/zyahxajhkglf8sisiqlh.jpg",time:"75",rating:3},{_id:"6462a8f74c3d0ddd28897fbc",title:"Irish stew",category:"Beef",description:"A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.",preview:' "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560408/kknfjaqupiqhufj5kspx.jpg',time:"160",rating:3},{_id:"6462a8f74c3d0ddd28897fb9",title:"Lamb tomato and sweet spices",category:"Beef",description:"A Moroccan-inspired dish made with lamb, tomatoes, onions, and spices (such as cinnamon, ginger, and cumin), typically served with couscous or bread.",preview:"https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560405/zlxxkd81sadgwzbugyzl.jpg",time:"90",rating:89},{_id:"6462a8f74c3d0ddd28897fc1",title:"Chocolate Gateau",category:"Dessert",description:"A French dessert consisting of layers of chocolate sponge cake and chocolate ganache, typically topped with chocolate glaze and chocolate decorations.",preview:"https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/zyahxajhkglf8sisiqlh.jpg",time:"75",rating:3},{_id:"6462a8f74c3d0ddd28897fbc",title:"Irish stew",category:"Beef",description:"A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.",preview:' "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560408/kknfjaqupiqhufj5kspx.jpg',time:"160",rating:3},{_id:"6462a8f74c3d0ddd28897fb9",title:"Lamb tomato and sweet spices",category:"Beef",description:"A Moroccan-inspired dish made with lamb, tomatoes, onions, and spices (such as cinnamon, ginger, and cumin), typically served with couscous or bread.",preview:"https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560405/zlxxkd81sadgwzbugyzl.jpg",time:"90",rating:89}],s=[];function c(e){let a=e.reduce((e,t)=>e+function({_id:e,title:t,category:a,description:i,preview:s,time:c,rating:r}){return`<li class="cards__item items-set fav-set">
  <img src="${s}" alt="" class="cards__img" />
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
</li>`}(t),"");t.innerHTML=`${a}`}function r(e){return`
    <button type="button" class="category-button-button btn">${e}</button>
    `}i.length>0?(function(t){t.forEach(e=>{s.includes(e.category)||s.push(e.category)}),e.insertAdjacentHTML("afterbegin",r("All Categories")),e.firstElementChild.classList.add("active");let a=s.map(e=>r(e)).join("");e.insertAdjacentHTML("beforeend",a)}(i),c(i)):a.classList.remove("visually-hidden"),e.addEventListener("click",function(e){for(let t=0;t<e.currentTarget.children.length;t+=1)e.currentTarget.children[t].classList.remove("active");e.target.classList.add("active")}),e.addEventListener("click",function(e){let a=String(e.target.textContent);if("All Categories"===a)c(i);else{t.innerHTML="";let e=i.filter(e=>e.category===a);c(e)}});
//# sourceMappingURL=favorites.8eef836d.js.map
