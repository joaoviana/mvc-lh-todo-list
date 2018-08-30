
// update_one; read old item and new value from UI. Call the controller
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

        controller.update_one(positionInput, newTodoTextInput);
         
        positionInput.value = "";
        newTodoTextInput.value = "";
    }
};


// update_one; call the model to update the correct entry, call view to display new todo list
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
    }
};


// update_one; updates the correct entry in memory
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