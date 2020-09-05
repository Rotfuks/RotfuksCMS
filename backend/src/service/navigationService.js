import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const navLinkSchema = new Schema({
  rPagesId: {type: String, index: true},
  label: String,
  url: String,
  linkTarget: Boolean,
});

const navbarSchema = new Schema({
  rPagesId: {type: String, index: {unique: true}},
  logo: String,
  text: String,
  mainNav: [navLinkSchema],
  sideNav: [navLinkSchema],
});

const NavLink = mongoose.model('NavLink', navLinkSchema);
const Navbar = mongoose.model('Navbar', navbarSchema);

const getNavbar = function() {
  return Navbar.findOne({rPagesId: process.env.PAGES_ID});
};

const setNavbar = async function(navbarInput) {
  navbarInput.mainNav = await resolveNavList(navbarInput.mainNav);
  navbarInput.sideNav = await resolveNavList(navbarInput.sideNav);

  return Navbar.findOneAndUpdate(
      {'rPagesId': process.env.PAGES_ID},
      {'$set': navbarInput},
      {'new': true});
};

const resolveNavList = async function(navList) {
  if (!navList) return;
  const resolveMainNav = await navList.map(async (navLink) => {
    if (navLink._id) {
      return await NavLink.findOne({_id: navLink._id});
    } else {
      return await createNavLink(navLink);
    }
  });
  return await Promise.all(resolveMainNav);
};

const getAllNavLinks = function() {
  return NavLink.find({rPagesId: process.env.PAGES_ID});
};

const getNavLink = function(_id) {
  return NavLink.findOne({_id: _id});
};

const createNavLink = function(navLink) {
  const newNavLink = new NavLink(navLink);
  newNavLink.rPagesId = process.env.PAGES_ID;
  return newNavLink.save();
};

const setNavLink = function(_id, navLink) {
  return NavLink.findOneAndUpdate(
      {'_id': _id},
      {'$set': navLink},
      {'new': true});
};

const deleteNavLink = function(_id) {
  deleteNavLinkRefs(_id);
  return NavLink.deleteOne({_id: _id});
};

const deleteNavLinkRefs = async function(_id) {
  getNavbar().then((navbar) => {
    if (navbar.mainNav) {
      navbar.mainNav = navbar.mainNav.filter((nav) => nav._id !== _id);
    }
    if (navbar.sideNav) {
      navbar.sideNav = navbar.sideNav.filter((nav) => nav._id !== _id);
    }
    navbar.save();
  });
};

export default {
  getNavbar,
  getAllNavLinks,
  getNavLink,
  createNavLink,
  setNavLink,
  deleteNavLink,
  setNavbar,
};
