const infoBtn = document.querySelector(".infoBtn");

infoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".hero").scrollIntoView(true);
})