const express = require("express");

const Task = require("../models/task");

const router = express.Router();

// Method Get

router.get("/",async (req,res)=>{
  const TaskResult = await Task.find()
  console.log(TaskResult);
  res.json(TaskResult);
});
router.get("/:id",async (req,res)=>{
  try{
    const TaskById = await Task.findById(req.params.id);
    res.json(Task);
  }catch(err){
    res.json({ status:"Does not exist" });
  }
})

// Method Post

router.post("/",async (req,res)=>{
  const { title, description } = req.body;
  const TaskResponse = new Task({ title,description });
  await TaskResponse.save();
  res.json("received");
})

// Method Put

router.put("/:id",async (req,res)=>{
  const { title,description } = req.body;
  const newTask = { title,description };
  await Task.findByIdAndUpdate(req.params.id,newTask);
  res.json({
    status: "Received and complete",
    date: (new Date()).toDateString()
  })
})

// Method Delete

router.delete("/:id",async (req,res)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.json({ status: "Task Deleted" });
})

module.exports = router;