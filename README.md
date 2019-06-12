# FlavorBase-ReactApp
Full-Stack Application for GA Unit 4 Project
Project Time: 5 Days

Built By:
* Mathew Talamantes
* Jose Carlos de la Colina Horta

Link to the project: https://flavorbase-app.herokuapp.com/

## Description

The goal of this project was to build a Full-Stack and Full CRUD app using React that pulls data from Ruby on Rails and Postgres as the API.

We came up with an app that allows the user to create, view, update, and delete entries posted to the site. Each entry gets stored in one of four tables in Postgres. These tables include contents from the beer, coffee, wine, and food categories. This means that each category has its own CRUD functionality. Each entry gets passed through a routing function that calls the appropriate method for CRUD.

We used conditional logic to show the entry form, favorites display, show entry, and display update form.

We chose to focus on the functionality of the app. If it were to have been a longer project, we would have had time to implement user authentication, personalized favorite collections, and a really great flavors input that would fetch data from previous entries in each category.

This project showed us how to navigate through some of React's capabilities. FlavorBase also allowed us to expand our team programming mindset by presenting us with several problems we had to work through as a team. We successfully and efficiently collaborated and developed a solution.

## Technologies Used

FlavorBase was built using JavaScript, React, Ruby on Rails, Ruby, Postgres, Node.js, HTML, CSS, Heroku, and Bootstrap.
The developer tools we used were Github, Zoom, Atom, Slack, and Google.

## Approach Taken

We used a flowchart to map out the components of React and help us with project flow. This helped us map out the user's navigation as well as the data movement.

We began the project by making sure we could get the API and React to communicate as intended. We then followed our flowchart for React and started building. As we went along, we added functionality, design, and other components needed.

FlowChart: https://docs.google.com/drawings/d/1tOutyqHJyTlWtMpWs2WHIlF4v1i0cgaREz3_x52cCkU/edit


## User Stories
User can view entries that have been posted in the categories of food, bear, wine, and coffee.

User can add their own entry into each of the four categories.

User can click on the title(brand) of each posted entry and display the information for that entry.

User can delete an entry once expanded.

User can click on the update entry and update the information for that given entry.

User can add and remove entries from their favorites. They can add them to their favorites by checking the entry as a favorite upon creation or add a posted entry to their favorites collection.

Users can create accounts and then log in to have access to increased functionality.  They can create a listing, edit or delete one.  

## Unsolved Problems
  *

## Improvement Opportunities
  * User Authentication for user-specific favorite list and update delete capabilities.
  * Drop-down menu that fetches flavors from previous entries
  * Images
