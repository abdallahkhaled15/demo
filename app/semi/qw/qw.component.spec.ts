import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QWComponent } from './qw.component';

describe('QWComponent', () => {
  let component: QWComponent;
  let fixture: ComponentFixture<QWComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QWComponent]
    });
    fixture = TestBed.createComponent(QWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
