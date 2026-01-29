// DYNAMIC USERNAME
let userName = "Anonymous";
const leaderboardEntries = [];
const completedTasks = {};
let totalScore = 0;

const displayName = document.getElementById("displayName");
const nameInput = document.getElementById("userNameInput");
const changeNickBtn = document.getElementById("changeNickBtn");

changeNickBtn.addEventListener("click", () => {
  if (changeNickBtn.innerText === "Change Nick") {
    nameInput.value = userName;
    nameInput.classList.remove("hidden");
    displayName.classList.add("hidden");
    nameInput.focus();
    changeNickBtn.innerText = "Submit";
  } else {
    userName = nameInput.value.trim() || "Anonymous";
    displayName.innerText = userName;
    nameInput.classList.add("hidden");
    displayName.classList.remove("hidden");
    changeNickBtn.innerText = "Change Nick";
    updateLeaderboard();
  }
});

// MENU / TAB LOGIC
function openTab(tabId, button) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
  document.querySelectorAll(".menu-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById(tabId).classList.remove("hidden");
  button.classList.add("active");
}

// TASKS SUBMIT
function submitTask(taskId) {
  const input = document.getElementById(`task${taskId}Input`);
  const button = input.nextElementSibling;

  if (!input.value || input.value.length < 4) {
    alert("Please provide a valid value");
    return;
  }

  if (completedTasks[taskId]) return;

  completedTasks[taskId] = true;
  totalScore += 25;

  button.disabled = true;
  button.innerText = "Completed";
  input.disabled = true;

  updateLeaderboard();
}

// CHECK SCORE
function calculateScore() {
  const twitter = document.getElementById("twitterInput").value.trim();
  const luffa = document.getElementById("luffaInput").value.trim();
  const eds = document.getElementById("edsInput").value.trim();
  const discord = document.getElementById("discordInput").value.trim();

  let score = 0;
  if (twitter) score += 25;
  if (luffa) score += 25;
  if (eds) score += 25;
  if (discord) score += 25;

  totalScore = score;

  const scoreEl = document.getElementById("checkScoreValue");
  scoreEl.innerText = score;
  scoreEl.classList.remove("hidden");

  updateLeaderboard();
}

// LEADERBOARD
function updateLeaderboard() {
  const leaderboard = document.getElementById("userEntry");
  leaderboard.innerHTML = `${userName} · ${totalScore} points`;
}
