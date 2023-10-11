import { Component } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todos!:Todo[]
  showVAlidationError!:boolean;
  constructor(private dataService:DataService , private dialog:MatDialog){}

  ngOnInit():void{
    this.todos = this.dataService.getAllTodos()
  }

  onFormSubmit(form:NgForm):any{
    console.log("Form submited")
    console.log(form)
    if(form.invalid) {
      return this.showVAlidationError=true
    }
    this.dataService.addTodo(new Todo(form.value.text))
    this.showVAlidationError=false
    form.reset()

  }
  toggleCompleted(todo: Todo){
    todo.completed = !todo.completed
  }
  editTodo(todo:Todo){
    //We need index of todo
    //user needs a new data of chagdd todo

    const index = this.todos.indexOf(todo)

    let dialogRef =this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data:todo
    });

    dialogRef.afterClosed().subscribe((result)=>{
      if(result){
        this.dataService.updateTodo(index,result)
      }
    })
    // this.dataService.updateTodo()
  }
  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index)
  }
}
