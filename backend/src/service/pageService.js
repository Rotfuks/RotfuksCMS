import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  rPagesId: {type: String, index: true},
  name: String,
  title: String,
  url: String,
  sections: [{
    name: String,
    title: String,
    columns: Number,
    components: [{type: Schema.Types.ObjectId, ref: 'Component'}],
  }],
}, {
  strict: false,
  strictQuery: false,
});

export const Page = mongoose.model('Page', pageSchema);

const getPages = async function() {
  return Page.find({rPagesId: process.env.PAGES_ID})
      .populate('sections.components');
};

const getPage = async function(_id) {
  return Page.findOne({_id: _id})
      .populate('sections.components');
};

const createPage = function(page) {
  const newPage = new Page(page);
  newPage.rPagesId = process.env.PAGES_ID;
  return newPage.save().then((t) =>
    t.populate('sections.components').execPopulate());
};

const setPage = function(page) {
  page.rPagesId = process.env.PAGES_ID;
  return Page.findOneAndUpdate(
      {_id: page._id},
      {$set: page},
      {new: true})
      .populate('sections.components');
};

const deletePage = function(_id) {
  return Page.deleteOne({_id: _id});
};

export default {
  getPages,
  getPage,
  createPage,
  setPage,
  deletePage,
};
