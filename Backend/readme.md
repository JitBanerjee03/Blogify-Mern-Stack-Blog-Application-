# Blogify MERN Blog Application

## Overview

Blogify is a MERN (MongoDB, Express, React, Node.js) stack application that allows users to create, read, update, and delete blog posts. The backend is built using Node.js and Express, and it interacts with a MongoDB database. The frontend is built using React.

## Backend

The backend of the Blogify application consists of several models and corresponding routes that handle various functionalities.

### Models

#### Blog Model

The Blog model is defined in models/blog.js. It represents a blog post and includes the following fields:

- [`title`](Backend/models/blog.js ): The title of the blog post (String, required).
- [`summary`](Backend/models/blog.js ): A brief summary of the blog post (String, required).
- [`category`](Backend/models/blog.js ): The category of the blog post (String, required).
- [`content`](Backend/models/blog.js ): The content of the blog post (String, required).
- [`coverFilePath`](Backend/models/blog.js ): The file path of the cover image (String).
- [`postedBy`](Backend/models/blog.js ): The user who posted the blog (ObjectId, references the User model).
- [`postedAt`](Backend/models/blog.js ): The date and time when the blog was posted (Date, default is the current date and time).
- [`noOfUpVotes`](Backend/models/blog.js ): The number of upvotes the blog has received (Number, default is 0).
- [`upVotedBy`](Backend/models/blog.js ): An array of users who upvoted the blog (Array of ObjectId, references the User model).
- [`noOfDownVotes`](Backend/models/blog.js ): The number of downvotes the blog has received (Number, default is 0).
- [`downVotedBy`](Backend/models/blog.js ): An array of users who downvoted the blog (Array of ObjectId, references the User model).

#### Category Model

The Category model is defined in models/category.js. It represents a category of blog posts and includes the following field:

- [`categoryType`](Backend/models/category.js ): The type of category (String, unique).

#### User Model

The User model is defined in models/user.js. It represents a user and includes the following fields:

- [`firstName`](Backend/models/user.js ): The first name of the user (String, required).
- [`middleName`](Backend/models/user.js ): The middle name of the user (String, optional).
- [`lastName`](Backend/models/user.js ): The last name of the user (String, required).
- [`email`](Backend/models/user.js ): The email address of the user (String, required, unique).
- [`country`](Backend/models/user.js ): The country of the user (String, required).
- [`State`](Backend/models/user.js ): The state of the user (String, required).
- [`city`](Backend/models/user.js ): The city of the user (String, required).
- [`zip`](Backend/models/user.js ): The zip code of the user (Number, required).
- [`dob`](Backend/models/user.js ): The date of birth of the user (Date, required).
- [`password`](Backend/models/user.js ): The password of the user (String, required).

### Routes

#### Blog Routes

The blog routes are defined in routes/blogRoute.js. They handle various operations related to blog posts, including:

- `GET /getAllBlogs`: Retrieve all blog posts.
- `POST /postBlog`: Create a new blog post.
- `GET /getAllBlogs/:blogType`: Retrieve blog posts of a specific category.
- `PUT /upVoteBlog`: Upvote a blog post.
- `PUT /downVoteBlog`: Downvote a blog post.

#### Category Routes

The category routes are defined in routes/categoryRoute.js. They handle various operations related to categories, including:

- `POST /`: Create a new category.
- `GET /`: Retrieve all categories.

#### User Routes

The user routes are defined in routes/userRoute.js. They handle various operations related to users, including:

- `POST /signup`: Register a new user.
- `POST /login`: Log in a user.
- `GET /profile`: Retrieve the profile of the logged-in user.
- `GET /logout`: Log out the user.
- `GET /getUser`: Retrieve the details of the logged-in user.

### Authentication

Authentication is handled using JSON Web Tokens (JWT). The authentication logic is defined in Auth.js and includes:

- [`generatesessionToken`](Backend/Auth.js ): Generates a JWT for a given payload.
- [`tokenValidation`](Backend/Auth.js ): Middleware to validate the JWT from cookies.

## Getting Started

To get started with the Blogify application, follow these steps:

1. Clone the repository.
2. Navigate to the [`Backend`](Backend ) directory and install the dependencies using `npm install`.
3. Create a `.env` file in the [`Backend`](Backend ) directory and add the following environment variables: