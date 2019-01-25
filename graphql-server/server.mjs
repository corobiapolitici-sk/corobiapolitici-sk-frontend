const { makeAugmentedSchema } = require('neo4j-graphql-js');
const { ApolloServer } = require('apollo-server');
const { v1 : neo4j } = require('neo4j-driver');


const typeDefs = `
type Poslanec {
  id: ID!
  titul: String
  priezvisko: String!
  email: String
  bydlisko: String
  fotografia: String!
  kandidovalZa: String!
  kraj: String
  url: String!
  meno: String!
  klub: Klub @relation(name:"Clen", , direction:OUT)
}

type Klub {
  id: ID
  pocetPoslancov: Int
}
`;

const schema = makeAugmentedSchema({ typeDefs });

const driver = neo4j.driver(
  'bolt://localhost:11001',
  neo4j.auth.basic('neo4j', 'skuska')
);

const server = new ApolloServer({ schema, context: { driver } });

server.listen(3003).then(({ url }) => {
  console.log(`GraphQL API ready at ${url}`);
});
