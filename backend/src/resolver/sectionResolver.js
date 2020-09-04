import sectionService from "../service/sectionService";

export default {
  Query: {
    section: (parent, args) => {return sectionService.getSection(args._id)},
    sections: (parent, args) => {return sectionService.getSections()},
  },
  Mutation: {
    createSection: (parent, args) => {
      return sectionService.createSection(args.section);
    },
    updateSection: {
      resolve(parentValue, args){
        return new Promise((resolve, reject) => {
          sectionService.setSection(args.section)
            .exec((err, res) => {
              if(err) reject(err);
              else resolve(res)
          })
        })
      }
    },
    deleteSection: (parent, args) => {
      return sectionService.deleteSection(args._id).then(result => result.deletedCount > 0);
    }
  }
}