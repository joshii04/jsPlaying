var newTodoInput = document.getElementById('newTodo');
var addNewTodoButton = document.getElementById('addNewTodo');
var todoList = document.getElementById('todoList'); //get the to do list div
var todoDoneList = document.getElementById('todoDoneList');//getting the completed list from the div   
var neededTodo = document.getElementsByClassName('neededTodo')[0]; //get the whole div  
var completed = document.getElementsByClassName('completed')[0]; //get the whole div 
var clear = document.getElementById('clear-all');

//lets start to make the functions

var todos =[];

function clearAll(){
    todos=[]; //array
    updateTodos(); //when called update
}

clear.addEventListener('click', function (e){ //adding an event listener to var clear
    clearAll(); //then call the clearAll function above and update the array within it
});

//add a function for adding to dos 

function addTodo(label){
    if(newTodoInput.value != ""){ //if not empty
        for(var i = 0; i < todos.length; i++){ //checks through the array if it has been checked
            if(newTodoInput.value.toLowerCase() == todos[i].todo.toLowerCase())
            {
                return;
            }
        }
        todos.push({todo: label, checked: false});
        updateTodos();
    }
}


addNewTodoButton.addEventListener("click", function(e){
    e.preventDefault();
    addTodo(newTodoInput.value);
    newTodoInput.value = "";
    console.log(todos);
    updateTodos();
})

function updateTodos(){
    todoList.innerHTML = "";
    todoDoneList.innerHTML ="";
    todos.forEach(function (el){
        var todo = document.createElement("li");
        todo.className = "todo";
        todo.innerText = el.todo;

        todo.addEventListener("click", function(e) {
            todos.forEach(function(el, i) {
                if(todos[i].todo === e.target.innerText) {
                    todos[i].checked = !todos[i].checked;
                    
                    updateTodos();
                }
            })
        });

        if(el.checked){
            todoDoneList.appendChild(todo);
        } else{
            todoList.appendChild(todo);
        }

        //console.log(todo)

        
    })

    if(todoList.childElementCount == 0)
        {
            neededTodo.style.display = "none"; //update the style 
        } else {
            neededTodo.style.display = "block"; //update the style 
        }

        if(todoDoneList.childElementCount == 0)
        {
            completed.style.display = "none";
           
        } else{
            completed.style.display = "block";
        }
}



updateTodos(); //update on start
