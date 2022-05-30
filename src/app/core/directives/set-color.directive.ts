import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({ selector: '[setColor]' })
export class SetColorDirective implements OnChanges {
  @Input() public backgroundColor: string | undefined;
  @Input() public defaultColor: string | undefined;
  @Input() public setColor: string | undefined;

  constructor(private readonly el: ElementRef) { }

  @HostListener('mouseenter') private onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['setColor'].currentValue) {
      this.el.nativeElement.style.color = this.setColor;
    } else if (changes['defaultColor'].currentValue) {
      this.el.nativeElement.style.color = this.defaultColor;
    }
  }
}
