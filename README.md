## Tweet Cards

This is a React web application created using Create React App. It displays user cards and allows users to follow or unfollow each other. The application uses Redux for state management, Axios for HTTP requests, and Styled Components for styling.

### Features
- Displays user cards with avatars, user names, tweets, and followers
- Allows users to follow or unfollow each other
- Persists following state and follower count on page refresh
- Uses a mock API to fetch and update user data

### Installation
1. Clone the repository: `git clone https://github.com/Slapchenko/tweet-cards.git`
2. Change into the project directory: `cd tweet-cards`
3. Install dependencies: `npm install`

### Usage
1. Start the development server: `npm start`
2. Open http://localhost:3000 in a web browser.

### API
The application uses the mockapi.io service to simulate a backend API for fetching and updating user data.

The users resource is used to retrieve and update user data. The resource has the following properties:

- id (string): a unique identifier for the user
- user (string): the user's name
- tweets (string): the user's tweet
- followers (number): the number of followers the user has
- avatar (string): the URL of the user's avatar image

### Contributing
Contributions to this project are welcome. If you find a bug or have a feature request, please open an issue.

### License
This project is licensed under the MIT License. See the LICENSE file for details. 
