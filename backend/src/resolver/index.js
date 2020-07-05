import infoResolver from './infoResolver';
import navigationResolver from "./navigationResolver";
import textComponentResolver from "./components/textComponentResolver";

const nodeResolver = {
  Node: {
    __resolveType(node) {
      if (node.linkTarget) {
        return 'NavLink';
      } else if (node.mainNav) {
        return 'Navbar';
      } else if (node.markuptext) {
        return 'TextComponent';
      } else {
        return 'GeneralInfo';
      }
    }},
  Component: {
    __resolveType(component) {
      if (component.markuptext) {
        return 'TextComponent';
      }
    }},
};

export default [nodeResolver, infoResolver, navigationResolver,
  textComponentResolver];