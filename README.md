# Shopping-List

This project is a simple shopping list application built with React,React-Router, Context API, and Tailwind CSS. The application allows users to add, view, and manage items in their shopping cart. Users can increment or decrement the quantity of items and view the total price of all items in the cart.

## Index

- [Shopping-List](#shopping-list)
  - [Index](#index)
  - [Pre-requisites](#pre-requisites)
  - [Getting Started](#getting-started)
  - [Concepts Used](#concepts-used)
  - [Features](#features)

## Pre-requisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/download/) (v12 or higher)
- [npm](https://www.npmjs.com/get-npm) (v6 or higher) or [yarn](https://classic.yarnpkg.com/en/docs/install) (v1.22 or higher)

## Getting Started

Follow these steps to set up and run the project locally.

1. **Clone the Repository** (if you have Git installed) or download the repository as a ZIP file and extract it.

First, clone the repository to your local machine using the following command:

```
git clone https://github.com/yashaswinij1999/shopping-cart-project.git
```

2. **Navigate to the Project Directory**

```
cd Shopping-Cart-Project
```

3. **Install dependencies**

```
npm install
```

4. **Start the development server:**

```
npm run dev
```

5. **Open your browser and start the server to view the app.**

## Concepts Used

- **useState:** For managing local component state.
- **useEffect:** For fetching the products data.
- **useReducer:** For complex state logic.
- **useContext:** For state management.
- **React Router:** For routing within the application.
- **TailWind CSS:** For styling the components.

## Features

- Add items to the shopping cart.
- Increment and Decrement item quantities
- Remove items from the cart when quantity is zero.
- View Total price of all the items in the cart.
