const score = Number(localStorage.getItem("score")) || 0;
const total = 20;

document.getElementById("score").innerHTML = score + "/" + total;

// XP
const xp = score * 10;
document.getElementById("xp").innerHTML = "⭐ XP: " + xp;

// Save XP
localStorage.setItem("xp", xp);

// Best Score
let bestScore = Number(localStorage.getItem("bestScore")) || 0;

if (score > bestScore) {
    bestScore = score;
    localStorage.setItem("bestScore", bestScore);
}

// Level
const level = Math.floor(xp / 100) + 1;
document.getElementById("level").innerHTML = "🏆 Level: " + level;

// Progress
const percent = (score / total) * 100;
document.getElementById("progressBar").style.width = percent + "%";

// Grade
let grade = "";
let message = "";

if (percent >= 90) {
    grade = "🏅 Grade A+";
    message = "Excellent! 🏆";
} else if (percent >= 80) {
    grade = "🥇 Grade A";
    message = "Great Job! 🎉";
} else if (percent >= 70) {
    grade = "🥈 Grade B";
    message = "Good Work 👍";
} else if (percent >= 60) {
    grade = "🥉 Grade C";
    message = "Keep Improving 💪";
} else {
    grade = "📚 Need More Practice";
    message = "Practice More 😊";
}

document.getElementById("grade").innerHTML = grade;
document.getElementById("message").innerHTML = message;
