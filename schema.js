export default `

type Cat {
  _id: String!
  name: String!
}

type Query {
  findAll: [Cat!]!
  findOne(id: String!): Cat!
}

type Mutation {
  createCat(name: String!): Cat!
}

`;
