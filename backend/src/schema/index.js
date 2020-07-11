import {gql} from 'apollo-server';

import infoSchema from './infoSchema';
import navigationSchema from "./navigationSchema";
import sectionSchema from "./sectionSchema";
import textComponentSchema from "./components/textComponentSchema";
import imageComponentSchema from "./components/imageComponentSchema";

const linkSchema = gql`    
    type Query {
        _: Boolean
    }
    interface Node {
        id: ID!
        rPagesId: ID!
    }
    interface Component {
        id: ID!
        name: String!
        title: String
    }
    type Mutation {
        _: Boolean
    }
`;
module.exports = [linkSchema, infoSchema, navigationSchema,
  sectionSchema,
  textComponentSchema, imageComponentSchema];