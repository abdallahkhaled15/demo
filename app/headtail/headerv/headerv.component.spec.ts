import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadervComponent } from './headerv.component';

describe('HeadervComponent', () => {
  let component: HeadervComponent;
  let fixture: ComponentFixture<HeadervComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadervComponent]
    });
    fixture = TestBed.createComponent(HeadervComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
