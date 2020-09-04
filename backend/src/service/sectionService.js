import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const sectionSchema = mongoose.Schema({
  rPagesId: {type: String, index: true},

  pageId: {type: Schema.Types.ObjectId, ref: 'Page', required: true},
  name: String,
  title: String,
  columns: Number,
  components: [{type: Schema.Types.ObjectId, ref: 'Component'}]
});
const Section = mongoose.model('Section', sectionSchema);

const getSections = function() {
  return Section.find({rPagesId: process.env.PAGES_ID})
    .populate('components');
};

const getSection = function (_id) {
  return Section.findOne({_id: _id})
    .populate('components');
};

const createSection = function (section) {
  let newSection = new Section(section);
  newSection.rPagesId = process.env.PAGES_ID;
  newSection.components = [];
  return newSection.save();
};

const setSection = function (section) {
  section.rPagesId = process.env.PAGES_ID;
  return Section.findOneAndUpdate(
    {"_id": section._id},
    { "$set": section},
    {"new": true})
    .populate('components');
};

const deleteSection = function (_id) {
  return Section.deleteOne({_id: _id});
};

const deleteSectionByPage = function (pageId) {
  return Section.deleteMany({pageId: pageId});
};

export default {
  getSections,
  getSection,
  createSection,
  setSection,
  deleteSection,
  deleteSectionByPage
}