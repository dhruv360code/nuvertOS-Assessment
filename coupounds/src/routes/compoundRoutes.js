const router = require("express").Router();

const { addCompound, getAllCompounds, getCompoundById, deleteCompound, updateCompound } = require("../controllers/compoundController");

router.post("/addCompound", addCompound);
router.get("/getAllCompounds", getAllCompounds);
router.get("/getCompound/:id", getCompoundById);
router.delete("/deleteCompound/:id", deleteCompound);
router.put("/updateCompound/:id", updateCompound);

module.exports = router;
