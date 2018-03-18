import { Directive,ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(private elem:ElementRef) {
  }

  @HostListener("click") onClicks(){
  this.textDeco("#7f7fff")
  }

  @HostListener("dblclick") onDoubleClicks(){
  this.textDeco("None")
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.color= action;
  }

}
