const { compoundJoi } = require("../joi/coupound.joi");
const Compound = require("../models/compounds");
const { successResponse, serverErrorResponse } = require("../utils/response");

const addCompound = async (req, res) => {
  try{
    const joiError = compoundJoi.validate(req.body);
    if (joiError.error) {
      return serverErrorResponse(res, joiError.error.details[0].message);
    }
    const compound = await Compound.create(req.body);
    return successResponse(res, compound, "Compound added successfully");
  }
  catch(err){
    return serverErrorResponse(res, `Error in controller ${err.message}`);
  }
}


const getAllCompounds = async (req, res) => {
  try{
    let { page, limit } = req.query;
    const compounds = await Compound.findAll(
      {
        limit: limit ? parseInt(limit) : 10,
        offset: page ? parseInt(page) * parseInt(limit) : 0,
      }
    ); 
    return successResponse(res, compounds, "Compound fetched successfully");
  }
  catch(err){
    return serverErrorResponse(res, `Error in controller ${err.message}`);
  }
}


const updateCompound = async (req, res) => {
  try{
    const joiError = compoundJoi.validate(req.body);
    if (joiError.error) {
      return serverErrorResponse(res, joiError.error.details[0].message);
    }
    const compound = await Compound.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    return successResponse(res, compound, "Compound updated successfully");
  }
  catch(err){
    return serverErrorResponse(res, `Error in controller ${err.message}`);
  }
}


const deleteCompound = async (req, res) => {
  try{
    const compound = await Compound.destroy({
      where: {
        id: req.params.id
      }
    });
    return successResponse(res, compound, "Compound deleted successfully");
  }
  catch(err){
    return serverErrorResponse(res, `Error in controller ${err.message}`);
  }
}


const getCompoundById = async (req, res) => {
  try{
    const compound = await Compound.findOne({
      where: {
        id: req.params.id
      }
    });
    return successResponse(res, compound, "Compound fetched successfully");
  }
  catch(err){
    return serverErrorResponse(res, `Error in controller ${err.message}`);
  }
}


module.exports = {
  addCompound,
  getAllCompounds,
  updateCompound,
  getCompoundById,
  deleteCompound,
}
