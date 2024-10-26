
# Emojipedia

A simple **Emojipedia** project created using React.js, built and tested in CodeSandbox. This project demonstrates the use of React components and mapping concepts to display a list of emojis along with their meanings. It serves as a practice exercise in React fundamentals, focusing on component structure and dynamic rendering.

## Project Overview

This project features a selection of emojis, each with a brief description, displayed in a clean and organized format. The goal was to practice using React’s component-based architecture and data mapping to render lists effectively.

## Features

- **Emoji List**: Displays a curated list of emojis with their names and meanings.
- **Dynamic Mapping**: Uses the `.map()` function to dynamically render emoji data as individual components.
- **Reusable Components**: Emoji information is displayed using a reusable component structure.

## Tech Stack

- **Frontend**: React.js (JavaScript, HTML, CSS)
- **Platform**: Developed on CodeSandbox

## Project Structure

- **App.js**: Main component that aggregates and renders the list of emojis.
- **EmojiCard.js**: Reusable component responsible for rendering each emoji, along with its name and meaning.
- **emojipedia.js**: Data file containing an array of emoji objects, each with an emoji, name, and meaning.

## How It Works

1. **Data Setup**: Emoji data is stored in an array within `emojipedia.js`. Each emoji object includes:
   - **Emoji**: The symbol.
   - **Name**: The name of the emoji.
   - **Meaning**: A description of the emoji’s meaning.
   
2. **Dynamic Rendering**: In `App.js`, the `.map()` function iterates over the emoji data array and renders each emoji as an `EmojiCard` component, passing the necessary data as props.

## Setup

Since the project was initially developed in CodeSandbox, follow these steps to run it locally:

1. Download or clone the repository:
   ```bash
   git clone https://github.com/PranavNarain/Emojipedia.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the project:
   ```bash
   npm start
   ```

## Usage

- Open the app in your browser to view a list of emojis with their names and meanings displayed below each one.
- To add more emojis, simply update the `emojipedia.js` file with new entries.

## Learning Outcomes

- Enhanced understanding of React component design and props.
- Practical use of `.map()` for rendering lists dynamically.
- Experience with passing data as props to create reusable components.

## Future Enhancements

- Add a search functionality to filter emojis by keywords.
- Expand the emoji data set for a more comprehensive emoji library.
- Implement additional styling for improved user experience.

## License

This project is created for practice purposes and is open for contributions.

