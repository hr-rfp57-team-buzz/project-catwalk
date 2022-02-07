# Project Catwalk

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![Enzyme](https://img.shields.io/badge/-Enzyme-20232A?style=for-the-badge&logo=testingLibrary&logoColor=red) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

# Summary
Project Catwalk is a client-facing, e-commerce web app built to display products and related information across various modules (Product Overivew, Related Products, Questions & Answers, Ratings & Reviews).

# Product Overview & Related Items
<p>
  <img src='public/PO-RI.gif'/>
</p>

# Questions and Answers & Ratings and Reviews
<p>
  <img src='public/QA-RR.gif'/>
</p>

# Product Overview

# Related Products

# Questions & Answers

# Ratings & Reviews
Rating and Reviews widget houses the displayed product rating breakdown and the reviews related to the product.  On page load a call will be made to an api server to grab the necessary data to render out the two sections.  Everything is dynamically rendered based off of the displayed products id.  Contains components to add a review and sort the returned reviews.

# Quick Start
*Don't work out of main branch*
1. Clone the repository to your local machine
2. Run npm install
3. Create a branch
> `git checkout branch <your-branch-name>`
4. Create a config.js file
5. Add your access token and imgbb token to config.js
```
let TOKEN = 'YOUR_TOKEN_HERE';
exports.TOKEN = TOKEN;
exports.imgbb = 'YOUR_TOKEN_HERE';
```
4. Run npm run watch *starts webpack in watch mode*
5. Run npm start *runs nodemon on the server*
