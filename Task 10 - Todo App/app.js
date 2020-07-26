var list = document.getElementById('list');

function addTodo(){
    var todo_item = document.getElementById('todo-item');
  
    // create li tag
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);
    
    // create del button
    var delBtn = document.createElement('button');
    var delText = document.createTextNode('Remove');

    delBtn.setAttribute('class' , 'btn');
    delBtn.setAttribute('onclick' , 'deleteItem(this)');
    delBtn.appendChild(delText);
    
    // create edit button
    var editBtn = document.createElement('button')
    var editText = document.createTextNode('Edit');
    editBtn.appendChild(editText);
    editBtn.setAttribute('class' , 'btn');
    editBtn.setAttribute('onclick' , 'editItem(this)');

    li.append(delBtn);
    li.append(editBtn);
    
    list.appendChild(li);

    todo_item.value = '';
}

function deleteItem(e){
    e.parentNode.remove();
}

function deleteAll(){
    list.innerHTML = '';
}

function editItem(e){
    var ev = prompt("enter the edit value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = ev;
       
}
// multiplle attributes can be set