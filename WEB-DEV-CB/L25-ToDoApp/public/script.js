// let taskForm=document.querySelector('#add-task');
// let taskInput=document.querySelector('#task-input');
// let taskList=document.querySelector('.taskList');

// let currentTodos = [];

// taskList.addEventListener('click', event=>{
//     let element=event.target;
//     if(element.classList.contains('complete-btn')){
//         let id=element.children[0]
//     }
// })


// function addToTaskList(data){
//     taskList.innerText='';
//     data.forEach(d => {
//         let li=document.createElement('li');
//         li.classList.add('task-item');
//         li.innerHTML=`<span class="task-text">${d.task}</span>
//                     <div class="task-actions">
//                         <button class="complete-btn">
//                             ${d.status ? 'Undo' : 'Completed'}
//                         </button>
//                         <button class="delete-btn">Delete
//                             <span style='display:none'>${d.id}</span>
//                         </button>
//                     </div>`;
//                     taskList.appendChild(li);
//     })
// }

// function refreshTodos(){
//     axios.get('/todos')
//     .then(({data})=>{
//         console.log(data);
//         currentTodos = data;
//         addToTaskList(data);
//     })
// }


// taskForm.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     let taskname=taskInput.value;
//     axios.post('/todos', {"task":taskname})
//     .then(({data})=>{
//             refreshTodos();
//         })
//         .catch(err=>{
//             alert(err.message);
//         })
// })

// refreshTodos();
















let bookEntry=document.querySelector('#book-entry')
let booktitle=document.querySelector('#book-title')
let bookList=document.querySelector('.book-list')

let currTBR=[];

function refreshTBR(){
   axios.get('/tbr')
   .then(({data})=>{
    console.log(data)
    currTBR=data;
    addToTBR(data);
   })
}

bookEntry.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    let bookName=booktitle.value;

    // console.log('Entry made')
    axios.post('/tbr', {
        "book": bookName
    })
    .then(({data})=>{
        console.log(data)
    })
    .catch((err)=>{
        alert(err.message)
    })
})

function addToTBR(data){
    bookList.innerText='';
    data.forEach(element => {
        let li=document.createElement('li');
        li.classList.add('book-listed');
        li.innerHTML=`
        <span class="book-name">${element.book}</span>
        <div class="book-actions">
            <button class="complete-btn">${element.status ? 'Finished' : 'To Read'}
                <span style="display: none;">${element.id}</span>
            </button>
            <button class="delete-btn">Remove
                <span style="display: none;">${element.id}</span>
            </button>
        </div>`;

        bookList.appendChild(li);
    });

}
refreshTBR();