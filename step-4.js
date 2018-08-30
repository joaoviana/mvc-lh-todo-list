
// delete_one; reads user input and calls the controller
let handler = {
    add_todo: function(){
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        controller.add_todo(addTodoTextInput.value);
        addTodoTextInput.value = "";
    },
    read_all: function(){
        controller.read_all();
    }, 
    update_one: function(){
        var positionInput = document.getElementById("positionInput");
        var newTodoTextInput = document.getElementById("newTodoTextInput");

        controller.update_one(positionInput.value, newTodoTextInput.value);
         
        positionInput.value = "";
        newTodoTextInput.value = "";
    },
    delete_one: function() {
        var positionInputDelete = document.getElementById("positionInputDelete");

        controller.delete_one(positionInputDelete.value);

        positionInputDelete = "";
    }
};


// delete_one; calls the model to delete said item, displays to todo list
let controller = {
    add_todo: function(todoText){
        model.add_todo(todoText);
        view.read_all(model.read_all());
    },
    read_all: function() {
        view.read_all(model.read_all());
    },
    update_one: function(position, todoText){
        model.update_one(position, todoText);
        view.read_all(model.read_all());
    },
    delete_one: function(position){
        model.delete_one(position);
        view.read_all(model.read_all());
    }
};


// delete_one; deletes selected item from memory
let model = {
    todos: [],
    add_todo: function(todoText){
        this.todos.push(todoText);
    },
    read_all: function(){
        return this.todos;
    },
    update_one: function(position, todoText){
        this.todos[position] = todoText;
    },
    delete_one: function(position){
        this.todos.splice(position,1);
    }
};


let view = {
    read_all: function(items){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = ''; //will clear out the ul before adding

        for ( var i = 0; i < items.length ; i++){
          var todoLi = document.createElement('li');
          todoLi.textContent = items[i];
          todosUl.appendChild(todoLi);
        }
    }
};