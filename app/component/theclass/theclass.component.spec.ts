import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheclassComponent } from './theclass.component';

describe('TheclassComponent', () => {
  let component: TheclassComponent;
  let fixture: ComponentFixture<TheclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheclassComponent]
    });
    fixture = TestBed.createComponent(TheclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
