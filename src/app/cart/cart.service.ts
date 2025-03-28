import { Injectable } from '@angular/core';
import { Book } from 'src/types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Array<Book> =[]
  constructor() { }
  addToCart(book:Book){
    this.cart.push(book)

  }
  getCart(){
    return this.cart
  }
  removeCart(book:Book){
    this.cart = this.cart.filter((b)=>b!=book)
  }
}
