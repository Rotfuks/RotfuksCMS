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
    type TextComponent implements Component {
        rPagesId: ID!
        _id: ID!
        type: ComponentType
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