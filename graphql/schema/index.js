// const { gql } = require("apollo-server");
// const typeDefs = gql`
//   type Query {
//     books: [Book]
//   }
//   type Book {
//     title: String
//     author: String
//   }
// `;
// module.exports = typeDefs;

const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    accounts: [Person]
  }
  type Person {
    _id: ID
    name: String
    friends: String
  }
`;

module.exports = typeDefs;
