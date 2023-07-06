import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadstComponent } from './headst.component';

describe('HeadstComponent', () => {
  let component: HeadstComponent;
  let fixture: ComponentFixture<HeadstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadstComponent]
    });
    fixture = TestBed.createComponent(HeadstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
