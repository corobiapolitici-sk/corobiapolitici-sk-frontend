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

type Zmena {
  id: ID
  dokument: String
  datumPodania: DateTime
  nazov: String
  url: String
  cisloObdobia: Int
  cisloSchodze: Int
}

type Hlasovanie {
  id: ID
  idZakZbor: Int
  nazovHlasovania: String
  suhrnHlasujucich: Int
  suhrnNehlasovalo: Int
  suhrnNepritomni: Int
  suhrnProti: Int
  suhrnPritomni: Int
  suhrnZa: Int
  suhrnZdrzalo: Int
  url: String
  vysledokHlasovania: String
  casHlasovania: DateTime
  cisloHlasovania: Int
  cisloObdobia: Int
  cisloSchodze: Int
}

type Rozprava {
  id: ID
  text: String
  typVystupenia: String
  url: String
  zaznamRokovania: String
  zaznamVystupenia: String
  casKoniec: DateTime
  casZaciatok: DateTime
  castDnaSchodze: String
  cisloSchodze: Int
  denSchodze: DateTime
}

type Spektrum {
  id: ID
}

type Vybor {
  id: ID
}

type Zakon {
  id: ID
  druh: String
  datumDorucenia: DateTime
  nazov: String
  stav: String
  url: String
  vysledok: String
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
