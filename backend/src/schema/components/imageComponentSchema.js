import {gql} from 'apollo-server';

export default gql`
    extend type Query {
        imageComponents: [ImageComponent]
        imageComponent(id: ID!): ImageComponent
    }
    extend type Mutation {
        createImageComponent(imageComponent: ImageComponentInput!): ImageComponent
        updateImageComponent(id: ID!, imageComponent: ImageComponentInput!): ImageComponent
        deleteImageComponent(id: ID!): Boolean
    }
    type ImageComponent implements Node & Component {
        rPagesId: ID!
        id: ID!
        name: String!
        title: String,
        alttext: String,
        src: String,
        rounded: Boolean,
    }
    input ImageComponentInput {
        name: String!
        title: String,
        alttext: String,
        src: String,
        rounded: Boolean,
    }
`;