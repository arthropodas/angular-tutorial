import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/types/Book';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() singleBook:Book = {} as Book; 
  @Output() bookEmit = new EventEmitter<Book>();
   isInCart:Boolean= false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart=()=>{
    console.log('console from child',this.singleBook);
    // this.bookEmit.emit(this.singleBook  );
    this.cartService.addToCart(this.singleBook)
    this.isInCart = true;
    
  } 
  removeCart(){
    this.isInCart = false;
    return this.cartService.removeCart(this.singleBook);
  }
}
