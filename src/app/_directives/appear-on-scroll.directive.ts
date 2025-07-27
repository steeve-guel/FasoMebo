import { Directive, effect, ElementRef, inject, Renderer2, signal } from '@angular/core';

@Directive({
  selector: '[appAppearOnScroll]',
  standalone:true
})
export class AppearOnScrollDirective {

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private visible = signal(false);

  private observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      this.visible.set(true);
      this.observer.unobserve(this.el.nativeElement);
    }
  }, {
    threshold: 0.1
  });

  constructor() {
    this.observer.observe(this.el.nativeElement);

    effect(() => {
      if (this.visible()) {
        this.renderer.addClass(this.el.nativeElement, 'visible');
      }
    });
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

}
