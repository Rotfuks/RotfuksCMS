import infoResolver from './infoResolver';
import navigationResolver from './navigationResolver';
import pageResolver from './pageResolver';

import textComponentResolver from './components/textComponentResolver';
import imageComponentResolver from './components/imageComponentResolver';

import componentService, {ComponentType} from '../service/componentService';


const nodeResolver = {
  Node: {
    __resolveType(node) {
      if (node.toObject().newTab) {
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
    },
  },
};

const componentResolver = {
  Component: {
    __resolveType(component) {
      console.log(component);
      switch (component.toObject().type) {
        case (ComponentType.TEXTCOMPONENT):
          return 'TextComponent';
        case (ComponentType.IMAGECOMPONENT):
          return 'ImageComponent';
      }
      return null;
    },
  },
  Query: {
    components: (parent, args) => {
      return componentService.getAllComponents();
    },
  },
};

export default [nodeResolver, componentResolver,
  infoResolver, navigationResolver, pageResolver,
  textComponentResolver, imageComponentResolver];
