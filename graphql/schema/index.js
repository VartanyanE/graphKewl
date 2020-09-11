const { buildSchema } = require('graphql');

module.exports = buildSchema(
  `
    
    type Booking {
        _id: ID!
        compliment: Compliment!
        user: User!
        createdAt: String!
        updatedAt: String!
    }
    
    
    type Compliment {
    _id: ID!
    compliment: String!
    creator: User!

  }

  type User {
    _id: ID!
    email: String!
    password: String
    createdCompliments: [Compliment!]
  }

  type AuthData {
      userId: ID!
      token: String!
      tokenExpiration: Int!
  }

  input ComplimentInput {
    compliment: String!
   
  }

  input UserInput {
    email:String!
    password: String!
  }

  type RootQuery {
    compliments: [Compliment!]!
    bookings: [Booking!]!
    login(email:String!, password: String!): AuthData!
  }

  type RootMutation {
      createCompliment(ComplimentInput: ComplimentInput) : Compliment
      createUser(userInput: UserInput): User
     
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)