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
      "Question 1. When was the first ever electric car created ?";
    btn[0].innerText = "1896";
    btn[1].innerText = "1863";
    btn[2].innerText = "1832";
    btn[3].innerText = "1865";
    next.innerText = "Next";
    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = () => {
        if (btn[i].innerText === "1832") {
          btn[2].style.backgroundColor = "#32CD32";
          score += 2;
        } else {
          btn[2].style.backgroundColor = "#32CD32";
          btn[i].style.backgroundColor = "red";
        }
      };
    }
    cc++;
    //correct anser = 3;
  } else if (cc == 1) {
    question.innerText =
      "Question 2. First speeding Ticket was finned at which speed ?";
    btn[0].innerText = "12km/h";
    btn[1].innerText = "13km/h";
    btn[2].innerText = "18km/h";
    btn[3].innerText = "21km/h";
    next.innerText = "Next";
    for (let i = 0; i < btn.length; i++) {
      let g = 0;
      if (g == 0) {
        btn[i].onclick = () => {
          if (btn[i].innerText === "13km/h") {
            btn[1].style.backgroundColor = "#32CD32";
            score += 2;
          } else {
            btn[1].style.backgroundColor = "#32CD32";
            btn[i].style.backgroundColor = "red";
          }
        };
      }
    }
    cc++;
    //correct anser = 1;
  } else if (cc == 2) {
    question.innerText = "Question 3. Steering wheel was first used in  ?";
    btn[0].innerText = "1892";
    btn[1].innerText = "1890";
    btn[2].innerText = "1895";
    btn[3].innerText = "1894";
    next.innerText = "Next";
    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = () => {
        if (btn[i].innerText === "1894") {
          btn[3].style.backgroundColor = "#32CD32";
          score += 2;
        } else {
          btn[3].style.backgroundColor = "#32CD32";
          btn[i].style.backgroundColor = "red";
        }
      };
    }
    cc++;
    //correct anser = 3;
  } else if (cc == 3) {
    question.innerText =
      "Question 4. The first ever sports car had how many hp's ?";
    btn[0].innerText = "20 hp";
    btn[1].innerText = "30 hp";
    btn[2].innerText = "25 hp";
    btn[3].innerText = "32 hp";
    next.innerText = "Done";
    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = () => {
        if (btn[i].innerText === "20 hp") {
          btn[0].style.backgroundColor = "#32CD32";
          score += 2;
        } else {
          btn[0].style.backgroundColor = "#32CD32";
          btn[i].style.backgroundColor = "red";
        }
      };
    }
    cc++;
    //correct anser = 0;
  } else if ((cc = 4)) {
    alert("Congrats your score is " + score);
  }
}
