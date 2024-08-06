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
    question.innerText = "Question 1. How many heart does an octopus have ?";
    btn[0].innerText = "One";
    btn[1].innerText = "Two";
    btn[2].innerText = "Three";
    btn[3].innerText = "Four";
    next.innerText = "Next";
    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = () => {
        if (btn[i].innerText === "Three") {
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
      "Question 2. Which giant ocean creature helps the climate change ?";
    btn[0].innerText = "dolphines";
    btn[1].innerText = "Blue whale";
    btn[2].innerText = "sharks";
    btn[3].innerText = "giant crocodile";
    next.innerText = "Next";
    for (let i = 0; i < btn.length; i++) {
      let g = 0;
      if (g == 0) {
        btn[i].onclick = () => {
          if (btn[i].innerText === "Blue whale") {
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
    question.innerText =
      "Question 3. The rare cat family member that belongs to a state of India called Bengal ?";
    btn[0].innerText = "tigger";
    btn[1].innerText = "bengali-lion";
    btn[2].innerText = "white tigers";
    btn[3].innerText = "bengal tigers";
    next.innerText = "Next";
    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = () => {
        if (btn[i].innerText === "bengal tigers") {
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
      "Question 4. What is population of pet dogs in america ?";
    btn[0].innerText = "65 million ";
    btn[1].innerText = "45 million";
    btn[2].innerText = "72 million";
    btn[3].innerText = "58 million";
    next.innerText = "Done";
    for (let i = 0; i < btn.length; i++) {
      btn[i].onclick = () => {
        if (btn[i].innerText === "65 million") {
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

// btn[0].onclick=()=>{
//     if (i===0){
//     btn[0].style.backgroundColor="#FF3131";
//     btn[2].style.backgroundColor="#32CD32";

// }; i++;
// cc++;};

// btn[1].onclick=()=>{if (i===0){
//     btn[1].style.backgroundColor="#FF3131";
//     btn[2].style.backgroundColor="#32CD32";
// }; i++;cc++;};

// btn[2].onclick=()=>{if (i===0){
//     btn[2].style.backgroundColor="#32CD32";
// };i++;cc++;}

// btn[3].onclick=()=>{if (i===0){
//     btn[3].style.backgroundColor="#FF3131";
//     btn[2].style.backgroundColor="#32CD32";
//    }; i++;cc++;}

//    function updatequiz(){
// if(cc==1){

// }
// }
