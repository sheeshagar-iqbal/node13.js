import mongoose from "mongoose";
import Contact from "../models/contacts.model.js";

export const getContacts = async (req, res) => {
  try {
    //  const contact=   await Contact.find()
    // res.json(contact)
    const { page = 1, limit = 4 } = req.query;
    const result = await Contact.paginate({}, { page: page, limit: limit });
    // res.send(result)
    res.render("home", {
      totalDocs: result.totalDocs,
      limit: result.limit,
      totalPages: result.totalPages,
      currentpage: result.page,
      pagingCounter: result.pagingCounter,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
      prevPage: result.prevPage,
      nextPage: result.nextPage,
      contact:result.docs
    });
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const showContact = async (req, res) => {
  var paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    return res.render("404", { message: "invalid id" });
  }

  try {
    // const contact = await Contact.findOne({_id:req.params.id})
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.render("404", { message: "contact not found" });
    // res.json(contact)
    res.render("show-contact", { contact });
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const addContactPage = (req, res) => {
  res.render("add-contact");
};

export const addContact = async (req, res) => {
  try {
    // res.send(req.body)
    await Contact.insertOne({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });
    res.redirect("/");
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const updatecontactpage = async (req, res) => {
  var paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    return res.render("404", { message: "invalid id" });
  }
  try {
    // console.log("Original URL:", req.originalUrl);
    // console.log("ID:", req.params.id);
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.render("404", { message: "contact not found" });
    res.render("update-contact", { contact });
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const updateContact = async (req, res) => {
  var paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    return res.render("404", { message: "invalid id" });
  }

  try {
    // console.log("Original URL:", req.originalUrl);
    // console.log("ID:", req.params.id);
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
    if (!contact) return res.render("404", { message: "contact not found" });
    res.redirect("/");
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const deleteContact = async (req, res) => {
  var paramId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!paramId) {
    return res.render("404", { message: "invalid id" });
  }

  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.render("404", { message: "contact not found" });
    res.redirect("/");
  } catch (error) {
    res.render("500", { message: error });
  }
};
