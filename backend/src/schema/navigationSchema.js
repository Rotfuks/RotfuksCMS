import {gql} from 'apollo-server';

export default gql`
    extend type Query {
        navbar: Navbar
        navLinks: [NavLink]
        navLink(_id: ID!): NavLink 
    }
    type Navbar implements Node {
        _id: ID!
        logo: String
        text: String
        mainNav: [NavLink]
        sideNav: [NavLink]
        type: String
        variant: String
    }
    input NavbarInput {
        logo: String
        text: String
        mainNav: [NavLinkInput]
        sideNav: [NavLinkInput]
        type: String
        variant: String
    }
    
    type NavLink implements Node {
        _id: ID!
        label: String!
        url: String!
        linkTarget: Boolean
    }
    input NavLinkInput {
        _id: ID
        label: String
        url: String
        linkTarget: Boolean
    }
  
    extend type Mutation {
        createNavLink(navLink: NavLinkInput): NavLink
        updateNavLink(_id: ID, navLink: NavLinkInput): NavLink
        deleteNavLink(_id: ID): Boolean
        
        updateNavbar(navbar: NavbarInput): Navbar
    }
`;
