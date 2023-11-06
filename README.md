# Digital Bank App with JWT Authentication

This application demonstrates the implementation of JSON Web Token (JWT) authentication in a digital bank app using Spring Boot for the backend and Angular for the frontend.

## Backend (Spring Boot)

### Prerequisites

- Java 8 or higher
- Maven
- Spring Boot

### Setup

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Configure the database connection in `application.properties`.
4. Run the following command to build the application: mvn clean install
5. Run the application using the following command: mvn spring-boot:run


### Features

- JWT authentication and authorization.
- RESTful APIs for managing user accounts, transactions, and more.

## Frontend (Angular)

### Prerequisites

- Node.js
- Angular CLI

### Setup

1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Run the following command to install the dependencies:npm install
4. Configure the API base URL in `environment.ts`.

### Features

- User authentication and JWT token management.
- Interactive UI for managing accounts, transactions, and more.

### Run

Run the following command to start the Angular development server:
ng serve

Visit `http://localhost:4200` in your browser to access the application.
