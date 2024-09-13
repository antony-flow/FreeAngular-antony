import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsChildComponent } from './forms-child.component';

describe('FormsChildComponent', () => {
  let component: FormsChildComponent;
  let fixture: ComponentFixture<FormsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
