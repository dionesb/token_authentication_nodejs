# Application

JWT authentication with Node.js

This application uses the following tools:

- Express;
- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (PostgresSQL);

# How the application works

The application can be summarized following points.

- A client sends username/password combination to the server
- The server validates the authentication
- If authentication is successful, the server creates a JWT token else establishes an error response
- On successful authentication, the client gets JWT token in the response body
- From next time, the client for making any request supplies the JWT token in request headers like this. Authorization: Bearer <jwt_token>
- Server upon receiving the JWT validates it and sends the successful response else error.
