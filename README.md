CLOUDS project. <br />
Web App developed using react.<br />

**GNews**<br />
Reduce the time to get reliable information from various news sources on the topic the user is the most interested in<br /><br />

How the app works:<br />
The first page that appears is the Login page. From here you can register a new account (
clicking on SIGN UP) or do the login directly ( use email address:
“gabriele.gioetto@gmail.com” and a random password ). In the login there is a check if the
user exists in the database ( which is a local json file). If you register a new account, before
going into the main page, you will have to choose your interests, the format you want to
receive the news and the days and the time you want to receive the news.<br />
Once you click “Schedule”, all this information is stored in the user’s state. However the
homepage is rendered from a local json file, without filtering based on the user’s choices.
In the homepage, for each category there is a line with all the news related to that category.
If you click on the news, a dialog window opens up showing the title of the news and the
news text.<br />
In the bottom you can see all the newspapers. If you click on one of them, you can see all its
news.<br />
On the top right, you can click on the user’s avatar, and four options will appear: “My news”,
“My profile”, “My statistics”, “Logout”. My news is a link to the homepage. My profile will give
a recup of your choices when you registered. Your statistics instead will show some
information of your usage.<br />
Technologies used:<br />
● HTML, JSX, CSS<br />
● React<br />
● React component library Material UI<br />
● React Router<br />
● React Chart<br />
● Firebase Hosting<br /><br />
The webpage has been tested on localhost using the browser Google Chrome both on a
personal computer and a telephone.