import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConttentComponent } from './conttent.component';

describe('ConttentComponent', () => {
  let component: ConttentComponent;
  let fixture: ComponentFixture<ConttentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConttentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConttentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
