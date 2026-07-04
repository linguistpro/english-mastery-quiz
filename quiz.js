let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;
let selected = -1;

// Check if questions are loaded
if (!window.questions || window.questions.length === 0) {
    document.getElementById("question").innerHTML =
        "No questions found! Please check your category file.";
    throw new Error("Questions not loaded");
}

const question = document.getElementById("question");
const options = document.getElementById("options");
const number = document.getElementById("questionNumber");
const progress = document.getElementById("progress");
const explanation = document.getElementById("explanation");

loadQuestion();

function loadQuestion() {

    clearInterval(timer);

    selected = -1;
    timeLeft = 30;

    number.innerHTML =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    progress.style.width =
        ((currentQuestion + 1) / questions.length) * 100 + "%";

    question.innerHTML =
        questions[currentQuestion].question;

    options.innerHTML = "";

    explanation.style.display = "none";
    explanation.innerHTML = "";

    questions[currentQuestion].options.forEach((item, index) => {

        const div = document.createElement("div");

        div.className = "option";

        div.innerHTML = item;

        div.onclick = function () {

            document.querySelectorAll(".option").forEach(opt => {
                opt.style.background = "#eef4ff";
                opt.style.color = "black";
            });

            div.style.background = "#2563eb";
            div.style.color = "white";

            selected = index;
        };

        options.appendChild(div);

    });

    startTimer();
}

function nextQuestion() {

    clearInterval(timer);

    if (selected == -1) {
        alert("Please select an answer.");
        return;
    }

    if (selected === questions[currentQuestion].answer) {
        score++;
    }

    explanation.style.display = "block";
    explanation.innerHTML =
        "Explanation: " + questions[currentQuestion].explanation;

    setTimeout(() => {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            localStorage.setItem("score", score);
            localStorage.setItem("total", questions.length);

            window.location.href = "result.html";
        }

    }, 1500);

}

function startTimer() {

    document.getElementById("timer").innerHTML = timeLeft + " sec";
    document.getElementById("timer").style.color = "black";

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").innerHTML =
            timeLeft + " sec";

        if (timeLeft <= 10) {
            document.getElementById("timer").style.color = "red";
        }

        if (timeLeft <= 0) {

            clearInterval(timer);

            selected = 999;

            currentQuestion++;

            if (currentQuestion < questions.length) {

                loadQuestion();

            } else {

                localStorage.setItem("score", score);
                localStorage.setItem("total", questions.length);

                window.location.href = "result.html";
            }

        }

    }, 1000);

}
