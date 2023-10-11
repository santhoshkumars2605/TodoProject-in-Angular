import { Component,Input,Output,EventEmitter,OnInit} from '@angular/core';
import { Todo } from '../shared/todo.model';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{
  @Input() todo!:Todo

  @Output() todoClicked:EventEmitter<void> = new EventEmitter();
  @Output() editClicked:EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked:EventEmitter<void> = new EventEmitter();

  // @ViewChild('editBtn') editBtnElRef!: ElementRef<HTMLElement>

  // test: string = "Default Value"

  ngOnInit():void{
  }
  


  onTodoClicked(){
    this.todoClicked.emit()
  }
  onEditClicked(){
    this.editClicked.emit()
  }
  onDeleteClicked(){
    this.deleteClicked.emit()
  }
}
