import mongoose from 'mongoose';

const generalInfoSchema = mongoose.Schema({
  rPagesId: {type: String, index: { unique: true }},
  title: String,
});
const GeneralInfo = mongoose.model('GeneralInfo', generalInfoSchema);

const getGeneralInfo = function () {
  return GeneralInfo.findOne({rPagesId: process.env.PAGES_ID});
};

const setGeneralInfo = function (input) {
  return GeneralInfo.findOneAndUpdate(
    {"rPagesId": process.env.PAGES_ID},
    { "$set":{title: input.title}},
    {"new": true});
};

export default {
  getGeneralInfo,
  setGeneralInfo,
}