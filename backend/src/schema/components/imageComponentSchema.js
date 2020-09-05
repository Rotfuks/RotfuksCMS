import {gql} from 'apollo-server';

export default gql`
    extend type Query {
        imageComponents: [ImageComponent]
        imageComponent(_id: ID!): ImageComponent
    }
    extend type Mutation {
        createImageComponent(imageComponent: ImageComponentInput!): 
            ImageComponent
        updateImageComponent(_id: ID!, 
            imageComponent: ImageComponentInput!): ImageComponent
        deleteImageComponent(_id: ID!): Boolean
    }
    type ImageComponent implements Component {
        _id: ID!
        type: ComponentType
        name: String!
        title: String
        alttext: String
        src: String
        rounded: Boolean
    }
    input ImageComponentInput {
        name: String!
        title: String
        alttext: String
        src: String
        rounded: Boolean
    }
`;
