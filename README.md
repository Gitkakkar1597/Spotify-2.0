# YouTube Clone

A modern YouTube clone application built with React and MUI (Material-UI). This app mimics core YouTube features, including video searching, detailed video views, and channel browsing.

See Live Demo - https://brilliant-empanada-ba6d3f.netlify.app/

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [File Structure](#file-structure)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)

## Features

- **Home Feed**: Browse a feed of videos.
- **Search**: Search for videos by keywords.
- **Video Detail**: View detailed information about a specific video.
- **Channel Detail**: View details about a channel.
- **Responsive Design**: Fully responsive layout for desktop and mobile devices.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: React component library for faster and easier web development.
- **React Router**: Declarative routing for React.js applications.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **YouTube Data API**: API used to fetch video and channel data.
- **Environment Variables**: Managed with `.env` for secure API key storage.

## Setup

### Prerequisites

- Node.js and npm installed on your local machine.
- An API key from RapidAPI for accessing the YouTube Data API.

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Gitkakkar1597/YouTube-Clone
    cd youtube-clone
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Setup Environment Variables**

    Create a `.env` file in the root directory of the project and add your RapidAPI key:

    ```env
    REACT_APP_RAPID_API_KEY=your_actual_api_key_here
    ```

4. **Start the Development Server**

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## File Structure

```plaintext
src/
│
├── components/
│   ├── ChannelCard.jsx
│   ├── ChannelDetail.jsx
│   ├── Feed.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── SearchFeed.jsx
│   ├── Sidebar.jsx
│   ├── VideoCard.jsx
│   └── VideoDetail.jsx
│   └── Videos.jsx
│
├── utils/
│   ├── constants.js
│   └── fetchFromAPI.js
│
├── App.js
├── index.js
└── index.css
```

## Usage

1. **Home Feed**: The landing page displays a list of videos fetched from the API.

2. **Search**: Use the search bar to find videos. Results are displayed on the search feed page.

3. **Video Detail**: Click on a video to view detailed information, including views and likes.

4. **Channel Detail**: Click on a channel to view information about the channel.

## API

The application fetches data from the [YouTube Data API](https://rapidapi.com/youtube/api/youtube-v31) via RapidAPI.

### Endpoints

- **Search**: `GET /search?part=snippet&q={searchTerm}`
- **Video Details**: `GET /videos?part=snippet,statistics&id={videoId}`
- **Related Videos**: `GET /search?part=snippet&relatedToVideoId={videoId}&type=video`

### Configuration

The API key is configured in the `.env` file as `REACT_APP_RAPID_API_KEY`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.
