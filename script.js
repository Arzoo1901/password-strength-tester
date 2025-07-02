const input = document.getElementById("passwordInput");
const message = document.getElementById("strengthMessage");
const criteria = {
  length: document.getElementById("length"),
  upper: document.getElementById("upper"),
  lower: document.getElementById("lower"),
  number: document.getElementById("number"),
  special: document.getElementById("special"),
};

input.addEventListener("input", () => {
  const pwd = input.value;
  let score = 0;

  // Criteria checks
  const checks = {
    length: pwd.length >= 8,
    upper: /[A-Z]/.test(pwd),
    lower: /[a-z]/.test(pwd),
    number: /[0-9]/.test(pwd),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
  };

  // Update UI
  for (let key in checks) {
    criteria[key].className = checks[key] ? "valid" : "invalid";
    if (checks[key]) score++;
  }

  // Strength message
  const strengthText = [
    "❌ Very Weak",
    "🔴 Weak",
    "🟠 Moderate",
    "🟡 Good",
    "🟢 Strong",
    "🟢✅ Very Strong"
  ];
  message.innerText = strengthText[score];
  message.style.color = ["#ff4444", "#ff5544", "#ffaa00", "#cccc00", "#00ff66", "#00ffcc"][score];
});

const toggle = document.getElementById("showPassword");

toggle.addEventListener("change", () => {
  input.type = toggle.checked ? "text" : "password";
});
