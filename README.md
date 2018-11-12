# Esports Betting

## Project Outline v.1
This version will include two e-sports (Counter-Strike: Global Offensive and League of Legends) and one sport (NBA).

Each type of sport/esport will have its own module/component.

### Electron Frontend

- Login Page
    - Provides basic login/sign up functions to the Node.js backend
    - Ask about which one is the favorite sport

- Matches Page
    - This will be game-type specific
    - Displays matches that users can click to see details (match detail page)
    - Can have a simple layout that displays upcoming/ongoing matches info w/ or w/o the current scores. The page should also provide functionality to query upcoming matches by team.
    - User (if logged in) can click on the team they are following

- Match Detail Page
    - Shows the current score, start betting odds and real time odds.
    - The odds will be fetched from APIs or scraped from large Websites here
    - Should include hyperlinks to the real betting sites
    - Might offer some recommendations concerning the betting odds

- Team Profile Page
    - Displays the teams upcoming matches
    - Allows the user (if logged in) to follow

### Node.js Backend

- Login/Sign up
- User schema (if we decided to use MongoDB)
```javascript
{
    username: "username",
    password: "password",
    favorite: "LOL",
    LOLTeams: [],
    CSGOTeams: [],
    NBATeams: []
}
```