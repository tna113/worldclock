import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgtickComponent } from './imgtick.component';

describe('ImgtickComponent', () => {
  let component: ImgtickComponent;
  let fixture: ComponentFixture<ImgtickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgtickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgtickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
