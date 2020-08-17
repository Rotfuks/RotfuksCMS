import mongoose from 'mongoose';

const generalInfoSchema = mongoose.Schema({
  id: { type: String, index: { unique: true } },
  rPagesId: {type: String, index: true},
  title: String,
});
const GeneralInfo = mongoose.model('GeneralInfo', generalInfoSchema);

const getGeneralInfo = function () {
  return GeneralInfo.findOne({id: process.env.PAGES_ID});
};

const setGeneralInfo = function (input) {
  return GeneralInfo.findOneAndUpdate(
    {"id": process.env.PAGES_ID},
    { "$set":{title: input.title}},
    {"new": true});
};

export default {
  getGeneralInfo,
  setGeneralInfo,
}