import mongoose from 'mongoose';
import {v4 as uuidv4} from "uuid";

const imageComponentSchema = mongoose.Schema({
  id: { type: String, index: { unique: true } },
  rPagesId: { type: String, index: true },
  name: String,
  title: String,
  alttext: String,
  src: String,
  rounded: Boolean,
});

const ImageComponent = mongoose.model('ImageComponent', imageComponentSchema);

const getImageComponents = function () {
  return ImageComponent.find({rPagesId: process.env.PAGES_ID});
};

const getImageComponent = function (id) {
  return ImageComponent.findOne({id: id});
};

const createImageComponent = function (imageComponent) {
  let newImageComponent = new ImageComponent(imageComponent);
  newImageComponent.id = uuidv4();
  newImageComponent.rPagesId = process.env.PAGES_ID;
  return newImageComponent.save();
};

const setImageComponent = function (id, imageComponent) {
  return ImageComponent.findOneAndUpdate(
    {"id": id},
    { "$set": imageComponent},
    {"new": true});
};

const deleteImageComponent = function (id) {
  return ImageComponent.deleteOne({id: id});
};

export default {
  getImageComponent,
  getImageComponents,
  createImageComponent,
  setImageComponent,
  deleteImageComponent
}