
//read_all; call the controller
let handler = {
    add_todo: function(){
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        controller.add_todo(addTodoTextInput.value);
        addTodoTextInput.value = "";
    },
    read_all: function(){
        controller.read_all();
    }
};


//read_all; read all from the model, call the view to display everything
let controller = {
    add_todo: function(todoText){
        model.add_todo(todoText);
    },
    read_all: function() {
        view.read_all(model.read_all());
    }
};


// read_all; return everything in memory
let model = {
  todos: [],
  add_todo: function(todoText){
      this.todos.push(todoText);
  },
  read_all: function(){
      return this.todos;
  }
};

// display_all; display all items to the UI
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