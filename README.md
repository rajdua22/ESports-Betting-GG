# Esports Betting

## Project Outline v.1
This version will include three e-sports (Counter-Strike: Global Offensive, Dota 2 and League of Legends).

Each type of sport/esport will have its own module/component.

### Electron

- Login Page (OPTIONAL)
    - Provides basic login/sign up functions to the sql server

- Matches Page
    - Defaults to be CS:GO, have a menu to choose from CS:GO and LOL
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

### Backend (can be implemented in Electron too) (OPTIONAL!!)

- Login/Sign up
- Database: MySQL
- user Table:

| user_id | username | password |
| ------ | ------ | ------ |
| 1 | tony1023 | password |

- user_teams Table:

| user_id | team_name | game_type |
| ------ | ------ | ------ |
| 1 | 'Natus Vincere' | 1 |


 
