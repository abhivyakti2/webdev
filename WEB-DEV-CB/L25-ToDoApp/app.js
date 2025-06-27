// const express=require('express');
// const path= require('path');
// const app=express();
// const PORT=4455;
// const {v4 :uuid}= require('uuid');

// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: true }));



// let todos =[];

// app.get('/todos', (req,res)=>{
//     res.send(todos);
// })

// app.post('/todos',(req,res)=>{
//     let {task}=req.body;
//     todos.push({
//         task,
//         id: uuid(),
//         status: false
//     })
//     res.send({
//         msg: 'Task added successfully',
//         task
//     })
// })


// //CHANGE STATUS OF COMPLETION
// app.put('/todos', (req,res)=>{
//     const {id}=req.body;
//     todos=todos.map(item=>{
//         if(item.id==id){
//             return{
//                 ...item,
//                 status: !item.status
//             };
//         }
//         else{
//             return item;
//         }
//     })
//     res.send({
//         msg: 'Task updated successfully',
//         todos
//     })
// })

// app.delete('/todos',(req,res)=>{
//     const {id}=req.body;
//     todos=todos.filter(item=>{
//         return item.id!==id;        
//     })
//     res.send({
//         msg: 'Task deleted successfully',
//         todos
//     })
// })


// app.listen(PORT,()=>{
//     console.log(`http://localhost:${PORT}`);
// })


const path=require('path')
const express=require('express')
const app=express()
const PORT=3450
const {v4 : uuid}= require('uuid')

let tbr=[]

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

app.get('/tbr', (req,res)=>{
    res.send(tbr)
})

app.post('/tbr', (req,res)=>{
    const {book}=req.body;
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