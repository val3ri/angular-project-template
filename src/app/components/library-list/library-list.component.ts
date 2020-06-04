import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {

  books: Book[];

  columnsToDisplay: string[] = [
    'title',
    'author'
  ];

  constructor(private libraryService: LibraryService) { 
    this.retrieveBooks();
  }

  ngOnInit() {

  }

  retrieveBooks() {
    this.libraryService.getAll()
      .subscribe(
        data => {
          this.books = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
