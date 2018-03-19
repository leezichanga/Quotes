import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes= [
    new Quote(1,'Stephen Chbosky','We accept the love we think we deserve',new Date(2016,3,14)),
    new Quote(2,'Friedrich Nietzsche', 'Without music, life would be a mistake',new Date(2015,3,14)),
    new Quote(3, 'Oscar Wilde','Always forgive your enemies; nothing annoys them so much',new Date(2017,3,14)),
    new Quote(4, 'Elbert Hubbard','A friend is someone who knows all about you and still loves you',new Date(2013,3,14)),
  ];

  toogleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(isComplete,index){
   if (isComplete){
     let toDelete=confirm(`Are you sure you want to delete this quote: ${this.quotes[index].name}`)
         this.quotes.splice(index,1);
       this.quotes.splice(index,1);
       }
       }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
