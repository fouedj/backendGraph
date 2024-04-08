// index.js

const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const { schema, root } = require("./graphql/schema");
require("dotenv").config();
const app = express();

// Connecter à la base de données MongoDB
mongoose.connect("mongodb://localhost:27017/my_database");

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Serveur GraphQL démarré sur le port ${port}`);
});
