# Air Quality Frontend

## Project Overview

This project is a frontend application built to display air quality data fetched from the backend API. The frontend is developed using **React** It allows users to view air quality information for different New York City neighborhoods, including details about air quality indicators, measurements, and time periods. The data is fetched from the Air Quality API backend and displayed in a user-friendly interface.

We are using the following technologies:
- **React**: JavaScript library for building the user interface.
- **Node.js**: JavaScript runtime for running the frontend build process.
- **Docker**: For containerizing the frontend application.
- **Serve**: Static file server to serve the React app after building.

---

## Getting Started

Follow these steps to set up and run the Air Quality frontend application:

### 1. Clone the repository:
Start by cloning the repository to your local machine:
```bash
git clone https://github.com/murali16krishna/AirQualityFrontend.git
cd AirQualityFrontend
```

### 2. Build the Docker Image:
This application is containerized using **Docker**. Once you have cloned the repo, ensure Docker is installed and running before executing the build and run commands.

Build the Docker image using the following command:
```bash
docker build -t air-quality-frontend .
```

### 3. Run the Docker Container:
Start the frontend container and map the port to your local machine
```bash
docker run -p 3000:3000 --name air-quality-frontend-container air-quality-frontend
```
The React app will now be running on http://localhost:3000.

### 4. Access the Application:
Once the frontend is running, open your browser and go to http://localhost:3000 to access the application. The data fetched from the Air Quality API backend will be displayed in an interactive interface.

---

## Application Features

- **Home Page**: Displays all the air quality records in a paginated format. Users can navigate between different pages of records.
- **Search Bar**: Allows users to search for specific air quality indicators (e.g., Ozone, Nitrogen).
- **Filtering Options**: Provides users with the ability to filter air quality data by:
  - **GeoPlaceName**: Filter data by geoPlaceName/neighborhood (e.g., Manhattan, Brooklyn).
  - **Time Period**: Filter the data based on the time period (e.g., 2022, 2018).
- **Air Quality Data Cards**: Displays air quality data in a card format. Each card contains:
  - The name of the indicator.
  - Air Quality Index Value.
  - Measurement info.
  - The neighborhood and time period for which the data was collected.
- **Pagination**: The air quality data cards are displayed in a paginated format, allowing users to view the records in manageable chunks.

---

## Development Setup (Without Docker):
If you'd like to work on the project locally without using Docker, follow these steps:

### 1. Install Dependencies:
First, ensure you have **Node.js** and **npm** installed. Then, install the project dependencies:

```bash
npm install
```

### 2. Start the Development Server:
Run the development server with the following command:
```bash
npm run dev
```
The React app will now be running on http://localhost:5173.
