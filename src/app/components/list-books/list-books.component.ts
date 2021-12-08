import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';
@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  
  books:any;
  constructor(private booksService:BooksService, private router:Router) { 
    this.books=this.booksService.data;
  }

  ngOnInit(): void {
   
  }
  enviar(){
    this.router.navigate(['add-book']);
  }
  delete(id:any){
    var  ids=this.booksService.data.filter((book:any)=>{
        return book.id!=id;
      });
      console.log(ids);
      this.books=ids;
      this.booksService.data=ids;
     //console.log(this.booksService.data);
     //this.books=this.booksService.data;
   }

}
