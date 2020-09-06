const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");

const mongoose = require("mongoose");

const app = express();

const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");
const isAuth = require('./graphql/middleware/isAuth')

app.use(bodyParser.json());
app.use(isAuth);

// using express to hit the graphql endpoint && building the schema using express-graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,

    // resolvers that use our schema to make our request
    rootValue: graphQlResolvers,

    graphiql: true,
  })
);

// Connecting our MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/graphql")
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
