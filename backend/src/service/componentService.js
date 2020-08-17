import mongoose from 'mongoose';
import {v4 as uuidv4} from "uuid";

const componentSchema = mongoose.Schema({
  id: { type: String, index: { unique: true } },
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
  return Component.findOne({id: id});
};

const createComponent = function (component) {
  let newComponent = new Component(component);
  newComponent.id = uuidv4();
  newComponent.rPagesId = process.env.PAGES_ID;
  return newComponent.save();
};

const setComponent = function (component) {
  return Component.findOneAndUpdate(
    {"id": component.id},
    { "$set": component},
    {"new": true});
};

const deleteComponent = function (id) {
  return Component.deleteOne({id: id});
};

export default {
  getComponent,
  getComponents,
  getAllComponents,
  createComponent,
  setComponent,
  deleteComponent
}