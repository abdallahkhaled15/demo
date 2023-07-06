import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongraComponent } from './congra.component';

describe('CongraComponent', () => {
  let component: CongraComponent;
  let fixture: ComponentFixture<CongraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongraComponent]
    });
    fixture = TestBed.createComponent(CongraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
