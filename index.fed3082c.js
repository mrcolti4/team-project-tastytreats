!function(){var e=document.querySelector(".js-input"),t=document.querySelector(".js-clin-input"),n=document.querySelector(".js-icon-serch");e.addEventListener("focus",function(){n.classList.add("active")}),e.addEventListener("blur",function(){n.classList.remove("active")}),e.addEventListener("input",function(){if(e.value.trim().length>0){t.classList.add("active");return}t.classList.remove("active")}),t.addEventListener("click",function(){e.value="",t.classList.remove("active")})}();
//# sourceMappingURL=index.fed3082c.js.map
