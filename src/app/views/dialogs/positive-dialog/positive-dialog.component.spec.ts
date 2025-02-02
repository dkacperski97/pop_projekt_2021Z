import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveDialogComponent } from './positive-dialog.component';

describe('PositiveDialogComponent', () => {
  let component: PositiveDialogComponent;
  let fixture: ComponentFixture<PositiveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositiveDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
