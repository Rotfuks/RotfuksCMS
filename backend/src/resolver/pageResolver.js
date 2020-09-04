import pageService from '../service/pageService';

export default {
  Query: {
    pages: (parent, args) => {return pageService.getPages()},
    page: (parent, args) => {return pageService.getPage(args._id)}
  },
  Mutation: {
    createPage: (parent, args) => {
      return pageService.createPage(args.page);
    },
    updatePage: (parent, args) => {
      return pageService.setPage(args.page);
    },
    deletePage: (parent, args) => {
      return pageService.deletePage(args._id).then(result => result.deletedCount > 0);
    }
  }
}