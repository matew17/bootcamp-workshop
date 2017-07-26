import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTopScores]'
})
export class TopScoresDirective implements OnInit {
  @Input() average: number;

  constructor(
    private element: ElementRef
  ) {
  }

  ngOnInit() {
    if (this.average >= 3 && this.average < 3.5) {
      this.element.nativeElement.style.color = 'rgba(255,255,0, 0.8)';
    } else if (this.average >= 3.5) {
      this.element.nativeElement.style.color = 'rgba(0, 255, 0, 0.8)';
    } else {
      this.element.nativeElement.style.color = 'rgba(255, 0, 0, 0.8)';
    }
  }
}
