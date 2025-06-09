# Incubyte

# 🧮 String Calculator - TDD Kata

This repository contains a solution to the **String Calculator TDD Kata**, a popular programming exercise designed to practice **Test-Driven Development (TDD)**. The goal is to build a string-based calculator that can add numbers provided in a variety of formats.

---

## 📌 Requirements

The following features have been implemented:

- ✅ Return `0` for an empty string
- ✅ Return the number for a single number input
- ✅ Return the sum for two or more comma-separated numbers
- ✅ Support new line (`\n`) as a delimiter
- ✅ Support custom single-character delimiters (e.g., `//;\n1;2`)
- ✅ Throw an exception for negative numbers with all negative values in the message
- ✅ Handle an unknown quantity of numbers

---

## 🛠️ Tech Stack

- **Language:** JavaScript (Node.js)
- **Testing Framework:** [Jest](https://jestjs.io/)

---

## 📁 Project Structure

string-calculator-kata/
├── stringCalculator.js # Main calculator logic
├── stringCalculator.test.js # Jest unit tests
├── package.json
└── README.md
