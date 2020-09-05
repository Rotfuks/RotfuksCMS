import pageService from '../service/pageService';
import authService from "../service/authService";

export default {
  Query: {
    pages: (parent, args) => {return pageService.getPages()},
    page: (parent, args) => {return pageService.getPage(args._id)}
  },
  Mutation: {
    createPage: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        return pageService.createPage(args.page);
      }
    },
    updatePage: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        return pageService.setPage(args.page);
      }
    },
    deletePage: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        return pageService.deletePage(args._id).then(result => result.deletedCount > 0);
      }
    }
  }
}