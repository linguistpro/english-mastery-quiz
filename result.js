const score = Number(localStorage.getItem("score")) || 0;

document.getElementById("score").innerHTML = score + "/20";

const xp = score * 10;
document.getElementById("xp").innerHTML = "⭐ XP: " + xp;

const level = Math.floor(xp / 100) + 1;
document.getElementById("level").innerHTML = "🏆 Level: " + level;
