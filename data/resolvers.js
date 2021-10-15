import { Friends } from './dbConnectors';

// resolver map
export const resolvers = { 
  Query: {
    getFriend: ( {id} ) => {
      return new Friend(id, friendDatabase[id]);
    },
  },
  Mutation: {
    createFriend: (root, {input}) => {
      const newFriend = new Friend ({
        firstName = input.firstName,
        lastName = input.lastName,
        gender = input.gender,
        email = input.email,
      });

      newFriend.id = newFriend.id;

      return new Promise((resolve, object) => {
        newFriend.save((err) => {
          if(err) PromiseRejectionEvent(err)
          else resolve(newFriend)
        })
      })
    },
  }
 };
 