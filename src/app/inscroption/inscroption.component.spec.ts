import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscroptionComponent } from './inscroption.component';

describe('InscroptionComponent', () => {
  let component: InscroptionComponent;
  let fixture: ComponentFixture<InscroptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscroptionComponent]
    });
    fixture = TestBed.createComponent(InscroptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
