### GameHub

GameHub is a video game discovery web application designed to help players explore and find exciting new games to play. It leverages a free, public RESTful API to fetch detailed game data from multiple platforms — including PC, Xbox, PlayStation, and Nintendo

#### Key Features

1. Chakra UI Integration – Provides a modern, accessible, and consistent styling system.

2. Responsive Layout Design – Ensures seamless user experience across devices and screen sizes.

3. Color Mode Toggle – Allows users to switch effortlessly between light and dark themes.

4. Custom Data Fetching Hook – Retrieves game data efficiently from the RAWG API.

5. Enhanced User Experience – Includes loading skeletons for smoother content transitions.

6. Genre and Platform Filtering – Enables users to refine their game discovery experience.

7. Search Functionality – Supports searching for games by name for quicker navigation.

#### Technology Stack

- React for building components
- Vite for optimized builds, and instant hot module replacement
- TypeScript for type-safe, maintainable, and scalable code

#### Setup Instructions

Follow the following steps to run this project locally

1. **Fork** the repository to your Github account.

2. **Clone** the forked repository to your local machine
   ```bash
     git clone https://github.com/atuyabirisi/game_hub.git
   ```
3. **Install Dependencies** - run the following command at the root of the project
   ```bash
     npm install
   ```
4. **Configure Environment Variables**
   Create a .env file at the root of the project and set the following variables

   ```bash
     VITE_RAWG_API_KEY=<get_it_from_rawg_api>
   ```

5. **Run the Application locally**
   ```bash
    npm run dev
   ```

#### Deployment url

[deploment url](https://game-hub1.onrender.com/)
