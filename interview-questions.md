# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: All RESTful routes other than index, edit and new.
Show: you will be retrieving the param
create: you will be adding a param(s)
update: you will be modifying the params
destory: you will be deleting the params

Researched answer: Specific params required depends on the nature o the operation being performed. With index, params might be used to specify filters.

3. Name three rails generator commands. What is created by each?

Your answer:
Model: rails g Modelname attribute:datatype
  - creates a model file, creates a database mirgration file
Controller: rails g controller Controllername
  - creates a controller for actions also known as methods
Migrate: rails g migration Migrationname
  - creates a migration file to is used to make changes to the schema/database

Researched answer:
Model: rails g Modelname attribute:datatype
  - creates a model file, creates a database mirgration file
    - app/model
  - can specifiy attributes and their data types
Controller: rails g controller Controllername
  - creates a controller for actions also known as methods
    - app/controllers, also creates an app/views
Migrate: rails g migration Migrationname
  - creates a migration file to is used to make changes to the schema/database
    - db/migrate

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
- index
  - retreive and display a list of ALL students
action: "POST" location: /students
- create
  - creates new student
action: "GET" location: /students/new
- new
  - render a form for creating a new student 
action: "GET" location: /students/2
- show
  - show details of a specific student
action: "GET" location: /students/2/edit
- edit 
  - make changes to a student
action: "PATCH" location: /students/2
- update
  - updating the student record, similar to create action
action: "DELETE" location: /students/2
- destroy
  - deletes student
5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

Story 1: Creating a Game

As a Game Enthusiast, I want to add a new video game to my collection, so I can keep track of the games I own.

Branch: game-creation

Story 2: Viewing All Games

As a Game Enthusiast, I want to view a list of all the video games in my collection, so I can see an overview of my game library.

Branch: game-list

Story 3: Viewing a Single Game

As a Game Enthusiast, I want to view detailed information about a specific video game in my collection, so I can learn more about it.

Branch: game-details

Story 4: Updating a Game

As a Game Enthusiast, I want to update the information of a video game in my collection, so I can keep my library up to date.

Branch: game-update

Story 5: Deleting a Game

As a Game Enthusiast, I want to remove a video game from my collection, so I can manage my library more efficiently.

Branch: game-deletion

Story 6: Creating a Game Developer Table

As a Game Enthusiast, I want to create a table to store information about video game developers, so I can track the creators of my favorite games.

Branch: developer-table-creation

Story 7: Adding a Game Developer

As a Game Enthusiast, I want to add a new game developer to the database, so I can associate developers with the games they've created.

Branch: developer-creation

Story 8: Updating a Game Developer

As a Game Enthusiast, I want to update the information of a game developer in the database, so I can keep developer details up to date.

Branch: developer-update

Story 9: Deleting a Game Developer

As a Game Enthusiast, I want to remove a game developer from the database, so I can manage developer records efficiently.

Branch: developer-deletion

Story 10: Associating Games with Developers

As a Game Enthusiast, I want to associate video games with their respective developers, so I can easily access information about the creators of each game.

Branch: game-developer-association