import {gql} from 'apollo-server';

export default gql`
    extend type Query {
        sections: [Section]
        section(id: ID!): Section
    }
    extend type Mutation {
        createSection(section: CreateSectionInput!): Section
        updateSection(id: ID!, section: UpdateSectionInput!): Section
        deleteSection(id: ID!): Boolean
    }
    type Section implements Node {
        rPagesId: ID!
        id: ID!
        name: String!
        title: String
        columns: Int!
        components: [Component]!
    }
    input CreateSectionInput {
        name: String
        title: String
        columns: Int!
    }
    input UpdateSectionInput {
        id: ID!
        name: String
        title: String
        columns: Int!
        components: [ID]!
    }
  
`;