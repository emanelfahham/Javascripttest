# Javascripttest
<li>Simple app built using Nodejs </li>
Using MongoDb as a database
and Pug for writing   HTML syntax
styled using Bower and Bootstrap
I intitialized the app using npm init, created json file
required express, mongoose, pug and body-parser
I created the app routes and then refactored the code into separate files
for user authentication I installed passport and passport-local
I had a setback in login route and i tried to solve it numerous times but the deadline approached and I couldnt find the mistake
so I completed the rest of the task as best as I could
I wrote how the rest of the code should be written in case it worked as comments
I also did not know how to use acl package or similar packages
so i created a middleware of my own (ensureAuthenticated) ====>>

if the user is not logged in => cannot create post
if the post doesnt belong to the logged-in user => user cannot edit or delete post
all routes are stored in routes folder in two different files: users and articles
all pages are stored in views folder 
userSchema and articleSchema are stored in two different files in models folder;
finally I commited the app to github.


