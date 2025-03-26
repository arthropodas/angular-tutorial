import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/types/Book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() singleBook:Book = {} as Book; 
  @Output() bookEmit = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }
  addToCart=()=>{
    console.log('console from child',this.singleBook);
    this.bookEmit.emit(this.singleBook  )
    
  }
}
