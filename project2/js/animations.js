var newTodoInput = document.getElementById('newTodo');
var addNewTodoButton = document.getElementById('addNewTodo');
var todoList = document.getElementById('todoList'); //get the to do list div
var todoDoneList = document.getElementById('todoDoneList')//getting the completed list from the div   
var neededTodo = document.getElementsByClassName('neededTodo')[0]; //get the whole div  
var completed = document.getElementsByClassName('completed')[0]; //get the whole div 
var clear = document.getElementsById('clear-all');

//lets start to make the functions

function clearAll(){
    todos=[]; //array
    updateTodos(); //when called update
}

clear.addEventListener('click', function (e){ //adding an event listener to var clear
    clearAll(); //then call the clearAll function above and update the array within it
});


