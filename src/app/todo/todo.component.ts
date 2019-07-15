import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // Getting Data
  todos:any;
  

  constructor(private service: TodoService) { 
   }

  ngOnInit() {
    this.service.getTodo().subscribe(response => {
    console.log(response);
    this.todos = response;
    })
  }
  // Posting data †
  createData(todo){
    console.log(todo.value);
    let data = {
      title: todo.value
    }
    this.service.createTodo(data).subscribe(response => {
      console.log(response);
      todo.value = '';
      this.todos.splice(0, 0, data);
    })
  }

}
