import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/service/books.service';
import { Book } from 'src/app/model/book';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  formulario:FormGroup;
  book:Book={
    id:'',
    title:''
  }
  constructor(private formBuilder:FormBuilder, private BookService:BooksService,private router:Router) { 
    this.formulario=this.formBuilder.group({
      title:['',Validators.required]
    });
    console.log(this.formulario.invalid);
  }

  ngOnInit(): void {
  }
  handleSubmit(){
    this.book.id=Date.now();
    this.book.title=this.formulario.value.title;
    this.BookService.addBook(this.book);
    this.router.navigate(['list-books']);

  }

  

}
