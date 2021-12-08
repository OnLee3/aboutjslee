const heroBtn = document.querySelector(".heroBtn");
const infoBtn = document.querySelector(".infoBtn");
const workBtn = document.querySelector(".workBtn");
const contactBtn = document.querySelector(".contactBtn");

// 스크롤 이벤트

heroBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".hero__img").scrollIntoView({behavior: "smooth"});
})

infoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".hero__info").scrollIntoView({behavior: "smooth"});
})

workBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".hero__work").scrollIntoView({behavior: "smooth"});
})

contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".contact").scrollIntoView({behavior: "smooth"});
})

// 콘솔이펙트 타이틀
consoleText(['안녕하세요.', '이재석 입니다.', '잘 부탁드립니다 :)'], 'console__text', ['tomato','rebeccapurple','lightblue'])

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    let visible = true;
    let console = document.getElementById('console');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(() => {
        if (letterCount === 0 && waiting === false){
            waiting === true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(() => {
                let usedColor = colors.shift();
                colors.push(usedColor);
                let usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color' + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false){
            waiting = true;
            window.setTimeout(() => {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
        }
    }, 120)
    window.setInterval(() => {
        if (visible === true){
            console.className = 'console__underscore hidden'
            visible = false;
        } else {
            console.className = 'console__underscore'
            visible = true;
        }
    }, 400)
}