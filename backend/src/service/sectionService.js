import mongoose from 'mongoose';
import {v4 as uuidv4} from 'uuid';
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  id: {type: String, index: {unique: true}},
  rPagesId: {type: String, index: true},

  name: String,
  title: String,
  columns: Number,
  components: [{type: Schema.Types.ObjectId, ref: 'Component'}],
});
const Section = mongoose.model('Section', sectionSchema);

const getSections = function() {
  return Section.find({rPagesId: process.env.PAGES_ID})
      .populate('components');
};

const getSection = function(id) {
  return Section.findOne({id: id}).populate('components');
};

const createSection = function(section) {
  const newSection = new Section(section);
  newSection.id = uuidv4();
  newSection.rPagesId = process.env.PAGES_ID;
  newSection.components = [];
  return newSection.save();
};

const setSection = function(section) {
  section.rPagesId = process.env.PAGES_ID;
  return Section.findOneAndUpdate(
      {'id': section.id},
      {'$set': section},
      {'new': true});
};

const deleteSection = function(id) {
  return Section.deleteOne({id: id});
};

export default {
  getSections,
  getSection,
  createSection,
  setSection,
  deleteSection,
};
