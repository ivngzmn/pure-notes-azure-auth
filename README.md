# Pure ToDo App

A ToDo app with Azure AD authentication with use of MongoDB Atlas. Users can login to their profile and find their list of tasks. They can add new tasks through an input, which they can then edit or delete all tasks in their profile.

**Link to project:**(https://todo-auth-mvc.herokuapp.com/)

![app image](https://res.cloudinary.com/dbr8xxx2m/image/upload/v1629097193/project-images/todo-app_i9b4ra.gif)

## How It's Made:

**Tech used:** HTML, TailwindCSS, EJS, MongoDB Atlas, Node, Microsoft Azure AD & Heroku

Although it was a simple site to start building in regards to the JavaScript and get the logic going once the backend came in it was tricky to complete. It was my first time building a web app that included a database and authentication. With MongoDB Atlas it was nice and straightforward to set up and get things communicating with my developer build. Once I got to authentication with Microsoft Azure Active Directory it got really hard as there are quite a few steps required to get the web app working such as registering your application. Honestly the hardest part was deploying the web app to Heroku. But once I figured out that I needed to add all my environment variables to Heroku it was smooth sailing from there.

At a later point I will add more features such as sections for different tasks due at different intervals.

## Lessons Learned:

Heroku has a learning curve to set up properly, but once you successfully deploy your project and add the github continuous deployment it is a breeze to make changes. Also Azure AD is tricky and I may want to use Auth0 on future projects that need authentication.

## Examples:

Take a look at these couple examples that I have in my own portfolio:
**Markdown Editor:** https://github.com/ivngzmn/react-markdown-editor

**Pomodoro App:** https://github.com/ivngzmn/react-pomodoro-app

**Rock Paper Scissors Game:** https://github.com/ivngzmn/TOP-Rock-Paper-Scissors
