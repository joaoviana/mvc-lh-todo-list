# MVC-LH - TODO APP ▶️

## ⚠️ Overview ⚠️

A simple Todo App designed by the MVC-LH Architecture Paradigm. 
MVC-LH stands for:
 * Model
 * View
 * Controller
 * Logic
 * Handler

---

## User stories 👤 

1. add a todo  
2. see all todos  
3. update todos  
4. delete one  
  
---

## Dev plan 🌈

|    | handler | controller | model | view |  
| --- | --- | --- | --- | --- |   
| 1 | _add\_todo_; read from the UI & call the controller | _add\_todo_; add new todo to the model | _create_; save the new todo | |    
| 2 | _read\_all_; call the controller | _read\_all_; read all from the model, call the view to display everything | _read\_all_; return everything in memory | _display\_all_; display all items to the UI |  
| 3 | _update\_one_; read old item and new value from UI.  Call the controller | _update\_one_; call the model to update the correct entry, call view to display new todo list | _update\_one_; updates the correct entry in memory | |  
| 4 | _delete\_one_; reads user input and calls the controller | _delete\_one_; calls the model to delete said item, displays to todo list | _delete\_one_; deletes selected item from memory | |  

---

<br>

(there is no L in this app, it's all about state and not logic)


---
<br>

### Notes 🔦

MVC-LH architecture paradigm has a faster development process. This structure is a catalist on collaborative programming. 

The modifications provided do not affect the entire model and the architecture. 
