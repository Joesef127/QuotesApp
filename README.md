# QuoteApp Documentation

## Introduction

QuoteApp is a web application that allows users to browse and interact with a collection of quotes fetched from an external API. Users can filter quotes by date or author, sort quotes by ID or author, and view details of each quote.

## Features

### 1. Fetch Quotes
- The application fetches a collection of quotes from the [Quotable API](https://api.quotable.io/quotes) upon loading.

### 2. Filter by Date
- Users can filter quotes by selecting a specific date from a dropdown menu.
- Quotes will be filtered to display only those that were added on the selected date.

### 3. Filter by Author
- Users can filter quotes by selecting a specific author from a dropdown menu.
- Quotes will be filtered to display only those authored by the selected author.

### 4. Sort Quotes
- Users can sort quotes by ID or author in ascending order.

### 5. View Quote Details
- Each quote is displayed with its unique ID, content, author, and date added.

## File Structure

The project is organized as follows:

- **`src`**: This folder contains the source code for the QuoteApp.
  - **`App.js`**: The main component of the application. It contains the logic for fetching quotes, filtering, sorting, and rendering the UI.
  - **`quoteService.js`**: A utility module for interacting with the Quotable API. It contains functions for fetching quotes from the API.
  - **`css`**: This folder contains CSS files for styling the application.
  - **`index.css`**: Global CSS styles applied to the entire application.
- **`public`**: This folder contains static assets and the HTML template for the application.

## Setup Instructions

To run the QuoteApp locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open your browser and visit `http://localhost:3000` to view the application.

## Dependencies

The QuoteApp relies on the following dependencies:

- **`react`**: A JavaScript library for building user interfaces.
- **`react-dom`**: Provides DOM-specific methods for React components.
- **`react-scripts`**: A set of scripts and configuration used by Create React App.

## Testing

Testing for the QuoteApp can be done using React Testing Library or other testing frameworks. Test files can be created in the `src` directory and run using the appropriate testing commands.

## Support

For any questions, issues, or feedback, please contact [Adegboladayor@gmail.com](mailto:Adegboladayor@gmail.com).
