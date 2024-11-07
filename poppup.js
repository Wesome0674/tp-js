const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const create = document.getElementById("create");
const plan = document.querySelector(".layer-blur");
const layer = document.querySelector(".layer");

openMenu.addEventListener("click", () => {
  console.log("click");
  plan.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  plan.classList.remove("open");
});

create.addEventListener("click", () => {
  plan.classList.remove("open");
});

window.addEventListener("keydown", (e) => {
    e.key === 'Escape' ?  plan.classList.remove("open") : "";
})

layer.addEventListener("click", () => {
    plan.classList.remove("open");
})