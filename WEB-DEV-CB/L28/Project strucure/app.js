const path = require('path');
const express = require('express');
const app = express();
// const Todos = require('./models/Todos.model');
// const Users = require('./models/Users.model');
const PORT = 4444;

// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connectMongo= require('./database/db');

connectMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})
    .catch(err => {
        throw Error(err);
    })

const todosRouter=require('./routes/todos')
//http://localhost:4444/todos/, METHOD: POST
app.use('/todos', todosRouter);


//app.use('/users', users_in_routesFolder)
//app.use('/superadmin', superadmin_in_routesFolder)
//app.use('/admin', admin_in_routesFolder)


// app.put('/clear-completed', (req, res) => {
//     Todos.deleteMany({
//         status: true
//     }).then((data) => {
//         console.log(data);
//         res.send({
//             msg: "All completed tasks are cleared",
//             data
//         });
//     }).catch((err) => {
//         res.send({
//             msg: err.message
//         })
//     })
// })


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});