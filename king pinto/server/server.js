const express = require("express");
const cookieParser = require("cookie-parser");

const { ApolloServer } = require("@apollo/server-express"); // Note the import change
const { expressMiddleware } = require("@apollo/server-express");
const path = require("path");
require("dotenv").config();

const app = express();

// Define ports for Express and Apollo GraphQL servers
const EXPRESS_PORT = process.env.EXPRESS_PORT || 3334;
const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 3344; // Choose a different port

const is_prod = process.env.NODE_ENV === "production";

const db = require("./config/connection");

const { typeDefs, resolvers } = require("./schema");
const { authenticate } = require("./auth");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authenticate,
});

// Apply the Apollo Server middleware to Express
server.applyMiddleware({ app, path: "/graphql" });

// Open channel for JSON to be sent from the client
app.use(express.json());

// Serve up static assets
app.use(
  "/images",
  express.static(path.join(__dirname, "../client/public/images"))
);

// Open cookie middleware channel so we can view cookies on the request object
app.use(cookieParser());

// Trigger React router to handle all routing outside of our auth routes
if (is_prod) {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

// Validate that the mongoose connection is complete
db.once("open", () => {
  console.log("DB connection established");

  // Start the Express server on the EXPRESS_PORT
  app.listen(EXPRESS_PORT, () => {
    console.log("Express server listening on port", EXPRESS_PORT);
  });
});
