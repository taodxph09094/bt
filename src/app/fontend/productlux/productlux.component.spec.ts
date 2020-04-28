import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductluxComponent } from './productlux.component';

describe('ProductluxComponent', () => {
  let component: ProductluxComponent;
  let fixture: ComponentFixture<ProductluxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductluxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
