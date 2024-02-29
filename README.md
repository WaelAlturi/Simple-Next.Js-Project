# Game of Thrones Character Viewer

This project is a Next.js application that fetches data from the ThronesAPI to display information about Game of Thrones characters. It includes two main pages:

1. **Home Page:** Lists all Game of Thrones characters with their full names and images.
2. **Character Page:** Provides detailed information about a specific character, including their family, full name, title, and an image.

## Demo

You can try the application [here](https://fetch-api-next-js-phi.vercel.app).

### Prerequisites

- Node.js installed on your local machine
- A modern web browser

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project_directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- Browse the list of Game of Thrones characters on the home page.
- Click on a character's name or image to view more details about that character.
- Use the "Back" link on the character page to return to the home page.

## Built With

- [Next.js](https://nextjs.org/) - A React framework for building server-side rendered and statically generated applications.
- [ThronesAPI](https://thronesapi.com/) - An API providing information about Game of Thrones characters.

## Folder Structure

- `app/`: Contains the Next.js pages and components.
  - `page.js`: The Home page component.
  - `[characterid]/`: Contains the Character page component.
  - `page.js`: The Character page component.
