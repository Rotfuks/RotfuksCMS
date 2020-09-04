import {gql} from 'apollo-server';

export default gql`
    extend type Query {
        pages: [Page]
        page(_id: ID!): Page
    }
    extend type Mutation {
        createPage(page: createPageInput): Page
        updatePage(page: updatePageInput): Page
        deletePage(_id: ID!): Boolean
    }
    type Page implements Node{
        _id: ID!
        name: String!
        title: String!
        url: String!
        sections: [Section]!
    }
    input createPageInput {
        name: String!
        title: String!
        url: String!
    }
    input updatePageInput {
        _id: ID!
        name: String
        title: String
        url: String
        sections: [ID]
    }
`;