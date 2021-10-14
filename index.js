import express from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.get('/', (req, res) => {
  res.send('Graphql is amazing');
});

const root = { hello: () => "Hi, I'm Richard" };

app.use('/graphql', graphqlHTTP ({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8080, () => console.log('running on server port localhost:8080/grpahql'));