import {Directive, ElementRef, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Model} from '@swimlane/ngx-datatable';

@Directive({
  selector: '[onDblClick]',
  standalone: true
})
export class NgxDatatableDblClickDirective implements OnInit {
  @Output('onDblClick') dblClick = new EventEmitter();

  constructor(private element: ElementRef) {}

  @HostListener('activate', ['$event'])
  onActivate(event: Model): void {
    if (event.type === 'dblclick' && event.row) {
      this.dblClick.emit(event.row);
    }
  }

  ngOnInit(): void {
    (this.element.nativeElement as Element).classList.add(
      'onDblClick'
    );
  }
}
