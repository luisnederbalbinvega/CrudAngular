import { Injectable } from '@angular/core';
import { Book } from '../model/book';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  data=[
    {
      id:1,
      title:'angular'
    },
    {
      id:2,
      title:'react'
    },
    {
      id:3,
      title:'java'
    }
    ,{
      id:4,
      title:'spring'
    }
  ];


  constructor() { }

  
    addBook(book:Book){
      this.data.push(book);
      console.log("añadiendo book");
    }


    getBook(id:any){
    }
    updateBook(book:Book){
      this.data.forEach((e)=>{
        if(e.id==book.id){
          e.title=book.title
        }
      });


    }

}
