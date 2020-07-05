import {gql} from 'apollo-server';

export default gql`
    extend type Query {
        generalInfo: GeneralInfo
    }
    extend type Mutation {
        updateGeneralInfo(generalInfo: GeneralInfoInput): GeneralInfo
    }
    type GeneralInfo implements Node{
        pagesId: ID!
        id: ID!
        title: String!
    }
    input GeneralInfoInput {
        title: String!
    }
  
`;