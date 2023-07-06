import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotsignedComponent } from './notsigned.component';

describe('NotsignedComponent', () => {
  let component: NotsignedComponent;
  let fixture: ComponentFixture<NotsignedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotsignedComponent]
    });
    fixture = TestBed.createComponent(NotsignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
