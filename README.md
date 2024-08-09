
# Book Glance

## Introduction

Book Glance is a React-based web application designed to help users discover and explore books using the Google Books API. The application features a clean and intuitive interface that allows users to search for books by various criteria. Users can view detailed information about each book, including titles, authors, publishers, and preview links. With Book Glance, users can easily find their next read and access additional resources about their favorite books.

![Book Glance](./page.png)

## How to Run the App

### Prerequisites

1. **Node.js**: Ensure that Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. **Git**: Make sure Git is installed to manage your code repository. Download it from [git-scm.com](https://git-scm.com/).

3. **Google Books API**: Obtain an API key from Google Books to access their data. You can get the API key and documentation from [Google Books API](https://developers.google.com/books).

### Setup

1. **Clone the Repository**

   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/arunsah10/Book-Glance.git
   ```

2. **Navigate to the Project Directory**

   Change to the project directory:

   ```bash
   cd Book-Glance
   ```

3. **Install Dependencies**

   Install the required dependencies using npm:

   ```bash
   npm install
   ```

4. **Configure Environment Variables**

   Create a `.env` file in the root of the project directory and add your Google Books API key. It should look like this:

   ```
   REACT_APP_API_KEY=your_google_books_api_key
   ```

   Replace `your_google_books_api_key` with your actual API key.

5. **Run the Application**

   Start the development server with:

   ```bash
   npm start
   ```

   The application should now be running at `http://localhost:3000`.

## Application Purpose

Book Glance is designed to provide users with a comprehensive platform for book discovery and exploration. Key features include:

- **Search Functionality**: Allows users to search for books by title, author, or genre using the Google Books API.
- **Detailed Book Information**: Displays detailed information about each book, including the title, authors, publisher, and a preview link to read more.
- **Interactive Book Display**: Features a visually engaging book display with images and links to external resources for further reading.

This application is ideal for book enthusiasts who want a streamlined way to discover and learn more about books, as well as for developers interested in integrating with external APIs and building React applications.


**Author**: Arun Kumar Sah
**Copyright**: © 2024 Arun Kumar Sah. All rights reserved.
