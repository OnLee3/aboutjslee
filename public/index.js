const heroBtn = document.querySelector(".heroBtn");
const infoBtn = document.querySelector(".infoBtn");
const workBtn = document.querySelector(".workBtn");
const contactBtn = document.querySelector(".contactBtn");

heroBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".hero__img").scrollIntoView(true);
})

infoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".hero__info").scrollIntoView(true);
})

workBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".hero__work").scrollIntoView(true);
})

contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".contact").scrollIntoView(true);
})