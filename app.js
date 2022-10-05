let randomNumber = Math.round(Math.random() * 100);
let score = 10;
let topScore = localStorage.getItem("topScore") || 0;

document.querySelector(".top-score").innerText = topScore;

document.querySelector(".check-btn").addEventListener("click", () => {
  const inputNumber = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const bodyBg = document.querySelector("body");

  if (!inputNumber) {
    msg.innerText = "Please enter a number";
  } else if (inputNumber == randomNumber) {
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i> `;
    bodyBg.classList = "bg-success";
    document.querySelector(".check-btn").disabled = true;

    if (score > topScore) {
      localStorage.setItem("topScore", score);
      document.querySelector(".top-score").textContent = score;
    }

    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    score--;
    if (score > 0) {
      inputNumber > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE `)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE `);
    } else {
      msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      bodyBg.classList = "bg-danger";
      document.querySelector(".check-btn").disabled = true;
    }

    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").innerText = score;
  randomNumber = Math.round(Math.random() * 100);
  document.querySelector(".secret-number").innerText = "?";
  document.querySelector(".check-btn").disabled = false;
  document.querySelector("body").classList.remove("bg-success", "bg-danger");
  document.querySelector(".guess-input").value = ''
  document.querySelector(".msg").innerText='Starting...'
});

document.querySelector(".guess-input").addEventListener('keydown', (e)=>{
    if(e.code == 'Enter'){
        document.querySelector(".check-btn").click()
    }
    if(e.code == 'Escape'){
        document.querySelector(".again-btn").click();
    }
})
