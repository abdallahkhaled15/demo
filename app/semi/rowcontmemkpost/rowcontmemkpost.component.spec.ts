import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowcontmemkpostComponent } from './rowcontmemkpost.component';

describe('RowcontmemkpostComponent', () => {
  let component: RowcontmemkpostComponent;
  let fixture: ComponentFixture<RowcontmemkpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowcontmemkpostComponent]
    });
    fixture = TestBed.createComponent(RowcontmemkpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
