# Welcome to my Bootcamp Final Project :neckbeard: :neckbeard:

This is the final of a series of applications made for a Yuxi Global Angular Bootcamp

## Set up the project :smiley_cat: :smiley_cat:

If you want to check this project out locally and change some stuff, you can download the code.

1. Install Angular CLI to run the project.(This project was made with Angular CLI)

2. After you download the code you have to install dependencies. I recomend Yarn, but You can also use npm install in the root of the project folder. it will install all dependencies according package.json file.

## How is the project architecture. :sunglasses: :sunglasses:

Modules

In this project you will find the following architecture:

1. App Module: This is the root module, it have the routing module hooked to it.
2. Shared Module: This module contains all shared components, just like Menu Component and page not found component. 
3. Students Module: This is the biggest module od the project, it contains all the core components for the applications, but hey don't worry I am going to describe the components of this module.
  - Student Component: This component contains the principal leaderboard table, and all the logic with calls to the Api/Mock, which supplies information for two more modules which show the info in a table with sorting, pagination and the compact view wich is an small view.
  - Leaderboard Component: This is a component which receives some information and show the information of the users in a datatable. It have some action buttons which are some functions shared by Student Comoponet. 
  - LeaderBoard Compact Component: This is the second component to show info of the users, but it shows the info in a compact view.
  - Detail Component: This component receive an student information passed by clicking the table or the eye in the compact view and it shows a detail information of an student.
  - Create Student Component: This component is a form which calls the api to create or update users, the calling depends of a parameter which can be pass though the URL.
 
Services

Services: There is just one service file which call the api for create/update/delete and get students.

- There is a directive which belongs to students module. It help us to highlight with a different color all the averages which surpass some grades.
- There is a dataMock to represent an api call with some dummy data. This dataMock belongs to the Student Module.
- There is also an students Module which help us with some instances in the application, it also have some methods with some logic.
