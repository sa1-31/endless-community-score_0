let totalScore = 0;
const completedTasks = {};

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

  updateScore();
}

function updateScore() {
  document.getElementById("scoreValue").innerText = totalScore;
}

// MENU / TAB LOGIC
function openTab(tabId, button) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.add("hidden");
  });

  document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  document.getElementById(tabId).classList.remove("hidden");
  button.classList.add("active");
}
