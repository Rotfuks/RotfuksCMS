import mongoose from 'mongoose';
import sectionService from './sectionService';
const Schema = mongoose.Schema;

const pageSchema = mongoose.Schema({
  rPagesId: { type: String, index: true },
  name: String,
  title: String,
  url: String,
  sections: [{type: Schema.Types.ObjectId, ref: 'Section'}]
}, {
  strict: false,
  strictQuery: false,
});

export const Page = mongoose.model('Page', pageSchema);

const getPages = async function() {
  return Page.find({rPagesId: process.env.PAGES_ID})
    .populate({ path: 'sections', populate: { path: 'components' }});
};

const getPage = async function(_id) {
  return Page.findOne({_id: _id})
    .populate({ path: 'sections', populate: { path: 'components' }});
};

const createPage = function (page) {
  let newPage = new Page(page);
  newPage.rPagesId = process.env.PAGES_ID;
  newPage.sections = [];
  return newPage.save();
};

const setPage = function (page) {
  page.rPagesId = process.env.PAGES_ID;
  return Page.findOneAndUpdate(
    {_id: page._id},
    { $set: page},
    {new: true})
    .populate({ path: 'sections', populate: { path: 'components' }});
};

const addSection = function (pageId, section) {
  Page.findOneAndUpdate({_id: pageId},
    {$push: {sections: section}})
};

const deletePage = function (_id) {
  sectionService.deleteSectionByPage(_id);
  return Page.deleteOne({_id: _id});
};

export default {
  getPages,
  getPage,
  createPage,
  setPage,
  addSection,
  deletePage
}