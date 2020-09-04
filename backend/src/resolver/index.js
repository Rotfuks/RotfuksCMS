import infoResolver from './infoResolver';
import navigationResolver from "./navigationResolver";
import sectionResolver from "./sectionResolver";
import pageResolver from './pageResolver';

import textComponentResolver from "./components/textComponentResolver";
import imageComponentResolver from "./components/imageComponentResolver";

import componentService, {ComponentType} from "../service/componentService";


const nodeResolver = {
  Node: {
    __resolveType(node) {
      if (node.toObject().linkTarget) {
        return 'NavLink';
      } else if (node.toObject().mainNav) {
        return 'Navbar';
      } else if (node.toObject().components) {
        return 'Section';
      } else if (node.toObject().sections) {
        return 'Page';
      } else {
        return 'GeneralInfo';
      }
    }
  }
};

const componentResolver = {
  Component: {
    __resolveType(component) {
      if (component.toObject().markuptext !== undefined) {
        return 'TextComponent';
      } else if (component.toObject().rounded !== undefined) {
        return 'ImageComponent';
      }
      return null;
    }
  },
  Query: {
    components: (parent, args) => {
      return componentService.getAllComponents();
    },
  }
};

export default [nodeResolver, componentResolver,
  infoResolver, navigationResolver, sectionResolver, pageResolver,
  textComponentResolver, imageComponentResolver];