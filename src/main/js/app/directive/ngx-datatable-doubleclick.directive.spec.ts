import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NgxDatatableDblClickDirective} from './ngx-datatable-doubleclick.directive';
import {Model} from '@swimlane/ngx-datatable';

@Component({
  template: `
    <div
      onDblClick
      (onDblClick)="onRowDblClick($event)">
    </div>
  `,
})
class TestComponent {
  onRowDblClick = jasmine.createSpy('onRowDblClick');
}

describe('NgxDatatableDblClickDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxDatatableDblClickDirective], // Use `imports` for standalone directives
      declarations: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should add "onDblClick" class to the host element', () => {
    const hostElement = fixture.debugElement.query(By.directive(NgxDatatableDblClickDirective));
    expect(hostElement.nativeElement.classList).toContain('onDblClick');
  });

  it('should emit "dblClick" event when a dblclick event with a row is received', () => {
    const hostElement = fixture.debugElement.query(By.directive(NgxDatatableDblClickDirective));
    const directive = hostElement.injector.get(NgxDatatableDblClickDirective);

    const testRow = {id: 1, name: 'Test Row'};
    const mockEvent: Model = {
      type: 'dblclick',
      row: testRow,
      event: new MouseEvent('dblclick'),
      rowElement: document.createElement('tr'),
      cellElement: document.createElement('td'),
      cellIndex: 0,
    };

    directive.onActivate(mockEvent);

    fixture.detectChanges();
    const testComponent = fixture.componentInstance;
    expect(testComponent.onRowDblClick).toHaveBeenCalledWith(testRow);
  });

  it('should not emit "dblClick" event for non-dblclick events', () => {
    const hostElement = fixture.debugElement.query(By.directive(NgxDatatableDblClickDirective));
    const directive = hostElement.injector.get(NgxDatatableDblClickDirective);

    const mockEvent: Model = {
      type: 'click',
      row: {id: 1, name: 'Test Row'},
      event: new MouseEvent('click'),
      rowElement: document.createElement('tr'),
      cellElement: document.createElement('td'),
      cellIndex: 0,
    };

    directive.onActivate(mockEvent);

    fixture.detectChanges();
    const testComponent = fixture.componentInstance;
    expect(testComponent.onRowDblClick).not.toHaveBeenCalled();
  });
});
