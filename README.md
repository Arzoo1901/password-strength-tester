# 🔐 Password Strength Tester

A clean, beginner-friendly web app that checks password strength in real time and provides professional feedback, including PDF report generation.

---

## 🚀 Features

- ✅ Real-time password strength analysis  
- ✅ Visual feedback with icons and color indicators  
- ✅ PDF report generation with criteria breakdown  
- ✅ Show/hide password toggle  
- ✅ Clean, responsive, cyber-themed UI (dark mode by default)   

---

## 📚 What You'll Learn

- JavaScript DOM manipulation  
- Password validation using regular expressions  
- Password entropy estimation using zxcvbn  
- PDF generation using jsPDF  
- UX patterns for password forms

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- jsPDF (for PDF export)  
- zxcvbn (password crack time estimation)

---

## 📂 Folder Structure

```
password-strength-tester/
├── index.html         # Main HTML file
├── style.css          # Styling and layout
├── script.js          # Password logic and PDF export
├── screenshot.png     # Optional preview image
└── README.md          # Project documentation (this file)
```

---

## 🎮 How to Use

1. **Clone or Download** this repository  
2. Open `index.html` in your browser (via Live Server or a static server)  
3. Type a password to see strength and criteria in real-time  
4. Click “📝 Generate Security Report” to download a summary PDF

---

## 📏 Password Strength Criteria

Each of the following improves password score:

| Rule              | Description                           |
|-------------------|---------------------------------------|
| ✅ Length         | At least 8 characters                 |
| ✅ Uppercase      | At least one capital letter (A–Z)     |
| ✅ Lowercase      | At least one lowercase letter (a–z)   |
| ✅ Number         | At least one digit (0–9)              |
| ✅ Special Char   | At least one special character (!@#…) |

---

## 🌈 Password Strength Levels

| Score | Level         | Color        |
|-------|---------------|--------------|
| 0     | ❌ Very Weak   | 🔴 Red        |
| 1     | 🔴 Weak        | 🔴 Red        |
| 2     | 🟠 Moderate    | 🟠 Orange     |
| 3     | 🟡 Good        | 🟡 Yellow     |
| 4     | 🟢 Strong      | 🟢 Green      |
| 5     | ✅ Very Strong | 💚 Cyan Green |

---

## ✨ Features of report
- PDF report now includes:
  - Date
  - Masked password
  - Strength level
  - Estimated crack time
  - Full criteria breakdown  


---

## 🌐 Live Demo

[Click here to view the live project](https://Arzoo1901.github.io/password-strength-tester/)

---

## 👤 Author

**Arzoo**  

---

## 📄 License

MIT License — Free for personal or commercial use.
