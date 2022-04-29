const express = require("express");

const router = express.Router();

const Model = require("../models/model");

module.exports = router;

//Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })

//Get all Method
router.get("/getAll", (req, res) => {
  res.send("hello");
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send(req.params.id);
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

//Post Method
router.post("/post", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
  const data = new Model({
    name: req.body.name,
    email_id: req.body.email_id,
    contact_number: req.body.contact_number,
    age: req.body.age,
  });

  try {
    console.log("data", data);
    const dataToSave = data.save();
    res.status(200).json({
      message: "User Registered",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
