# Graph QL Test

Initial Test for graphQL functionality

## Run

```
npm start
```

## Query

Go to localhost:8080/graphql

To query a Friend:

```
query {
  friend {
    firstName
    lastName
    email{
      email
    }
  }
}
```