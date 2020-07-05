import {gql} from 'apollo-server';

export default gql`
    extend type Query {
        textComponents: [TextComponent]
        textComponent(id: ID!): TextComponent
    }
    extend type Mutation {
        createTextComponent(textComponent: TextComponentInput!): TextComponent
        updateTextComponent(id: ID!, textComponent: TextComponentInput!): TextComponent
        deleteTextComponent(id: ID!): Boolean
    }
    type TextComponent implements Node & Component {
        pagesId: ID!
        id: ID!
        name: String!
        title: String
        markuptext: String
    }
    input TextComponentInput {
        name: String!
        title: String
        markuptext: String
    }
`;