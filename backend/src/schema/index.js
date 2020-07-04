import {gql} from 'apollo-server';

import infoSchema from './infoSchema';

const linkSchema = gql`    
    type Query {
        _: Boolean
    }
    interface Node {
        id: ID!
    }
    type Mutation {
        _: Boolean
    }
`;
module.exports = [linkSchema, infoSchema];