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
consoleText(['안녕하세요.', '이재석 입니다.', '잘 부탁드립니다 :)'], 'text',['#111','#111', '#111']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}