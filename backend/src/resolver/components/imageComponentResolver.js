import componentService from "../../service/componentService";
import {ComponentType} from "../../service/componentService";

export default {
  Query: {
    imageComponents: (parent, args) => {
      return componentService.getComponents(ComponentType.IMAGECOMPONENT);
    },
    imageComponent: (parent, args) => {return componentService.getComponent(args._id)},
  },
  Mutation: {
    createImageComponent: (parent, args) => {
      args.imageComponent.type = ComponentType.IMAGECOMPONENT;
      return componentService.createComponent(args.imageComponent);
    },
    updateImageComponent: (parent, args) => {
      return componentService.setComponent(args.imageComponent);
    },
    deleteImageComponent: (parent, args) => {
      return componentService.deleteComponent(args._id).then(result => result.deletedCount > 0);
    },
  }
}
