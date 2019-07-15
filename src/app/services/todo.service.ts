import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodo(){
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    );
  }
  createTodo(data){
    return this.http.post(this.url, data);

  }

  handleError(error: HttpErrorResponse){
    alert(error.message)
    return throwError('Error in Http service')

  }
}
