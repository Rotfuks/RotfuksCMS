import mongoose from 'mongoose';
import {v4 as uuidv4} from "uuid";

const textComponentSchema = mongoose.Schema({
  id: { type: String, index: { unique: true } },
  rPagesId: { type: String, index: true },
  name: String,
  title: String,
  markuptext: String,
});

const TextComponent = mongoose.model('TextComponent', textComponentSchema);

const getTextComponents = function () {
  return TextComponent.find({rPagesId: process.env.PAGES_ID});
};

const getTextComponent = function (id) {
  return TextComponent.findOne({id: id});
};

const createTextComponent = function (textComponent) {
  let newTextComponent = new TextComponent(textComponent);
  newTextComponent.id = uuidv4();
  newTextComponent.rPagesId = process.env.PAGES_ID;
  return newTextComponent.save();
};

const setTextComponent = function (id, textComponent) {
  return TextComponent.findOneAndUpdate(
    {"id": id},
    { "$set": textComponent},
    {"new": true});
};

const deleteTextComponent = function (id) {
  return TextComponent.deleteOne({id: id});
};

export default {
  getTextComponents,
  getTextComponent,
  createTextComponent,
  setTextComponent,
  deleteTextComponent
}