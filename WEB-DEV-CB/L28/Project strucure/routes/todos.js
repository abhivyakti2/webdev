const express=require('express');
const Todos=require('../models/Todos.model')
const router= express.Router();


// 3. Creating Documents
router.post('/', async (req, res) => {
    const{task}=req.body;
  try {
      await Todos.create({task});
      res.status(200).json({
          message: "Received request for post todos",
      });
  } catch (error) {
    res.status(503).json({
        message: "Failed request for post todos",
        error: error.message
    });
  }
})


// Collection ka naam should be 'Todos' -> To store Documents
router.get('/', async (req, res) => {
    try {
        let todos = await Todos.find();
        await Todos.create({task});
        res.status(200).json({
            message: "Received request for get todos",
            todos
        });
    } catch (error) {
      res.status(503).json({
          message: "Failed request for get todos",
          error: error.message
      });
    }
})




// let handlePost=(req,res)=>{
//     res.send({
//         message: "Received request for post",
//     });
// }


// let handleGet=(req,res)=>{
//     res.send({
//         message: "Received request for get",
//     });
// }
// // 3. Creating Documents
// router.post('/', handlePost)


// // Collection ka naam should be 'Todos' -> To store Documents
// router.get('/', handleGet)

module.exports=router;