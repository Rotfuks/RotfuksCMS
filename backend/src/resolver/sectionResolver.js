import sectionService from "../service/sectionService";
import authService from "../service/authService";

export default {
  Query: {
    section: (parent, args) => {return sectionService.getSection(args.id)},
    sections: async (parent, args) => {
      let result = await sectionService.getSections();
      return result;
    },
  },
  Mutation: {
    createSection: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        return sectionService.createSection(args.section);
      }
    },
    updateSection: {
      resolve(parentValue, args, context) {
        if (authService.verifyToken(context.req, context.res, context.next)) {
          return new Promise((resolve, reject) => {
            sectionService.setSection(args.section)
              .exec((err, res) => {
                if (err) reject(err);
                else resolve(res)
              })
          })
        }
      }
    },
    deleteSection: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        return sectionService.deleteSection(args.id);
      }
    }
  }
}