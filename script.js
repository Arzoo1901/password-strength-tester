const input = document.getElementById("passwordInput");
const message = document.getElementById("strengthMessage");
const criteria = {
  length: document.getElementById("length"),
  upper: document.getElementById("upper"),
  lower: document.getElementById("lower"),
  number: document.getElementById("number"),
  special: document.getElementById("special"),
};

function updateCriterion(id, passed) {
  const element = document.getElementById(id);
  const icon = element.querySelector(".icon");
  if (passed) {
    element.className = "valid";
    icon.textContent = "✔️";
  } else {
    element.className = "invalid";
    icon.textContent = "❌";
  }
};

async function generateReport() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Extract data
  const password = document.getElementById("passwordInput").value;
  const masked = password.length ? "*".repeat(password.length) : "(none)";
  const strength = document.getElementById("strengthMessage").innerText.replace(/[^\x20-\x7E]/g, "").trim();

  let crackText = document.getElementById("crackTime").innerText.replace(/[^\x20-\x7E]/g, "").replace("Estimated crack time:", "").trim() || "Not available";
  crackText = crackText.replace("Estimated crack time:", "").trim();

  const criteriaLabels = {
    length: "At least 8 characters",
    upper: "At least one uppercase letter",
    lower: "At least one lowercase letter",
    number: "At least one number (0–9)",
    special: "At least one special character"
  };

  const criteriaList = Object.entries(criteriaLabels).map(([id, label]) => {
    const passed = document.getElementById(id).classList.contains("valid");
    return { status: passed ? "Passed" : "Failed", label };
  });

  // PDF Layout
  let y = 20;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Password Security Report", 20, y);
  y += 10;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  const date = new Date().toLocaleString();
  doc.text(`Date Generated: ${date}`, 20, y);
  y += 10;

  doc.text(`Password (masked): ${masked}`, 20, y); y += 10;
  doc.text(`Strength Level: ${strength}`, 20, y); y += 10;
  doc.text(`Estimated Crack Time: ${crackText}`, 20, y); y += 10;

  // Divider
  doc.setDrawColor(180);
  doc.line(20, y, 190, y);
  y += 10;

  // Criteria Breakdown
  doc.setFont("helvetica", "bold");
  doc.text("Criteria Breakdown", 20, y); y += 10;

  doc.setFont("courier", "normal");
  criteriaList.forEach(item => {
    const status = item.status.padEnd(10);
    const line = `${status} | ${item.label}`;
    doc.text(line, 25, y);
    y += 8;
  });

  // Footer
  y += 15;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.text("Note: This PDF is auto-generated. No passwords are stored or transmitted.", 20, y);

  // Save PDF
  doc.save("password-security-report.pdf");
};

function prepareReport() {
  generateReport();
};
input.addEventListener("input", () => {
  // rest of your logic...
});


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
  updateCriterion(key, checks[key]);
  if (checks[key]) score++;
  };


  // Strength message
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

// Add estimated crack time
const result = zxcvbn(pwd);
const crackTime = result.crack_times_display.offline_slow_hashing_1e4_per_second;
document.getElementById("crackTime").innerText = `🕒 Estimated crack time: ${crackTime}`;
});

