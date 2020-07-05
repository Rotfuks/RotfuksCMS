import textComponentService from "../../service/components/textComponentService";

export default {
  Query: {
    textComponents: (parent, args) => {return textComponentService.getTextComponents()},
    textComponent: (parent, args) => {return textComponentService.getTextComponent(args.id)},
  },
  Mutation: {
    createTextComponent: (parent, args) => {
      return textComponentService.createTextComponent(args.textComponent);
    },
    updateTextComponent: {
      resolve(parentValue, args){
        return new Promise((resolve, reject) => {
          textComponentService.setTextComponent(args.id, args.textComponent)
            .exec((err, res) => {
              if(err) reject(err);
              else resolve(res)
            })
        })
      }
    },
    deleteTextComponent: (parent, args) => {
      return textComponentService.deleteTextComponent(args.id).then(result => result.deletedCount > 0);
    },
  }
}
