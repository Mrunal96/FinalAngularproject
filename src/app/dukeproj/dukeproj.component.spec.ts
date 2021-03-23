import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DukeprojComponent } from './dukeproj.component';

describe('DukeprojComponent', () => {
  let component: DukeprojComponent;
  let fixture: ComponentFixture<DukeprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DukeprojComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DukeprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
