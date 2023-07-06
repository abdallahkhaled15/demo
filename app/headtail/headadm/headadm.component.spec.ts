import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadadmComponent } from './headadm.component';

describe('HeadadmComponent', () => {
  let component: HeadadmComponent;
  let fixture: ComponentFixture<HeadadmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadadmComponent]
    });
    fixture = TestBed.createComponent(HeadadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
