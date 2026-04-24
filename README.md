# 🧳 JobBoard NZ

A modern job board web app built with React, featuring advanced search and filtering.

## 🚀 Live Demo
> [View Live App](https://97chopra.github.io/job-board-app/)

## ✨ Features
- 🔍 Search by job title, skill or company name
- 📍 Filter by location with remote-only toggle
- 💼 Filter by job type (Full-time, Part-time, Contract, Internship)
- 🎯 Filter by experience level (Entry, Mid, Senior)
- 🗂️ Filter by category (Technology, Design, Data & AI, etc.)
- 💰 Salary range slider (min & max)
- 🏷️ Active filter chips with individual remove buttons
- 📊 Live results count that updates as filters change

## 🛠️ Tech Stack
- React 18
- Vite
- React Router DOM
- Custom Hooks (useJobFilter)
- CSS3

## 📁 Project Structure
src/
├── components/       # Reusable UI components
│   ├── JobCard.jsx
│   ├── SearchBar.jsx
│   ├── FilterPanel.jsx
│   ├── SalarySlider.jsx
│   └── ActiveFilterChips.jsx
├── pages/            # Full page components
│   └── HomePage.jsx
├── hooks/            # Custom React hooks
│   └── useJobFilter.js
└── data/             # Mock job data
└── jobs.js
## ⚙️ Getting Started

```bash
# Clone the repo
git clone https://github.com/97chopra/job-board-app.git

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

## 👩‍💻 Author
**Aarti** — Final year Software Programming & Data Science AI student at AUT
- GitHub: [@97chopra](https://github.com/97chopra)