import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();

  quotes= [
    new Quote(1,'We accept the love we think we deserve', 'Stephen Chbosky'),
    new Quote(2,'Without music, life would be a mistake', 'Friedrich Nietzsche'),
    new Quote(3,'Always forgive your enemies; nothing annoys them so much', 'Oscar Wilde'),
    new Quote(4, 'A friend is someone who knows all about you and still loves you','Elbert Hubbard'),
  ];

  uvotes = 0;
  dvotes = 0;

  upVote(){
    this.uvotes = this.uvotes + 1;
  }

  downVote(){
    this.dvotes = this.dvotes + 1;
  }


  constructor() { }

  ngOnInit() {
  }

}
