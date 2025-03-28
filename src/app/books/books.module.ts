// src/app/books/books.module.ts
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BooksComponent } from "./books.component";
import { BookComponent } from "../book/book.component";
import { CartComponent } from "../cart/cart.component";
import { BooksService } from "./books.service";

@NgModule({
  declarations: [
    BooksComponent,
    BookComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [BooksService],
  exports: [
    BooksComponent,
    BookComponent, 
    CartComponent,
  ],
})
export class BooksModule {}
