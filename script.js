let questions = [
  { q: "5 + 3 =", a: 8 },
  { q: "10 - 4 =", a: 6 },
  { q: "2 × 3 =", a: 6 },
  { q: "12 ÷ 4 =", a: 3 },
  { q: "7 + 6 =", a: 13 }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.querySelector("button").style.display = "none"; // hide Play
  document.getElementById("question-container").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  document.getElementById("question").textContent = questions[currentQuestion].q;
  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const userAnswer = Number(document.getElementById("answer").value);
  const result = document.getElementById("result");

  if (userAnswer === questions[currentQuestion].a) {
    result.style.color = "lightgreen";
    result.textContent = "✅ Betul!";
    score++;
  } else {
    result.style.color = "red";
    result.textContent = "❌ Salah!";
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    setTimeout(showQuestion, 800);
  } else {
    setTimeout(() => {
      result.textContent = `🎉 Quiz selesai! Skor: ${score}/${questions.length}`;
    }, 800);
  }

  document.getElementById("score").textContent = `Skor: ${score}`;
}

function handleEnter(event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
}
