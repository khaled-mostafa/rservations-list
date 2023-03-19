## Getting Started

At Yassir, restaurant owners are one of services’ users. To help them manage
their business better,I built this interface to display the reservations,
so that they can take action on them

### Built With

-   [React](https://react.dev/) - A JavaScript library for building user interfaces
-   [MUI](https://mui.com/) - Material UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications.
-   [React-DOM](https://reactjs.org/docs/react-dom.html) - React package for working with the DOM.
-  [json-server](https://github.com/typicode/json-server) - A full fake REST API with zero coding
-  [axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) - Simple and complete React DOM testing utilities
-  [react-testing-library-hooks](https://react-hooks-testing-library.com/) - A library to test React hooks with react-testing-library
-  [MSW](https://mswjs.io/) - Intercept HTTP requests and mock responses

### Prerequisites

-   [git](https://git-scm.com/) (v2.30.1) or higher
-   [Node.js](https://nodejs.org/en/) (v14.15.4) or higher
-   [yarn](https://yarnpkg.com/) (v1.22.10) or higher

### Project setup

1.  Clone the repository
    ```sh
     git clone https://github.com/khaled-mostafa/rservations-list.git
     ```
2.  Install yarn packages
    ```sh
    yarn install
    ```
3.  Run the app
    ```sh
    yarn start
    ```
    this command will run also the json-server [mock_data] on port 6006
4.  Open [http://localhost:3007](http://localhost:3007) to view it in the browser.

6. To check the json-server [mock_data] open [http://localhost:6006/reservations](http://localhost:6006/reservations)

5.  To run tests
    ```sh
    yarn test
    ```


## Features

-   [x] Create json-server [mock_data] for reservations
-   [ ] Display reservations list
-   [ ] User can sort reservations
-   [ ] User can filter reservations by status, shift, area, and date
-   [ ] User can search by name and surename
-   [ ] Unit test for components and hooks
-   [ ] Implement MSW for mocking API requests