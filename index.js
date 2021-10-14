import express from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.get('/', (req, res) => {
  res.send('Graphql is amazing');
});

const root = { 
  friend: () => {
    return {
      "id": 3255432,
      "firstName": "Ricardo",
      "lastName": "Uribe",
      "gender": "Male",
      "email": [
        {email: "ricardoauribe@hotmail.com"}, 
        {email: "other@email.com"}
      ]
    }
  }
 };

app.use('/graphql', graphqlHTTP ({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8080, () => console.log('running on server port localhost:8080/grpahql'));