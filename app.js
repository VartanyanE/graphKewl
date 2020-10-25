const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");

const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const app = express();

const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");
const isAuth = require("./graphql/middleware/isAuth");

app.use(bodyParser.json());
app.use(isAuth);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));
}

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
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://vartanyanE:ZanderInc323@cluster0.qwmp4.mongodb.net/palmbuddy?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, function () {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
