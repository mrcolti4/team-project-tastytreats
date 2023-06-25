const t={list:document.querySelector(".popular-list"),list_mobile:document.querySelector(".popular-list.mobile")};async function e(){let t=await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular");return await t.json()}(async function(){let i=await e();!function(e){let i=e.map(({title:t,description:e,preview:i,_id:a})=>`
         <li class="popular-item" data-id="${a}">
      <div class="popular-wraper">
        <img
          class="popular-img"
          src="${i}"
          alt="${t}"
          loading="lazy"
          height="64"
          width="64"
        />
      </div>
      <div class="popular-containet-description">
        <h3 class="popular-title">${t}</h3>
        <p class="popular-description">${e}</p>
      </div>
    </li>`).join("");t.list.insertAdjacentHTML("beforeend",i),t.list_mobile.insertAdjacentHTML("beforeend",i)}(i)})(),t.list.addEventListener("click",t=>{try{t.target.closest(".popular-item").nodeName}catch(t){return}console.log(t.target.closest(".popular-item").dataset.id)});
//# sourceMappingURL=index.7669169a.js.map
