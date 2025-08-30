# PhishSafe - Phishing Awareness Training App

PhishSafe is an interactive phishing awareness training web Application designed to educate users about phishing attacks, how to recognise suspicious emails/websites, and best practices to stay safe online.
I got this idea since I am studying a bachelors degree in cybersecurity and forensic audit and my dream has been to integrate cybersecurity and software engineering to address cyber threats.

# Live Demo
[PhishSafe_on_Vercel] (https://phish-code-fe-capstone.vercel.app/)

# Features
**Interactive Slides** – Step-by-step phishing awareness lessons with clean visuals.

**Educational Images** – Realistic examples of phishing emails and fake websites.

**Quizzes** – Test your knowledge with interactive multiple-choice quizzes.

**Responsive Design** – Works seamlessly on desktop and mobile devices.

**Custom Styling** – Clean UI with styled components and animations.

# Tech Stack
- React.js – Frontend framework

- Vite – Fast build tool

- Tailwind CSS – Styling

- JavaScript (ES6+) – Logic and interactivity

- VS Code – Coding and Development environment

- Vercel – Deployment

# Project structure
```bash
PhishSafe/
├── public/
│   └── images/
│       ├── phishing1.png
│       ├── phishing2.png
│       ├── phishing3.png
│       └── ... (other training images)
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── NavigationButtons.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Slide.jsx
│   │   ├── Quiz.jsx
│   │   └── Result.jsx
│   │
│   ├── data/
│   │   ├── slidesData.js
│   │   └── quizData.js
│   │
│   ├── styles/
│   │   └── theme.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── Main.jsx
│   └── Readme.md
│
├── package.json
├── vite.config.js
├── index.html
└── ... (other config files: .gitignore, node_modules/, etc.)
```

## How this project was built
The PhishSafe app was developed using React + Vite in Visual Studio Code, and deployed on Vercel.

### Project Setup
```bash
# create project using Vite
npm create vite@latest phishing-awareness-training -- --template react

cd phishing-awareness-training

# install dependencies
npm install

```
### Development
 ```bash
 # Start local development server
npm run dev

```
- The app runs locally at: http://localhost:5173/

### Build
```bash
# Build for production
npm run build
```
- This generates a /dist folder containing optimized production files.

### Vite Configuration for Vercel Deployment

When I deployed PhishSafe to Vercel, I had to configure my vite.config.js file so that the app could resolve the correct base path during both development and production builds.

Here’s my vite.config.js:
```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/PhishCode_FE_Capstone',
});

```
- I used base: process.env.VITE_BASE_PATH || '/PhishCode_FE_Capstone' to make sure the app builds correctly depending on the environment.

- On Vercel, the environment variable VITE_BASE_PATH can be set dynamically, so the base URL adapts automatically.

- If the environment variable isn’t set, it defaults to '/PhishCode_FE_Capstone', which is the name of my GitHub repository that contains this project.

### default login credentials
- Username: admin
- Password: admin

## Clone Git Repository
```bash
https://github.com/RudoCoder/PhishCode_FE_Capstone.git

```
# Author
**Marvellous Rudo Makuwe**
Cybersecurity & Software Developer | Africa Youth Tech Innovator
