const score = Number(localStorage.getItem("score")) || 0;
const total = 20;

document.getElementById("score").innerHTML = score + "/" + total;

const xp = score * 10;
document.getElementById("xp").innerHTML = "⭐ XP: " + xp;

const level = Math.floor(xp / 100) + 1;
document.getElementById("level").innerHTML = "🏆 Level: " + level;

const percent = (score / total) * 100;

document.getElementById("progressBar").style.width = percent + "%";

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
