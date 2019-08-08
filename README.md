# about-me

## User Stories

- As a student, I want to create an About Me page as a demonstration of my skills with HTML.
- As an eventual job-seeker, I want to get practice in creating a portfolio page so that I can make myself appealing to potential employers.
- As an eventual job-seeker, I would like for potential employers to quickly learn a few things about me, such as a short bio, my education, an overview of my job experience, and my goals.
- As a fun-loving human being, I want to give the visitors to my About Me page a guessing game that shows how fun-loving and interesting I am, and maybe include things about myself that would not ordinarily appear in a portfolio page.
- As a developer, I want to use markup to structure my index.html page, so the layout is in the order of assembly I prefer, with effective use of the markup possibilities offered by HTML.
- As a developer, I want to carefully design my scripts, so I can understand how to organize and write my code to achieve my goals in interactivity.
- As a developer, I want to create a simple script for my index.html page using JavaScript, so that I can use the browser to send a response to the user.
- As a developer, I want to receive and use the user's name, so that the program is personalized to their experience.
- As a developer, I want to provide five questions to the user, so that they can guess the answers and get to know me.
- As a developer, I want to notify the user after each question, so they are aware whether they were correct or not in their answers.
- As a developer, I want to be able to debug my code by using well structured console messages.
- As a developer, I want to manage my code through an online version control system, so I have the ability to work with others, manage my revisions, and keep a thorough record of my progress.

## New User Stories

- As a developer, I want to use thoughtful and descriptive `console.log()` statements throughout my code to help test my work and assist with debugging.
- As a developer, I want to convert some of my appropriate biographical elements into unordered lists, such as my education summary and/or my work experience.
- As a developer, I want to consider the user experience (UX) of my About Me and guessing game, trying to view it through the eyes of a user. Wait... maybe I should just write a user story for that...
- As an end user of the About Me and guessing game, I want to have an informative, interesting, and fun experience in learning about the developer.
- As a prospective job seeker, I want to consider adopting additional features that I have seen in the 'About Me' projects made by others, so that my 'About Me' can become more thorough and interesting than my original conception.
- As a prospective job seeker, I want to make myself more personable by adding a Top Ten list to the bottom of my About Me page with an ordered list in HTML, for instance, my Top Ten Favorite Movies or my Top Ten Places I Want to Visit, or something along those lines.
- As a prospective job seeker, I was to use CSS to creatively and tastefully style and layout my page.
- As a prospective job seeker, I want to have five yes/no questions in my "about me" guessing game so that I have enough questions to cover a variety of things about me.
- As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch this week?"), and indicates to the user whether the guess is "too high" or "too low", and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.
- As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array (for instance, "Can you guess a state that I have lived in besides Washington?"), so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
- As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."

## Feature Tasks

- Page content should include some information about me.
- In JavaScript prompt the user, using the `prompt()` method, for their name, and store the response in a variable in order to personalize output.
- Use the `confirm()` method to get responses where appropriate.
- In JavaScript use the `alert()` method to give responses to the page user.
- Use `console.log()` to clearly record the user input to the console.
- Make DRY first!  Not using functions yet be we can use arrays.  Since the five Yes/No questions use a common structure, use an arrays for questions, answers, user responses, feedback if correct, feedback if incorrect, next if correct, and next if incorrect.
- Use math.random() for question six.
- Count guesses for question six.  Limit to 4 attempts. Add 1 to correct answers iff guessed by the limit.
- Count guesses for question seven.  Limit to 6 attempts. Add 1 to correct answers iff guessed by the limit.

