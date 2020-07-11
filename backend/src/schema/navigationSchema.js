import {gql} from 'apollo-server';

export default gql`
    extend type Query {
        navbar: Navbar
        navLinks: [NavLink]
        navLink(id: ID!): NavLink 
    }
    type Navbar implements Node {
        rPagesId: ID!
        id: ID!
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
    
    type NavLink implements Node{
        rPagesId: ID!
        id: ID!
        label: String!
        url: String!
        linkTarget: Boolean
    }
    input NavLinkInput {
        id: ID
        label: String
        url: String
        linkTarget: Boolean
    }
  
    extend type Mutation {
        createNavLink(navLink: NavLinkInput): NavLink
        updateNavLink(id: ID, navLink: NavLinkInput): NavLink
        deleteNavLink(id: ID): Boolean
        
        updateNavbar(navbar: NavbarInput): Navbar
    }
`;