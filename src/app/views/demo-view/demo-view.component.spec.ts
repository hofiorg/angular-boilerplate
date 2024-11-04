import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoViewComponent } from './demo-view.component';

describe('DemoViewComponent', () => {
  let component: DemoViewComponent;
  let fixture: ComponentFixture<DemoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
