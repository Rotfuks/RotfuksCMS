import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const navLinkSchema = mongoose.Schema({
  id: { type: String, index: { unique: true } },
  label: String,
  url: String,
  linkTarget: Boolean
});

const navbarSchema = mongoose.Schema({
  id: { type: String, index: { unique: true } },
  logo: String,
  text: String,
  mainNav: [navLinkSchema]
});

const NavLink = mongoose.model('NavLink', navLinkSchema);
const Navbar = mongoose.model('Navbar', navbarSchema);

const getNavbar = function () {
  return Navbar.findOne({id: "rotfuks.de"});
};

const setNavbar = async function (navbarInput) {
  navbarInput.mainNav = await resolveNavList(navbarInput.mainNav);
  navbarInput.sideNav = await resolveNavList(navbarInput.sideNav);
  return Navbar.findOneAndUpdate(
    {"id": "rotfuks.de"},
    { "$set": navbarInput},
    {"new": true});
};

const resolveNavList = async function (navList) {
  const resolveMainNav = await navList.map(async (navLink) => {
    if (navLink.id) {
      return await NavLink.findOne({id: navLink.id});
    } else {
      return await createNavLink(navLink);
    }
  });
  return await Promise.all(resolveMainNav);
};

const getAllNavLinks = function () {
  return NavLink.find();
};

const getNavLink = function (id) {
  return NavLink.findOne({id: id});
};

const createNavLink = function (navLink) {
  let newNavLink = new NavLink(navLink);
  newNavLink.id = uuidv4();
  return newNavLink.save();
};

const setNavLink = function (id, navLink) {
  return NavLink.findOneAndUpdate(
    {"id": id},
    { "$set": navLink},
    {"new": true});
};

const deleteNavLink = function (id) {
  return NavLink.deleteOne({id: id});
};

export default {
  getNavbar,
  getAllNavLinks,
  getNavLink,
  createNavLink,
  setNavLink,
  deleteNavLink,
  setNavbar
}