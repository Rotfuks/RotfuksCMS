import {gql} from 'apollo-server';

export default gql`
    extend type Query {
        textComponents: [TextComponent]
        textComponent(_id: ID!): TextComponent
    }
    extend type Mutation {
        createTextComponent(textComponent: TextComponentInput!): TextComponent
        updateTextComponent(_id: ID!, 
            textComponent: TextComponentInput!): TextComponent
        deleteTextComponent(_id: ID!): Boolean
    }
    type TextComponent implements Component {
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
