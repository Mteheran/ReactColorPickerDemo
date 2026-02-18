# 🎨 React Color Picker Demo

A simple, interactive color picker application built with React that demonstrates the use of **props** and **component state** to dynamically change colors on the screen.

[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Azure Static Web Apps CI/CD](https://github.com/Mteheran/ReactColorPickerDemo/actions/workflows/azure-static-web-apps-mango-flower-00e2aa010.yml/badge.svg)](https://github.com/Mteheran/ReactColorPickerDemo/actions)

> 🌐 [Versión en Español](README_ES.md)

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Demo](#-demo)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Built With](#-built-with)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📌 About the Project

This project is a beginner-friendly React application that showcases how to use **props** and **state** to build interactive UI components. Users can click on colored buttons (🔵 blue, 🟢 green, 🔴 red, 🟡 yellow) to change the background color of a display container in real time.

It is ideal for developers learning:

- React component composition
- Passing data via **props**
- Managing **state** with class components
- Event handling in React

---

## 🚀 Demo

Once running, the app displays a header with the React logo and a color picker section. Click any of the four color buttons to instantly update the display area:

| Action | Result |
|---|---|
| Click 🔵 Blue button | Container turns **blue** |
| Click 🟢 Green button | Container turns **green** |
| Click 🔴 Red button | Container turns **red** |
| Click 🟡 Yellow button | Container turns **yellow** |

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** (v12 or higher recommended)
- **npm** (comes with Node.js) or **yarn**

> 💡 You can verify your installation by running:
> ```bash
> node --version
> npm --version
> ```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mteheran/ReactColorPickerDemo.git
   cd ReactColorPickerDemo
   ```

2. **Install dependencies:**

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

### Running the App

Start the development server:

```bash
npm start
```

Or with yarn:

```bash
yarn start
```

The app will open automatically at [http://localhost:3000](http://localhost:3000) in your default browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm start` | 🚀 Runs the app in development mode at `localhost:3000` |
| `npm run build` | 📦 Creates an optimized production build in the `build/` folder |
| `npm test` | 🧪 Launches the test runner in interactive watch mode |
| `npm run eject` | ⚠️ Ejects the Create React App configuration (irreversible) |

---

## 📁 Project Structure

```
ReactColorPickerDemo/
├── public/
│   ├── favicon.ico          # App icon
│   ├── index.html           # HTML template
│   └── manifest.json        # PWA manifest
├── src/
│   ├── App.css              # Styles for the app and color picker
│   ├── App.js               # Main component with ColorPicker logic
│   ├── App.test.js          # Basic render test
│   ├── index.css            # Global styles
│   ├── index.js             # Application entry point
│   ├── logo.svg             # React logo
│   └── registerServiceWorker.js  # Service worker for offline support
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ How It Works

The application is composed of two key components defined in `src/App.js`:

1. **`ColorContainer`** — A functional component that receives a `color` prop and applies a corresponding CSS class to render a colored box.

2. **`ColorPicker`** — A class component that manages the currently selected color in its internal **state**. When a user clicks one of the four color buttons, the state updates and the `ColorContainer` re-renders with the new color.

```
User clicks button → setState({ color }) → ColorContainer re-renders → New color displayed
```

---

## 🛠️ Built With

- [React](https://reactjs.org/) `17.0.2` — JavaScript library for building user interfaces
- [React DOM](https://reactjs.org/docs/react-dom.html) `17.0.2` — DOM-specific methods for React
- [Create React App](https://create-react-app.dev/) — Toolchain for bootstrapping React applications
- [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static) — CI/CD and hosting

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

Feel free to open an [issue](https://github.com/Mteheran/ReactColorPickerDemo/issues) if you find a bug or have a suggestion.

---

## 📄 License

This project is open source and available under the [MIT](LICENSE) license.

---

_Originally written and maintained by contributors and [Devin](https://app.devin.ai), with updates from the core team._
