// set up all of the objects that we'll need
// our application will run in the console


//add_todo; read from the UI & call the controller
let handler = {
    add_todo: function(){
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        controller.add_todo(addTodoTextInput.value);
        addTodoTextInput.value = "";
    }
};


//add_todo; add new todo to the model
let controller = {
    add_todo: function(todoText){
        model.add_todo(todoText);
    }
};


// create; save the new todo
let model = {
  todos: [],
  add_todo: function(todoText){
      this.todos.push(todoText);
  }
};

let view = {};