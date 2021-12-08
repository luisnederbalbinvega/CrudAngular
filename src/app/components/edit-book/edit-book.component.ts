import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Book } from 'src/app/model/book';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  formulario:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,private bookService:BooksService,private formBuilder:FormBuilder,private router:Router) {
    var id=this.activatedRoute.snapshot.paramMap.get('id');
      var book:any;
      book=this.bookService.data.filter((b:any)=>{
          return b.id==id;
      });
      this.formulario=this.formBuilder.group({
        title:['',Validators.required]
      });
      this.formulario.setValue({
        title:book[0].title
      });
   }

  ngOnInit(): void {
  }

  handleEdit(){
    var id=this.activatedRoute.snapshot.paramMap.get('id');
    var book:any;
    book=this.bookService.data.filter((b:any)=>{
        return b.id==id;
    });
    console.log("Editando");
    console.log(this.formulario.value.title);
    book[0].title=this.formulario.value.title;
    console.log(book[0]);
    //book.title=this.formulario.value.title;
    //console.log(book);
    this.bookService.updateBook(book[0]);
    this.router.navigate(['list-books']);
  }
}
