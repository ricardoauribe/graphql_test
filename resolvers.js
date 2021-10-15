

const friendDatabase = {};

class Friend {
  constructor(id, { firstName, lastName, email, contacts }){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.contacts = contacts;
  }
}


const resolvers = { 
  getFriend: ( {id} ) => {
    return new Friend(id, friendDatabase[id]);
  },
  createFriend: ({input}) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    friendDatabase[id] = input;
    return new Friend(id, input);
  }
 };

 export default resolvers;