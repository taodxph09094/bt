import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgameComponent } from './productgame.component';

describe('ProductgameComponent', () => {
  let component: ProductgameComponent;
  let fixture: ComponentFixture<ProductgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
