import infoService from '../service/infoService';

export default {
  Query: {
    generalInfo: (parent, {args}) => {return infoService.getGeneralInfo()}
  },
  Mutation: {
    updateGeneralInfo: {
      resolve(parentValue, args){
        return new Promise((resolve, reject) => {
          infoService.setGeneralInfo(args.generalInfo)
            .exec((err, res) => {
              if(err) reject(err);
              else resolve(res)
          })
        })
      }
    }
  }
}