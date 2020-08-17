import navigationService from '../service/navigationService';

export default {
  Query: {
    navbar: (parent) => {return navigationService.getNavbar()},
    navLinks: (parent) => {return navigationService.getAllNavLinks()},
    navLink: (parent, args) => {return navigationService.getNavLink(args.id)},
  },
  Mutation: {
    createNavLink: (parent, args) => {
        return navigationService.createNavLink(args.navLink)
    },
    updateNavLink: {
      resolve(parentValue, args){
        return new Promise((resolve, reject) => {
          navigationService.setNavLink(args.id, args.navLink)
            .exec((err, res) => {
              if(err) reject(err);
              else resolve(res)
            })
        })
      }
    },
    deleteNavLink: (parent, args) => {
      return navigationService.deleteNavLink(args.id).then(result => result.deletedCount > 0);
    },
    updateNavbar: (parent, args) => {
      return navigationService.setNavbar(args.navbar);
    },
  }
}
