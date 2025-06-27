// const path = require('path');
// const express = require('express');
// const app = express();

// const { v4: uuid } = require('uuid');
// const PORT = 4445;

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: true })); // To make req.body readable we use this

// let todos = [
//     /*
//     {  
//         task: 'Cricket',
//         id: unique,
//         status: true/false
//     }
//     */
// ];

// app.get('/todos', (req, res) => {
//     res.send(todos);
// })

// app.post('/todos',(req,res)=>{
//     const {task}= req.body;
//     todos.push({
//         task,
//         id: uuid(),
//         status : false
//     })
//     res.send({
//         msg: 'Todo added successfully',
//         task
//     })
// })


// app.put('/todos', (req,res)=>{
//      const {id}= req.body;
//      todos=todos.map((item)=>{
//         if(item.id == id){
//             return{
//                 ...item,
//                 status : !item.status
//             }
//         }
//         else return item;
//      })
//      res.send({
//         msg: 'Todo updated successfully',
//         todos
//      })
// })


//------------------------------------------------------------------------------------------------------




// app.delete('/todos', (req,res)=>{
//     const{id}=req.body;
//     todos=todos.filter(item=>
//     {
//         return item.id!==id;
//     })
//     res.send({
//         msg: 'Todo deleted successfully',
//         todos
//     })
// })





// app.listen(PORT, () => {
//     console.log(`http://localhost:` + PORT);
// })







// ---------------------BOOKS-------------------------




const path=require('path')
const express=require('express')
const app=express()
const PORT=3450
const {v4 : uuid}= require('uuid')

let tbr=[]

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

app.get('/tbr', (req,res)=>{
    res.send(tbr)
})

app.post('/tbr', (req,res)=>{
    const {book}=req.body
    tbr.push({book,
        id: uuid(),
        status: false
    })
    res.send({
        msg: 'Book added to TBR',
        book
    })
})

app.put('/tbr', (req,res)=>{
    const{id}=req.body
    tbr=tbr.map((item)=>{
        if(item.id==id) return {
            ...item,
            status: !item.status
        }
        else return item
    })
    res.send({
        msg:'Book marked completed?',
        tbr
    })
})

app.delete('/tbr', (req,res)=>{
    const {id}=req.body
    tbr=tbr.filter((item)=>{
        return item.id!=id
    })
    res.send({
        msg: 'Book deleted from list',
        tbr
    })
})

app.listen(PORT, ()=>{
    console.log('http://localhost:'+PORT)
})