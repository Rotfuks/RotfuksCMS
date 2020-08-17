import {gql} from 'apollo-server';

import infoSchema from './infoSchema';
import navigationSchema from "./navigationSchema";
import sectionSchema from "./sectionSchema";
import textComponentSchema from "./components/textComponentSchema";
import imageComponentSchema from "./components/imageComponentSchema";

const linkSchema = gql`    
    type Query {
        components: [Component]
    }
    interface Node {
        id: ID!
        rPagesId: ID!
    }
    interface Component {
        _id: ID!
        rPagesId: ID!
        name: String!
        type: ComponentType
        title: String
    }
    enum ComponentType {
        ImageComponent
        TextComponent
    }
    type Mutation {
        _: Boolean
    }
`;
module.exports = [linkSchema, infoSchema, navigationSchema,
  sectionSchema,
  textComponentSchema, imageComponentSchema];