import componentService from "../../service/componentService";
import {ComponentType} from "../../service/componentService";
import authService from "../../service/authService";

export default {
  Query: {
    imageComponents: (parent, args) => {
      return componentService.getComponents(ComponentType.IMAGECOMPONENT);
    },
    imageComponent: (parent, args) => {return componentService.getComponent(args._id)},
  },
  Mutation: {
    createImageComponent: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        args.imageComponent.type = ComponentType.IMAGECOMPONENT;
        return componentService.createComponent(args.imageComponent);
      }
    },
    updateImageComponent: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        return componentService.setComponent(args.imageComponent);
      }
    },
    deleteImageComponent: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        return componentService.deleteComponent(args._id).then(result => result.deletedCount > 0);
      }
    },
  }
}
