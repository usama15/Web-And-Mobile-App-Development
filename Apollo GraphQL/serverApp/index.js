const { ApolloServer, gql } = require('apollo-server');

// Apollo Documentation here : https://www.apollographql.com/docs/apollo-server/getting-started/


const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  
const resolvers = {
    Query: {
      books: () => books,
    },
  };
  


const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
