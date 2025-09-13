async function fetchBooks(){
// graphql query wriiten  as a string 
    const query =`
query{
books{
id
title
author
}
}
`
;

const response = await fetch('http://localhost:4000/graphql',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({query})
});

const result=await response.json();
displayBooks(result.data.books);

}
const displayBooks=(books)=>{
    const bookList = document.getElementById('bookList');
  bookList.innerHTML = ''; 

  books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author} (Id : ${book.id})`;
    bookList.appendChild(li);
  });
}
