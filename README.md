# SnapDish - Frontend

(Developer: Sharj Ahmed)

![Screenshot of Am I Responsive](/src/assets/readme/images/amiresponsive.png)

SnapDish is an Instagram-esque picture sharing social media site for users to share their food snaps. Users can share recipes or simply just post photos of their favourite snacks.

Users are able to sign up/sign in, create a post, like and comment another user's post and edit their profile username or picture.

This repository is the frontend of Snapdish which uses HTML, CSS, JavaScript, React & React Bootstrap.

## Deployed Link

- [SnapDish Frontend Deployed Link](https://snapdish-frontend-57cabaa4da7e.herokuapp.com/)

## Back End Links

- [SnapDish Backend Deployed Link](https://snapdish-backend-eb95a816e88d.herokuapp.com/)
- [SnapDish Backend GitHub Link](https://github.com/SharjAhmed/snapdish-backend)

## Table of Contents

- [User Experience (UX)](#user-experience--ux-)
  - [Project Goals](#project-goals)
  - [User Stories](#user-stories)
  - [Kanban Board](#kanban-board)
  - [Design](#design)
  - [Wireframes](#wireframes)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Future Features](#future-features)
- [Technologies Used](#technologies-used)
  - [Languages and Packages/Libraries Used](#languages-and-packages-libraries-used)
  - [Programs Used](#programs-used)
- [Testing](#testing)
  - [Validation Testing](#validation-testing)
  - [Manual Testing](#manual-testing)
  - [Bugs](#bugs)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Code](#code)
  - [Acknowledgements](#acknowledgements)

## User Experience (UX)

### Project Goals

- User Goals

  - Sign into my account or sign up for an account if I don't already have one.
  - Post images of my favoruite food.
  - Edit my posts.
  - View and edit my profile.
  - View other user's posts.
  - Like and comment on other user's posts.
  - Read what SnapDish is all about.
  - Sign out of my account when I'm done browsing.

- Site Owner Goals

  - Allow the user to be able to sign in to their account or sign up and create an account if not already registered.
  - Allow users to create a new post and edit an existing post.
  - Allow users to follow other user's profiles and view their posts.
  - Allow users to like and comment on other user's posts.
  - Allow users to read a summary of SnapDish.
  - Allow users to sign out of their account.

- Target Audience
  - This site is designed for anyone who loves food!
  - Designed to keep all ages engaged.

### User Stories

- Users:

  - Authentication

  1. As a user I can easily sign in so that I can quickly post, add more comments, or delete content if I wish.

  2. As a user I can easily log out so that I can have more security on my account.

  3. As a user I can sign up easily with just a username and password so that I have the ability to create posts or comments without having to share my email address.

  4. As a user I cannot edit/delete posts/comments/likes that are not mine so that I can be assured that my posts/comments/likes are protected and can only be changed by me.

  5. As a user I can only like/unlike other users' posts and comments so that I can only show my appreciation for other posts/comments and not cheat the system by liking my own posts/comments.

  6. As a user I cannot follow my own account so that my account reflects correctly when displaying follower counts.

  7. As a user I can view my logged in status so I know whether I need to sign in or not.

  8. As a user I can keep my logged in status so that I will not need to keep signing in when away from the site for a few hours, and can log out manually whenever I want to log out.

  - Posts

  1. As a user I can create new posts so that I can share images.

  2. As a user I can edit posts so that I can change my posts, whenever I change my mind about what I posted or wish to remove/change any details.

  3. As a user I can delete my posts so that I can get rid of my posts that I no longer want to share.

  4. As a user I can view the details of a post so that I can read more information about the post such as when it was created, who created it and any comments that are on the post.

  5. As a user I can like posts so that I can share my appreciation.

  6. As a user I can remove likes on a post if I change my mind about whether I like a post or not.

  - Comments

  1. As a user I can comment on a post so that I can share my thoughts about the post.

  2. As a user I can edit my comments so that can change what my comment says.

  3. As a user I can delete my comments on a post so that I can remove comments if I no longer want my comments to be public.

  4. As a user I can read comments on a post so that I can see what other users think.

  - Navigation

  1. As a user I can see the correct options on the navigation bar depending on my logged-in/out status so that I have the option to sign in or sign up when logged out, or have the option to create/view a post, view/edit my profile, sign out, etc when I'm logged in.

  2. As a user I can navigate through pages quickly so that I can view content smoothly without the pages being refreshed to help provide a smooth experience.

  3. As a user I can see the navigation bar at the top of every page so that I can easily navigate between pages.

  4. As a user I can keep scrolling down to see more posts so that I can consistently look at more posts without having to click onto the next page to view more.

  - Profile

  1. As a user I can view other user's avatars so that I can easily identify them.

  2. As a user I can view a detailed profile page of other users so that I can see their posts and follower/following information.

  3. As a user I can follow or unfollow other users so that I can see or choose to remove posts by specific users in my posts feed.

  4. As a user I can see the most followed profiles so that I will be able to see who the most popular profiles are.

  - General

  1. As a user I can search for post titles or usernames in a search box so that I can quickly find a specific post or user.

  2. As a user I can easily find the 'Summary' link in the nav bar so that I can read about SnapDish.

### Kanban Board

I used a kanban in GitHub Projects to help log my user stories. By doing this, I was able to keep on track.
I moved any tasks from Todo into In Progress as I worked on them, and then into Done once completed. I then moved onto the next set of tasks and followed the same steps until all the tasks were done.

![workflow1](/src/assets/readme/images/workflow1.png)
![workflow2](/src/assets/readme/images/workflow2.png)
![workflow3](/src/assets/readme/images/workflow3.png)

## Design

### Colour Scheme

![Colour Palette](/src/assets/readme/images/snapdish-palette.png)

This site uses a simple palette with the main accent of gold throughout the site.
I decided to go with this colour scheme as I wanted something that stood out and seemed cheery but not over the top.
I feel the gold brings a brightness to the site while the whites, greys, and black keep it simple.
The colour palette was created using [Coolors](https://coolors.co/).

### Typography

Ubuntu Light 300 was used from Google Fonts for the site.

![Ubuntu Google Fonts](/src/assets/readme/images/ubuntu-google-fonts.png)

I chose this font as it is a personal favourite of mine. It's simple yet has a bit of style to it.

### Logo

The logo was designed and created by my brother.
It shows a camera with a bite taken out of it to play in theme with the name and purpose of the site.

Several versions were created:

![Black Logo](/src/assets/logo-black.png)
![White Logo](/src/assets/logo-white.png)
![Gold Logo](/src/assets/logo-gold.png)
![Full Black Logo](/src/assets/logo-full-black.png)
![Full White Logo](/src/assets/logo-full-white.png)

But I decided to go with the black/gold logo as it stood out the most and looked the best against the navbar.

### Wireframes

- Wireframes were created with [Figma](https://www.figma.com/?fuid=)

### Website Feed:

![Desktop: Feed](/src/assets/readme/wireframes/feed.png)
![Mobile: Feed](/src/assets/readme/wireframes/feed-mobile.png)

### Create Post:

![Desktop: Create Post](/src/assets/readme/wireframes/create-post.png)
![Mobile: Create Post](/src/assets/readme/wireframes/create-post-mobile.png)

### Profile Page:

![Desktop: Profile Page](/src/assets/readme/wireframes/profile.png)
![Mobile: Profile Page](/src/assets/readme/wireframes/profile-mobile.png)

### Sign In & Sign Up:

![Desktop: Sign In](/src/assets/readme/wireframes/sign-in.png)
![Mobile: Sign In](/src/assets/readme/wireframes/sign-in-mobile.png)
![Desktop: Sign Up](/src/assets/readme/wireframes/sign-up.png)
![Mobile: Sign Up](/src/assets/readme/wireframes/sign-up-mobile.png)

## Features

### Existing Features

#### Navigation Bar

![Screenshot of Navbar](/src/assets/readme/screenshots/navbar.png)

![Screenshot of Navbar when Signed Out](/src/assets/readme/screenshots/navbar-signed-out.png)

![Screenshot of Navbar on Mobile Screens](/src/assets/readme/screenshots/navbar-mobile.png)

The navbar was created using React Bootstrap, incorporating conditional rendering to dynamically present various links based on the user's authentication status. For users who are not logged in, the displayed options include the ability to log in, sign up, and access the 'Summary' section of the website. Once logged in, users can view their username & avatar at the top of the screen, leading to a detailed page for editing their profile. Additional options for logged-in users encompass navigating to the 'Feed' to view posts from followed users, creating a new post, exploring liked posts, and logging out.

Ensuring constant accessibility, the navigation bar is fixed at the top, remaining visible even as users scroll down the website. React Router Dom facilitates seamless navigation between pages, enhancing the speed of the user experience. To signify the active page, the corresponding link is highlighted in gold, providing users with a clear indication of their location within the site.

Moreover, the navigation bar exhibits full responsiveness by transforming into a burger menu icon on smaller screens. For a streamlined logout process, a 'Log Out' link appears for signed-in users, simplifying their exit from the website. To enhance modularity, each link within the navbar is encapsulated in its own React file, contributing to a well-organized and maintainable code structure.

#### User stories covered:

1. As a user I can view my logged in status so I know whether I need to sign in or not.

2. As a user I can see the correct options on the navigation bar depending on my logged-in/out status so that I have the option to sign in or sign up when logged out, or have the option to create/view a post, view/edit my profile, sign out, etc when I'm logged in.

3. As a user I can navigate through pages quickly so that I can view content smoothly without the pages being refreshed to help provide a smooth experience.

4. As a user I can see the navigation bar at the top of every page so that I can easily navigate between pages.

5. As a user I can keep scrolling down to see more posts so that I can consistently look at more posts without having to click onto the next page to view more.

6. As a user I can easily sign in so that I can quickly post, add more comments, or delete content if I wish.

7. As a user I can easily log out so that I can have more security on my account.

8. As a user I can sign up easily with just a username and password so that I have the ability to create posts or comments without having to share my email address.

#### Summary Page

![Screenshot of Summary Page](/src/assets/readme/screenshots/summary.png)

The summary page for SnapDish serves as a lively and engaging introduction to the platform, emphasizing its role as a photo-sharing community for food enthusiasts. The purpose of this page is to capture the playful and light-hearted essence of SnapDish, enticing users to join a vibrant community where they can share their culinary adventures through captivating food snapshots.

#### User stories covered:

1. As a user I can easily find the 'Summary' link in the nav bar so that I can read about SnapDish.

#### Sign in/Sign up Page

![Screenshot of Sign in Page](/src/assets/readme/screenshots/sign-in.png)
![Screenshot of Sign in Validation](/src/assets/readme/screenshots/sign-in-validation.png)
![Screenshot of Sign up Page](/src/assets/readme/screenshots/sign-up.png)
![Screenshot of Sign in Validation 1](/src/assets/readme/screenshots/sign-up-validation-1.png)
![Screenshot of Sign in Validation 2](/src/assets/readme/screenshots/sign-up-validation-2.png)

The signin page and signup page are distinct sections where users can either sign in with an existing account or create a new account. Backend authentication and account creation are managed through Django all-auth. The signup page features form validation, requiring all fields to be completed. Additionally, users must input their password twice for confirmation. Users only need to provide a username and password, with no need to provide their email address.

Once users are signed in, their status persists for twenty-four hours, facilitated by axios interceptors. This ensures that users do not need to frequently log in, even after being away from the website for an extended period, thereby enhancing the overall user experience and engagement.

#### User stories covered:

1. As a user I can easily sign in so that I can quickly post, add more comments, or delete content if I wish.

2. As a user I can sign up easily with just a username and password so that I have the ability to create posts or comments without having to share my email address.

3. As a user I can keep my logged in status so that I will not need to keep signing in when away from the site for a few hours, and can log out manually whenever I want to log out.

#### Feed

![Screenshot of Feed](/src/assets/readme/screenshots/feed.png)
![Screenshot of Feed on Mobile Screen](/src/assets/readme/screenshots/feed-mobile.png)

On the feed, users will find a visible list of posts, sorted in descending order with the newest posts appearing first. Each post displays the number of likes or comments it has received, along with details such as the username and avatar of the user that created the post, the date of the post, post image, title, and content. 

Clicking on the avatar and username of the user allows users to access the profile page of the user who created the post, while clicking on the post image directs them to a detailed view of the post.

A search bar at the top enables users to search for posts based on title or user. Logged-in users have the additional capability to see a dropdown menu icons on their own posts, granting them access to edit or delete their posts. Clicking the 'delete' icon results in the removal of the post.

Logged-in users can also express their engagement by liking/unliking other users' posts using the heart icon. On desktop, the most followed users are visible on the right-hand side, and on mobile, they appear at the top of the page. These popular users are clickable, leading users to the respective profile pages.

The feed incorporates infinite scroll, allowing users to seamlessly scroll through posts without navigating between pages. This enhancement significantly improves user experience, enabling users to stay more engaged without the need for additional clicks. Comprising various React components, the feed includes React files for displaying Popular Users and listing all posts.

User stories covered:

1. As a user I cannot edit/delete posts/comments/likes that are not mine so that I can be assured that my posts/comments/likes are protected and can only be changed by me.

2. As a user I cannot like my own posts.

3. As a user I can edit posts so that I can change my posts, whenever I change my mind about what I posted or wish to remove/change any details.

4. As a user I can delete my posts so that I can get rid of my posts that I no longer want to share.

5. As a user I can view the details of a post so that I can read more information about the post such as when it was created, who created it and any comments that are on the post.

6. As a user I can like posts so that I can share my appreciation.

7. As a user I can remove likes on a post if I change my mind about whether I like a post or not.

8. s a user I can comment on a post so that I can share my thoughts about the post.

9. As a user I can see the navigation bar at the top of every page so that I can easily navigate between pages.

10. As a user I can keep scrolling down to see more posts so that I can consistently look at more posts without having to click onto the next page to view more.

11. As a user I can view other user's avatars so that I can easily identify them.

12. As a user I can follow or unfollow other users so that I can see or choose to remove posts by specific users in my posts feed.

13. As a user I can see the most followed profiles so that I will be able to see who the most popular profiles are.

14. As a user I can search for post titles or usernames in a search box so that I can quickly find a specific post or user.

#### Comments & Post Likes

![Screenshot of Comments](/src/assets/readme/screenshots/comment.png)
![Screenshot of Edit/Delete Options on own Comments](/src/assets/readme/screenshots/comment-edit-delete.png)
![Screenshot of No Comments](/src/assets/readme/screenshots/no-comments.png)
![Screenshot of Likes](/src/assets/readme/screenshots/likes.png)

In the detailed view of a post, all comments (sorted newest first) pertaining to that specific post are visible. Each comment displays the username, comment date, number of likes, and the user's avatar. Different messages are presented based on the user's logged-in status and the availability of comments.

If there are no comments, the comment section prompts the user to contribute a comment. Logged-in users have the ability to post a comment, including their content. Comment authors can view 'edit' and 'delete' icons. Clicking 'delete' removes the user's comment instantly. Selecting 'edit' allows users to modify their comments with the content form pre-populated.

Logged-in users have the ability to like other users' posts. Liking and unliking can be done from the homepage, detailed post view, or user profile page. Users can express their liking by clicking on the heart icon, which transforms to red when liked. Clicking the heart icon again will undo the like, reverting it to a colorless heart. If users attempt to like their own posts, a message will appear, stating that users cannot like their own posts.

All the posts that users have liked can be accessed through the "Liked Posts" link in the navbar.

#### User stories covered

1. As a user I can comment on a post so that I can share my thoughts about the post.

2. As a user I can edit my comments so that can change what my comment says.
    
3. As a user I can delete my comments on a post so that I can remove comments if I no longer want my comments to be public.

4. As a user I can read comments on a post so that I can see what other users think.

5. As a user I can like posts so that I can share my appreciation.

6. As a user I can remove likes on a post if I change my mind about whether I like a post or not.

#### Create Post Page

![Screenshot of the Create a Post Form](/src/assets/readme/screenshots/create-post-form.png)
![Screenshot of the Create a Post Form Validation 1](/src/assets/readme/screenshots/create-post-validation-1.png)
![Screenshot of the Create a Post Form Validation 2](/src/assets/readme/screenshots/create-post-validation-2.png)

When logged-in, users can create posts by selecting the 'Create a Post' link in the navbar. On the Create Post page, users can upload an image, provide a title, and add content. If a user attempts to submit the form without including a photo or title, messages will prompt the user to address the issue.

The image upload feature only accepts image files that are smaller than 2500px in width and height and less than 1MB, as configured in the backend for posts. If a user attempts to upload an image larger than the limits, they will receive an error message.

User stories covered:

1. As a user I can create new posts so that I can share images.

#### Follow

![Screenshot of Follow](/src/assets/readme/screenshots/follow.png)

Authenticated users can utilize the feature of following other users. Users will not find a follow button for their own profile since users cannot follow themselves. When a user is not already following another user, a 'Follow' button will be displayed next to the username. In contrast, if the user is already following someone, an 'Unfollow' button will be presented instead. Users can initiate the follow or unfollow action from the Popular Users section or on the profile pages of other users.

Users can navigate to the "Feed" link in the navigation bar to view posts for users they follow.

#### User stories covered:

1. As a user I cannot follow my own account so that my account reflects correctly when displaying follower counts.

2. As a user I can follow or unfollow other users so that I can see or choose to remove posts by specific users in my posts feed.

Profile Page

![Screenshot of Profile Page](/src/assets/readme/screenshots/profile.png)
![Screenshot of Profile Edit Menu](/src/assets/readme/screenshots/profile-menu.png)
![Screenshot of Username Edit](/src/assets/readme/screenshots/profile-username.png)
![Screenshot of Profile Image Edit](/src/assets/readme/screenshots/profile-image.png)
![Screenshot of Password Edit](/src/assets/readme/screenshots/profile-password.png)

On the detailed profile page, users can explore additional information about the profile, including their follower count, the number of users they follow, and the total posts they've shared. Users have the option to scroll infinitely to view all posts by the specific user. The profile page also allows users to like or unlike other users' posts.

When users view their own profile, a dropdown menu icon appears in the top right corner, providing options to change their username, update their profile image, or update their password. If users choose to modify their profile image, pre-populated fields allow changes to their avatar photo. In contrast, when viewing the detailed profile page of another user, the top right corner features a 'Follow' or 'Unfollow' button. Users can change their username, with immediate updates applying to all posts under the modified username. The form ensures the selection of a unique username, displaying a message if the chosen username already exists. Additionally, when users attempt to change their password, the form requires them to confirm by entering the new password twice.

User stories covered:

1. As a user I can view other user's avatars so that I can easily identify them.

2. As a user I can view a detailed profile page of other users so that I can see their posts and follower/following information.

3. As a user I can follow or unfollow other users so that I can see or choose to remove posts by specific users in my posts feed.

4. As a user I can see the most followed profiles so that I will be able to see who the most popular profiles are.

5. As a user I can keep scrolling down to see more posts so that I can consistently look at more posts without having to click onto the next page to view more.

### Future Features

- Future features I would like to implement are:

    - The option to like other users' comments.
    - The option to change the theme of the site (light/dark mode).
    - Introduce a tagging system, so users' can tag each other in comments.
    - Functionailty to be able to upload videos as well as images.
    - Functionality to be able to upload multiple images in a single post.
    - The ability to private message other users via a messaging system.

## Technologies Used

### Languages and Packages/Libraries Used

1. [React](https://reactjs.org/)

2. [HTML5](https://en.wikipedia.org/wiki/HTML5)

3. [CSS](https://en.wikipedia.org/wiki/CSS)

4. [JavaScript](https://www.javascript.com/)

5. [React Bootstrap](https://react-bootstrap.github.io/)

6. [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component)

7. [React Router](https://v5.reactrouter.com/web/guides/philosophy)

### Programs Used

1. [Git](https://git-scm.com/)

   - Git was used by utilizing the Gitpod terminal to commit to Git and Push to GitHub. Version control.

2. [GitHub](https://github.com/)

   - GitHub was used to store the project code after being pushed in by Git. Project repository linked with Heroku for deployment process. GitHub was also used to create the kanban board.

3. [Heroku](https://dashboard.heroku.com/login)

   - Heroku was used to deploy this project. Heroku's Postgres was used as the database.

4. [Figma](https://www.figma.com/?fuid=)

   - Figma was used to create the wireframes for the project.

5. [JSHint](https://jshint.com/)

   - JSHint was used to check my JavaScript code.

6. [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

   - W3C CSS validator used to check my CSS code.

7. [Axios](https://axios-http.com/)

   - Promise based http client for making http requests to the back end API

8. [Cloudinary](https://cloudinary.com/)

   - Cloudinary used to host the uploaded images.

9. [Font Awesome](https://fontawesome.com/)

    - Font Awesome was used for the Fredoka One and Raleway fonts.

10. [Google Fonts](https://fonts.google.com/)

    - Google Fonts was used for the fonts.

## Testing

### Validation Testing

- [JSHint](https://jshint.com/) was used to check my JavaScript code, no errors were found.

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) was used to check CSS code, no errors were found.

### Manual Testing

- Thorough manual testing has been conducted to validate the functionality of the website, ensuring that all features are working as intended. Multiple accounts were created, and various features were tested extensively. The testing process involved using different devices, seeking input from family members and friends to explore the website, and creating posts to evaluate performance. The following outlines the results obtained from the manual testing:

#### Navigation Bar, Footer, and Authentication Tests:

- The navigation bar correctly displays "Home," "About," "Sign Up," and "Login" links at the top when the user is logged out.
- The navigation bar correctly shows "Home," "Summary," "Feed," "Create a Post," "Liked Posts," and "Log out" links at the top when the user is logged in. Additionally, the navigation bar displays the current logged-in user's username and avatar alongside the logo.
- When users are logged in, the "Feed" link displays posts by users they follow.
- The navigation bar correctly collapses into a burger icon on smaller screens, toggles correctly, and untoggles when the user clicks away.
- The navigation bar remains fixed at the top of the page regardless of user scrolling.
- Clicking the "Liked Posts" link when logged in shows all the posts the user has liked.
- Clicking "Log out" successfully logs out the user, and users will know they are logged out as their username is no longer at the top.
- If a user logs in with incorrect details, they will be prompted with a message.
- If a user tries to sign up with any fields missing, they will be prompted with a message that fields need to be added.
- If a user attempts to sign up with two different passwords, they will be prompted with a message that their passwords do not match.

### Profile Tests

- Users are successfully able to access detailed profile URLs of the username they click.
- Logged-out users will not see any button to click in the detailed post page where the Follow/Unfollow/edit icons are.
- All posts by the user in their detailed profile page will show up. 
- Infinite scroll successfully works, displaying more than ten posts at a time.
- Users will see a "Follow" button for users they do not follow, and 'Unfollow' for users they already follow.
- Post likes functionality works the same when viewing posts on the detailed profile page of the user.
- Clicking on the image of the posts will still redirect the user to the detailed post page of the post.
- When users view their own profile page, they will see three icons where they can edit their profile image, change their username, or change their password.
- When editing their profile, users are redirected to a link with their profile image, and they can successfully update their image.
- When editing usernames, users will be redirected to a page where they can change their username. If a user tries to change to a username that already exists, they will be notified. When a user changes their username, the new username will be reflected on all associated posts, comments, etc.
- When changing passwords, users will be redirected to a page where they can change their password. Users can type in the password and confirm. If users type in unmatching passwords, a message will show saying that passwords do not match.

#### Feed Tests

- The lists of posts are all shown, with the user, date updated, user avatar, post title, image, content, number of likes, and comments present.
- All liked posts by a user will show up in the "Liked Posts" link in the navbar.
- User and avatar of posts are clickable and will redirect the user to the profile page of that user.
- Infinite scroll successfully works as the page will produce more posts when more than ten posts are present.
- If users are logged in, the users they do not already follow will have a 'Follow' button beside the username in Most Followed Profiles.
- If users are logged in, the users they follow will have an 'Unfollow' button beside the username in Most Followed Profiles.
- The number of likes on the post will update accordingly and in real-time.
- If a user is logged in and NOT the creator of the post, the user can hover over the like button and choose to like or unlike.
- If a user is logged in and IS the creator of the post, a message will tell them they are not able to like their own posts.
- If a user is logged out, hovering over the like button will prompt the user to log in.
- Users are successfully able to search for posts based on title and user. The search will take one second after the user stops typing before conducting the search.
- Number of likes on the post will update accordingly and in real-time.
- When the page is loading (the posts, the Most Followed Profiles, or when they type in a search field), the Bootstrap spinner shows successfully.
- Most Followed Profiles are present on the right side on larger screens and at the top on smaller screens as well as the bottom to follow users.
- Most Followed Profiles correctly update based on who has the highest number of followers. Each username is clickable and will direct the user to the profile page of the desired user.

#### Post Tests

- Placeholder in post create content successfully shows the user's username.
- Correct validations will show if the image field or title field is missing. If the uploaded image is not an image, is larger than 2500px in height and width, and larger than 1MB, it will not be accepted. If the user types in content larger than 300 characters in the title, an error message will show.
- Logged-in users are able to click "Create Post" and be redirected to the `/post/create` URL to create a post. Users can then add an image, title, and content.
- Created posts successfully show up on the homepage with the correct date, username, and content shown. The newest post will always be shown at the top of the homepage.
- Avatar and username of posts are clickable and will redirect users to the profile page.
- Post Images are clickable and will redirect users to the detailed post page. The correct post will show according to the post id: `/post/{id}`.
- Like functionality works exactly the same in detailed post view as well as homepage.
- Creators of the post can see the icons where they can choose to edit or delete their posts. Prompt messages will show as a ToolTip.
- Comments linked to the post will show on the detailed post page.
- When users choose to edit a post, they will be redirected to the correct link with the post image, title, and content pre-populated in the form field. Users are able to change their post and have the changes saved successfully.
- Posts are successfully deleted when the post creator clicks delete.
- Only creators of the post can edit their own posts. Any tampering with the URLs will redirect other users to the homepage.

#### Comment Tests

- If the user is logged in, the comment field will prompt the user to leave a comment. If the user is logged out, it will prompt the user to log in first.
- Posts with no comments will display a message that encourages the user to log in to leave a comment.
- The comment field successfully displays the logged-in username in the content placeholder, along with their avatar.
- All comments on an associated post will be shown newest first. Infinite scroll works successfully, loading more than ten comments.
- Bootstrap spinner successfully shows when comments are being retrieved.
- The number of comments on the post will update in realtime according to the number of comments.
- Users are successfully able to delete and edit their own comments.
- Icons for editing or deleting a comment are only visible on users' own comments.
- Deleted comments are removed immediately.
- Edited comments are pre-populated with the comment content.

#### Follower Tests

- Logged-in users can successfully follow other users, and the number of follows will update accordingly on the detailed profile page.
- The count of followers will update accordingly when a user is followed by another user.
- In Most Followed Profiles and the detailed profile page of other users, a "Follow" button will appear if the user is not following them already. An 'Unfollow' button will appear if the user is already following them. Clicking these buttons will update the number of follows/followers.
- Posts posted by followed users will appear in the "Feed" page.
- Most Followed Profiles will update based on the number of followers, with the highest at the top of the list.
- Only logged-in users will have the option to follow or unfollow other users.

### Bugs

I came across many bugs during this process, and spent a lot of time on with tutor support to help me resolve these issues.

1. I kept receiving "Uncaught TypeError: Cannot read properties of undefined (reading 'username')" whenever I tried signing up in the frontend - this was because `axios default_url` was set to the frontend rather than backend

2. Frontend was acting as though I was logged in but backend was showing as undefined. After speaking with tutor support, it was discovered that I had installed django-rest-auth v5.0.1 which did not support the code - installed v2.1.9 and allauth v0.44.0 instead of v0.55.2 for compatibility as Heroku failed to deploy with v0.55.2

3. Kept receiving 500 error when I was attempting to create a post - I had used "length" instead of "height" in the image validation in the Post Serializer.

4. I was unable to edit a comment successfully - this was my longest lasting bug, and I spent a lot of time through a lot of different channels trying to resolve this:
    - Tutor Support
    - Google
    - Slack
    - ChatGPT
    - Mentor Support

    - I changed my code a lot to try and resolve this issue as I was getting many different errors:
        - Heroku app logs:
            - django.core.exceptions.ImproperlyConfigured: Field name `profile_id` is not valid for model `Comment`.
            - I updated the Comment model to show `profile_id` - this resolved the Heroku app logs but led to another error:
        - console error:
            - AxiosError {message: 'Request failed with status code 400'}
            - `{"owner":["This field is required."]}`
            - So I went back to my backend code and took it back to basics by following the Django REST walkthrough project - after fiddling around with the code and makign sure there were no typos, the issue was finally resolved.

5. There is a small unresolved bug - when updating a comment, the page needs to be refreshed to show the updated comment content - there are no errors in the console for this and given more time, I would have investigated further and resolved.
## Deployment

This application has been deployed from GitHub to Heroku by following the steps (these are steps after you have set up the front end project in the Config Vars of the back end project):

1. Create or log in to your account on [Heroku.com](https://www.heroku.com/).
2. Create a new app, add app name and choose your region.
3. Click on create app.
4. In Terminal of your project, push your changes to GitHub.
5. Log in to Heroku.com and open the dashboard for your react application (for the front end).
6. Select the “Deploy” tab in the dashboard
7. Scroll down to the bottom and then select “Manual deploy”, and choose your repository.
8. Wait for your build to complete.
9. When you see the message “deployed to Heroku” in the build log, click the “open app” button at the top of the page.

- The following steps were taken for the cloning process:

1. Log in to [GitHub](https://github.com/).
2. Click on the profile icon to locate 'Your repositories'.
3. On the repository page, click on the repository you wish to clone.
4. Under 'Code', see the different cloning options, HTTPS, SSH, and GitHub CLI. Click the preferred cloning option, and then copy the link provided.
5. Open Terminal.
6. In Terminal, change the current working directory to the desired location of the cloned directory.
7. Type git clone, and then paste the URL copied from GitHub earlier.
8. Type Enter to create the local clone.

## Credits

### Code

- [Code Institute Moments Project](Solutions)

  - Functionality of the project credit goes to Code Institute.

- [React Documentation](https://reactjs.org/docs/getting-started.html)

  - React documentation was referred to many times during the development of this project.

- [React Bootstrap](https://react-bootstrap.github.io/)

  - Components from React Bootstrap were used in the project (Navigation bar, forms, cards, etc).

- [React Router Documentation](https://v5.reactrouter.com/web/guides/quick-start)
  - React Router documentation was referred to for the use of routes, useNavigate, and how to show the active links in navbar.

### Acknowledgements

- Firstly, and most importantly - Tutor Support for being extremely patient with me as I bugged them non-stop and used all my tutoring hours. I definitely could not have gotten through this project without you!
- My brother for creating the logo.
- My mentor, Jubril, for his support.
- My fellow students for helping me understand the code behind the functionality
- CI Walkthrough projects - massive amounts of inspiration taken from the projects.
- https://articles.wesionary.team/react-functional-components-vs-class-components-86a2d2821a22 - for helping me understand React Functional Components vs Class Components