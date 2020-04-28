import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoffComponent } from './productoff.component';

describe('ProductoffComponent', () => {
  let component: ProductoffComponent;
  let fixture: ComponentFixture<ProductoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
