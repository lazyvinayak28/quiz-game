let btn = document.querySelectorAll(".btn");
let next = document.querySelector("#nextclick");
let question = document.querySelector("#question");
// let i=0 ;
let score = 0;
let cc = 0;
next.onclick = update;
function update() {
  btn[0].style.backgroundColor = "white";
  btn[1].style.backgroundColor = "white";
  btn[2].style.backgroundColor = "white";
  btn[3].style.backgroundColor = "white";

  if (cc == 0) {
    question.innerText =
      "Question 1. One life of Earth equals how many days for Lord Bramha ?";
    btn[0].innerText = "1 day";
    btn[1].innerText = "6 day";
    btn[2].innerText = "42 days";
    btn[3].innerText = "15 days";
    next.innerText = "Next";
    let l = 0;

    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = () => {
        if (l == 0) {
          if (btn[i].innerText === "1 day") {
            btn[0].style.backgroundColor = "#32CD32";
            score += 2;
            l++;
          } else {
            btn[0].style.backgroundColor = "#32CD32";
            btn[i].style.backgroundColor = "red";
            l++;
          }
        }
      };
    }
    cc++;
    //correct anser = 3;
  } else if (cc == 1) {
    question.innerText = "Question 2. What was the name of ravan's wife ?";
    btn[0].innerText = "hidimba";
    btn[1].innerText = "yashaswini";
    btn[2].innerText = "Mandodari";
    btn[3].innerText = "chandramukhi";
    next.innerText = "Next";
    let l = 0;
    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = () => {
        if (l == 0) {
          if (btn[i].innerText === "Mandodari") {
            btn[2].style.backgroundColor = "#32CD32";
            score += 2;
            l++;
          } else {
            btn[2].style.backgroundColor = "#32CD32";
            btn[i].style.backgroundColor = "red";
            l++;
          }
        }
      };
    }

    cc++;
    //correct anser = 1;
  } else if (cc == 2) {
    question.innerText =
      "Question 3. Who many brothers does lord Hanuman had ?";
    btn[0].innerText = " one brothers";
    btn[1].innerText = "he was the only child";
    btn[2].innerText = "3 brothers";
    btn[3].innerText = "5 brothers";
    next.innerText = "Next";
    let l = 0;
    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = () => {
        if (l == 0) {
          if (btn[i].innerText === "5 brothers") {
            btn[3].style.backgroundColor = "#32CD32";
            score += 2;
            l++;
          } else {
            btn[3].style.backgroundColor = "#32CD32";
            btn[i].style.backgroundColor = "red";
            l++;
          }
        }
      };
    }
    cc++;
    //correct anser = 3;
  } else if (cc == 3) {
    question.innerText = "Question 4. Who was father of  Kans ?";
    btn[0].innerText = "dhananad";
    btn[1].innerText = "Vgrasena";
    btn[2].innerText = "Ugrasena";
    btn[3].innerText = "astak";
    next.innerText = "Done";
    let l = 0;
    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = () => {
        if (l == 0) {
          if (btn[i].innerText === "Ugrasena") {
            btn[2].style.backgroundColor = "#32CD32";
            score += 2;
            l++;
          } else {
            btn[2].style.backgroundColor = "#32CD32";
            btn[i].style.backgroundColor = "red";
            l++;
          }
        }
      };
    }
    cc++;
    //correct anser = 0;
  } else if ((cc = 4)) {
    alert("Congrats your score is " + score);
  }
}
