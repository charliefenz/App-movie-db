import { NgZone, Directive, ElementRef, AfterContentInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appFocus]'
})

export class FocusDirective implements AfterContentInit {

  constructor(private el: ElementRef, private zone: NgZone, private renderer: Renderer2) {}

    ngAfterContentInit(): void {
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.selectRootElement(this.el.nativeElement).focus();
        }, 0));
    }
}
