import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgraComponent } from './productgra.component';

describe('ProductgraComponent', () => {
  let component: ProductgraComponent;
  let fixture: ComponentFixture<ProductgraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductgraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductgraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
