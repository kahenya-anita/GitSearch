import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
    selector: '[appVisitedRepository]'
  })
export class VisitedRepository {
    constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks(){
    this.text("rgb(255, 20, 147")
  }

  private text(action:string){ 
    this.elem.nativeElement.style.color=action;
  }
}
}
