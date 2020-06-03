import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

// const baseUrl = 'http://localhost:8080/books';
// const baseUrl = 'http://spring-boot-container:8080/books';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    // return this.http.get(baseUrl);
    return this.http.get<Book[]>('/library-service/books');
    // return this.http.get<Book[]>(baseUrl);
  }


  // return this.httpClient
  //           .get<Course[]>('https://jsonplaceholder.typicode.com/posts');   
  //       }

  // get(id) {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }

  // create(data) {
  //   return this.http.post(baseUrl, data);
  // }

  // update(id, data) {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id) {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  // deleteAll() {
  //   return this.http.delete(baseUrl);
  // }

  // findByTitle(title) {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }
}
