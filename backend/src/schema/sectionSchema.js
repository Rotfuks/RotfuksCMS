import {gql} from 'apollo-server';

export default gql`
    extend type Query {
        sections: [Section]
        section(_id: ID!): Section
    }
    extend type Mutation {
        createSection(section: CreateSectionInput!): Section
        updateSection(section: UpdateSectionInput!): Section
        deleteSection(_id: ID!): Boolean
    }
    type Section implements Node {
        _id: ID!
        pageId: ID!
        name: String!
        title: String
        columns: Int!
        components: [Component]!
    }
    input CreateSectionInput {
        pageId: ID!
        name: String!
        title: String
        columns: Int!
    }
    input UpdateSectionInput {
        _id: ID!
        name: String
        title: String
        columns: Int
        components: [ID]
    }
`;