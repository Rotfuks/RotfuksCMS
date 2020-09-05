import infoService from '../service/infoService';
import authService from "../service/authService";

export default {
  Query: {
    generalInfo: (parent, args, context) => {
      return infoService.getGeneralInfo();
    }
  },
  Mutation: {
    updateGeneralInfo: {
      resolve(parentValue, args, context){
        if (authService.verifyToken(context.req, context.res, context.next)) {
          return new Promise((resolve, reject) => {
            infoService.setGeneralInfo(args.generalInfo)
              .exec((err, res) => {
                if (err) reject(err);
                else resolve(res)
              })
          })
        } else return null;
      }
    }
  }
}