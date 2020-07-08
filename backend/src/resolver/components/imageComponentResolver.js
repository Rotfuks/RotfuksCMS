import imageComponentService from "../../service/components/imageComponentService";

export default {
  Query: {
    imageComponents: (parent, args) => {return imageComponentService.getImageComponents()},
    imageComponent: (parent, args) => {return imageComponentService.getImageComponent(args.id)},
  },
  Mutation: {
    createImageComponent: (parent, args) => {
      return imageComponentService.createImageComponent(args.imageComponent);
    },
    updateImageComponent: {
      resolve(parentValue, args){
        return new Promise((resolve, reject) => {
          imageComponentService.setImageComponent(args.id, args.imageComponent)
            .exec((err, res) => {
              if(err) reject(err);
              else resolve(res)
            })
        })
      }
    },
    deleteImageComponent: (parent, args) => {
      return imageComponentService.deleteImageComponent(args.id).then(result => result.deletedCount > 0);
    },
  }
}
