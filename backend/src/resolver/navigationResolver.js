import navigationService from '../service/navigationService';
import authService from "../service/authService";

export default {
  Query: {
    navbar: (parent) => {return navigationService.getNavbar()},
    navLinks: (parent) => {return navigationService.getAllNavLinks()},
    navLink: (parent, args) => {return navigationService.getNavLink(args._id)},
  },
  Mutation: {
    createNavLink: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        return navigationService.createNavLink(args.navLink)
      }
    },
    updateNavLink: {
      resolve(parentValue, args, context){
        if (authService.verifyToken(context.req, context.res, context.next)) {
          return new Promise((resolve, reject) => {
            navigationService.setNavLink(args._id, args.navLink)
              .exec((err, res) => {
                if (err) reject(err);
                else resolve(res)
              })
          })
        }
      }
    },
    deleteNavLink: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        return navigationService.deleteNavLink(args._id).then(result => result.deletedCount > 0);
      }
    },
    updateNavbar: (parent, args, context) => {
      if (authService.verifyToken(context.req, context.res, context.next)) {
        return navigationService.setNavbar(args.navbar);
      }
    },
  }
}
