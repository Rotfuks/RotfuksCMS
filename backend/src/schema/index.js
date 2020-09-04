import {gql} from 'apollo-server';

import infoSchema from './infoSchema';
import navigationSchema from "./navigationSchema";
import pageSchema from "./pageSchema";
import textComponentSchema from "./components/textComponentSchema";
import imageComponentSchema from "./components/imageComponentSchema";

const linkSchema = gql`    
    type Query {
        components: [Component]
    }
    interface Node {
        _id: ID!
    }
    interface Component {
        _id: ID!
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
  pageSchema,
  textComponentSchema, imageComponentSchema];