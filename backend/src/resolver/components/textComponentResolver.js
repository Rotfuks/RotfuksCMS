import componentService from "../../service/componentService";
import {ComponentType} from "../../service/componentService";

export default {
  Query: {
    textComponents: (parent, args) => {
      return componentService.getComponents(ComponentType.TEXTCOMPONENT).lean();
    },
    textComponent: (parent, args) => {return componentService.deleteComponent(args.id)},
  },
  Mutation: {
    createTextComponent: (parent, args) => {
      args.textComponent.type = ComponentType.TEXTCOMPONENT;
      return componentService.createComponent(args.textComponent);
    },
    updateTextComponent: (parent, args) => {
      return componentService.setComponent(args.component);
    },
    deleteTextComponent: (parent, args) => {
      return componentService.deleteComponent(args.id).then(result => result.deletedCount > 0);
    },
  }
}
