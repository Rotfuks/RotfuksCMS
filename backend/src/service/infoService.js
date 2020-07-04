import mongoose from 'mongoose';

const generalInfoSchema = mongoose.Schema({
  id: { type: String, index: { unique: true } },
  title: String,
});
const GeneralInfo = mongoose.model('GeneralInfo', generalInfoSchema);

const getGeneralInfo = function () {
  return GeneralInfo.findOne({id: "rotfuks.de"});
};

const setGeneralInfo = function (input) {
  return GeneralInfo.findOneAndUpdate(
    {"id": "rotfuks.de"},
    { "$set":{title: input.title}},
    {"new": true}); //returns new document
};

export default {
  getGeneralInfo,
  setGeneralInfo,
}