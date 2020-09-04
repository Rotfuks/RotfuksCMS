import mongoose from 'mongoose';

const componentSchema = mongoose.Schema({
  rPagesId: { type: String, index: true },
  name: String,
  type: String,
  title: String,
  markuptext: String,
  src: String,
  alttext: String,
  rounded: Boolean,
}, {
  strict: false,
  strictQuery: false,
});

export const ComponentType = {
  IMAGECOMPONENT: "ImageComponent",
  TEXTCOMPONENT: "TextComponent"
};

export const Component = mongoose.model('Component', componentSchema);

const getComponents = function (type) {
  return Component.find({
    rPagesId: process.env.PAGES_ID,
    type: type
  });
};

const getAllComponents = function () {
  return Component.find({
    rPagesId: process.env.PAGES_ID
  });
};

const getComponent = function (id) {
  return Component.findOne({_id: id});
};

const createComponent = function (component) {
  let newComponent = new Component(component);
  newComponent.rPagesId = process.env.PAGES_ID;
  return newComponent.save();
};

const setComponent = function (component) {
  return Component.findOneAndUpdate(
    {"_id": component._id},
    { "$set": component},
    {"new": true});
};

const deleteComponent = function (_id) {
  return Component.deleteOne({_id: id});
};

export default {
  getComponent,
  getComponents,
  getAllComponents,
  createComponent,
  setComponent,
  deleteComponent
}