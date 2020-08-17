import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const navLinkSchema = mongoose.Schema({
  id: { type: String, index: { unique: true } },
  rPagesId: {type: String, index: true},
  label: String,
  url: String,
  linkTarget: Boolean
});

const navbarSchema = mongoose.Schema({
  id: { type: String, index: { unique: true } },
  rPagesId: {type: String, index: true},
  logo: String,
  text: String,
  mainNav: [navLinkSchema],
  sideNav: [navLinkSchema]
});

const NavLink = mongoose.model('NavLink', navLinkSchema);
const Navbar = mongoose.model('Navbar', navbarSchema);

const getNavbar = function () {
  return Navbar.findOne({id: process.env.PAGES_ID});
};

const setNavbar = async function (navbarInput) {
  navbarInput.mainNav = await resolveNavList(navbarInput.mainNav);
  navbarInput.sideNav = await resolveNavList(navbarInput.sideNav);

  return Navbar.findOneAndUpdate(
    {"id": process.env.PAGES_ID},
    { "$set": navbarInput},
    {"new": true});
};

const resolveNavList = async function (navList) {
  if (!navList) return;
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
  return NavLink.find({rPagesId: process.env.PAGES_ID});
};

const getNavLink = function (id) {
  return NavLink.findOne({id: id});
};

const createNavLink = function (navLink) {
  let newNavLink = new NavLink(navLink);
  newNavLink.id = uuidv4();
  newNavLink.rPagesId = process.env.PAGES_ID;
  return newNavLink.save();
};

const setNavLink = function (id, navLink) {
  return NavLink.findOneAndUpdate(
    {"id": id},
    { "$set": navLink},
    {"new": true});
};

const deleteNavLink = function (id) {
  deleteNavLinkRefs(id);
  return NavLink.deleteOne({id: id});
};

const deleteNavLinkRefs = async function (id) {
  getNavbar().then((navbar) => {
    if (navbar.mainNav)
      navbar.mainNav = navbar.mainNav.filter((nav) => nav.id !== id);
    if (navbar.sideNav)
      navbar.sideNav = navbar.sideNav.filter((nav) => nav.id !== id);
    navbar.save();
  })
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