import {gql} from 'apollo-server';

import infoSchema from './infoSchema';
import navigationSchema from "./navigationSchema";
import textComponentSchema from "./components/textComponentSchema";
import imageComponentSchema from "./components/imageComponentSchema";

const linkSchema = gql`    
    type Query {
        _: Boolean
    }
    interface Node {
        id: ID!
        pagesId: ID!
    }
    interface Component {
        name: String!
    }
    type Mutation {
        _: Boolean
    }
`;
module.exports = [linkSchema, infoSchema, navigationSchema,
  textComponentSchema, imageComponentSchema];