const heroBtn = document.querySelector(".heroBtn");
const infoBtn = document.querySelector(".infoBtn");

heroBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".hero__img").scrollIntoView(true);
})

infoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".hero__info").scrollIntoView(true);
})
