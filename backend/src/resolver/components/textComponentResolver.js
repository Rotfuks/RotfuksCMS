import componentService from '../../service/componentService';
import {ComponentType} from '../../service/componentService';
import authService from '../../service/authService';

export default {
  Query: {
    textComponents: (parent, args) => {
      return componentService.getComponents(ComponentType.TEXTCOMPONENT);
    },
    textComponent: (parent, args) => {
      return componentService.getComponent(args._id);
    },
  },
  Mutation: {
    createTextComponent: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        args.textComponent.type = ComponentType.TEXTCOMPONENT;
        return componentService.createComponent(args.textComponent);
      }
    },
    updateTextComponent: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        return componentService.setComponent(args.component);
      }
    },
    deleteTextComponent: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        return componentService.deleteComponent(args._id)
            .then((result) => result.deletedCount > 0);
      }
    },
  },
};
