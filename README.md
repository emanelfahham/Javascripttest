# Javascripttest
<li>Simple app built using Nodejs </li>
<li>Using MongoDb as a database
<li>and Pug for writing   HTML syntax
<li>styled using Bower and Bootstrap
<li>I intitialized the app using npm init, created json file
<li>required express, mongoose, pug and body-parser
<li>I created the app routes and then refactored the code into separate files
<li>for user authentication I installed passport and passport-local
<li>I had a setback in login route and i tried to solve it numerous times but the deadline approached and I couldnt find the mistake
<li>so I completed the rest of the task as best as I could
<li>I wrote how the rest of the code should be written in case it worked as comments
<li>I created a middleware of my own (ensureAuthenticated) ====>>

<li>if the user is not logged in => cannot create post
<li>if the post doesnt belong to the logged-in user => user cannot edit or delete post
<li>all routes are stored in routes folder in two different files: users and articles
<li>all pages are stored in views folder 
<li>userSchema and articleSchema are stored in two different files in models folder;
<li>finally I commited the app to github.

<h5> I discovered the problem
<li> All is fixed access control is utilized in the routes 
<li> deployed to github


