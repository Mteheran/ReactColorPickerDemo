# ReactColorPickerDemo

Color picker demo using props.

## Description

Interactive React application that
allows users to select colors by
clicking buttons. The selected color
is displayed in a container below.

Available colors:
- Blue
- Green
- Red
- Yellow

## Technologies

- React 17
- JavaScript
- CSS
- react-scripts

## Prerequisites

- Node.js
- npm

## Installation

```bash
git clone https://github.com/Mteheran/ReactColorPickerDemo.git
cd ReactColorPickerDemo
npm install
```

## Usage

Start the development server:

```bash
npm start
```

Open http://localhost:3000
in your browser.

## Available Scripts

- `npm start` - Run dev server
- `npm run build` - Build for prod
- `npm test` - Run tests

## Project Structure

```
src/
  App.js        - Main components
  App.css       - Styles
  App.test.js   - Tests
  index.js      - Entry point
public/
  index.html    - HTML template
```

## Components

**ColorContainer** -
Functional component that displays
a colored box based on the `color`
prop received.

**ColorPicker** -
Component with color buttons.
Manages the selected color state
and renders the ColorContainer.

**App** -
Root component that renders the
header and the ColorPicker.

## License

This project is open source.
