var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=e.parcelRequired3cd;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,a.call(s.exports,s,s.exports),s.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequired3cd=a),a("gB0uO"),a("lBCTD");const s=document.querySelector(".category-button-wrap"),r=document.querySelector(".cards__list.card-set"),n=document.querySelector(".no-recipe-box"),o=[{_id:"6462a8f74c3d0ddd28897fc1",title:"Chocolate Gateau",category:"Dessert",description:"A French dessert consisting of layers of chocolate sponge cake and chocolate ganache, typically topped with chocolate glaze and chocolate decorations.",preview:"https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/zyahxajhkglf8sisiqlh.jpg",time:"75",rating:3},{_id:"6462a8f74c3d0ddd28897fbc",title:"Irish stew",category:"Beef",description:"A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.",preview:' "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560408/kknfjaqupiqhufj5kspx.jpg',time:"160",rating:3},{_id:"6462a8f74c3d0ddd28897fb9",title:"Lamb tomato and sweet spices",category:"Beef",description:"A Moroccan-inspired dish made with lamb, tomatoes, onions, and spices (such as cinnamon, ginger, and cumin), typically served with couscous or bread.",preview:"https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560405/zlxxkd81sadgwzbugyzl.jpg",time:"90",rating:89},{_id:"6462a8f74c3d0ddd28897fc1",title:"Chocolate Gateau",category:"Dessert",description:"A French dessert consisting of layers of chocolate sponge cake and chocolate ganache, typically topped with chocolate glaze and chocolate decorations.",preview:"https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/zyahxajhkglf8sisiqlh.jpg",time:"75",rating:3},{_id:"6462a8f74c3d0ddd28897fbc",title:"Irish stew",category:"Beef",description:"A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.",preview:' "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560408/kknfjaqupiqhufj5kspx.jpg',time:"160",rating:3},{_id:"6462a8f74c3d0ddd28897fb9",title:"Lamb tomato and sweet spices",category:"Beef",description:"A Moroccan-inspired dish made with lamb, tomatoes, onions, and spices (such as cinnamon, ginger, and cumin), typically served with couscous or bread.",preview:"https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560405/zlxxkd81sadgwzbugyzl.jpg",time:"90",rating:89}],d=[];function c(e){let t=e.reduce((e,t)=>e+function({_id:e,title:t,category:i,description:a,preview:s,time:r,rating:n}){return`<li class="cards__item items-set fav-set">
  <img src="${s}" alt="" class="cards__img" />
  <svg class="cards__heart" width="19" height="17">
    <use href="./images/sprite.svg#icon-heart"></use>
  </svg>
  <div class="cards__descr">
    <h4 class="cards__title">${t}</h4>
    <p class="cards__text">
      ${a}
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
</li>`}(t),"");r.innerHTML=`${t}`}function l(e){return`
    <button type="button" class="category-button-button btn">${e}</button>
    `}o.length>0?(function(e){e.forEach(e=>{d.includes(e.category)||d.push(e.category)}),s.insertAdjacentHTML("afterbegin",l("All Categories")),s.firstElementChild.classList.add("active");let t=d.map(e=>l(e)).join("");s.insertAdjacentHTML("beforeend",t)}(o),c(o)):n.classList.remove("visually-hidden"),s.addEventListener("click",function(e){for(let t=0;t<e.currentTarget.children.length;t+=1)e.currentTarget.children[t].classList.remove("active");e.target.classList.add("active")}),s.addEventListener("click",function(e){let t=String(e.target.textContent);if("All Categories"===t)c(o);else{r.innerHTML="";let e=o.filter(e=>e.category===t);c(e)}}),a("kvr0B"),a("Np8UN"),a("c4xQB"),a("aXcAs"),a("6gB84");
//# sourceMappingURL=favorites.936b7e6d.js.map
