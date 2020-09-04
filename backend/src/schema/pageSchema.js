import {gql} from 'apollo-server';

export default gql`
    extend type Query {
        pages: [Page]
        page(_id: ID!): Page
    }
    extend type Mutation {
        createPage(page: CreatePageInput): Page
        updatePage(page: UpdatePageInput): Page
        deletePage(_id: ID!): Boolean
    }
    type Page implements Node{
        _id: ID!
        name: String!
        title: String!
        url: String!
        sections: [Section]!
    }
    type Section {
        name: String!
        title: String
        columns: Int!
        components: [Component]!
    }
    input CreatePageInput {
        name: String!
        title: String!
        url: String!
        sections: [SectionInput]
    }
    input UpdatePageInput {
        _id: ID!
        name: String
        title: String
        url: String
        sections: [SectionInput]
    }
    input SectionInput {
        name: String!
        title: String
        columns: Int!
        components: [ID]!
    }
`;