var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequired3cd;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired3cd=i),i("lBCTD");var s=i("96tOn"),n=i("c4xQB"),o=i("fb9GJ"),s=i("96tOn"),l=i("8G1wF"),r=i("fo4g3");const c=(0,s.default).load(l.KEY)||{},d=Object.values(c),p=document.querySelector(".favorite__pagintaion"),u={totalItems:d.length,itemsPerPage:12,visiblePages:window.innerWidth<768?2:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="pag__page-btn tui-page-btn">{{page}}</a>',currentPage:'<strong class="pag__current-page tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="pag__btn-move tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="pag__btn-move pag__btn-disabled tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},g=new(function(e){return e&&e.__esModule?e.default:e}(o))(p,u);function f(e){(0,r.showFavRecipes)(v(e,1,pagInfo.itemsPerPage)),g.reset(e.length),g.isActive(pagInfo.itemsPerPage)}function v(e,t,a){let i=(t-1)*a,s=i+a,n=e.slice(i,s);return n}g.isActive=function(e){let t=this._view._containerElement,a=this._options.totalItems;a<=e?t.classList.add("hidden"):t.classList.remove("hidden")};var m=i("krGWQ"),b=i("fWx6c"),l=i("8G1wF"),h=i("1sbsM"),_=i("gcT0V");document.body.classList.add("favorite");const w=(0,s.default).load(l.KEY)||{};let P=(0,b.getLocalFavRecipes)(l.KEY);const y={itemsPerPage:window.innerWidth>768?12:9};P.length?(0,_.drawAllComponents)(v(P,1,y.itemsPerPage)):(0,h.showNoRecipeBox)(),(0,m.favoriteRefs).cardsList.addEventListener("click",e=>{"BUTTON"===e.target.nodeName&&(0,n.finallInitPage)(e.target.closest(".cards__item").dataset.id)}),(0,m.favoriteRefs).filterList.addEventListener("click",function(e){let t=e.target;if("BUTTON"===t.nodeName){let e=document.querySelector(".btn-active");if(e.classList.remove("btn-active"),t.classList.add("btn-active"),P=Object.values(w),t.matches("button.js-category")){let e=P.filter(({category:e})=>t.textContent===e);P=e,f(e);return}if(t.matches("button.js-allcategories")){f(P);return}}}),g.isActive(y.itemsPerPage),g.on("afterMove",e=>{let t=e.page;(function(e,t){let a=v(e,t,pagInfo.itemsPerPage);(0,r.showFavRecipes)(a)})(P,t)}),i("1sbsM"),i("2Yqz6"),i("7GqSH"),i("bHSoV"),i("c4xQB"),i("kJSNh"),i("h0oKa");
//# sourceMappingURL=favorites.ff8128ba.js.map
