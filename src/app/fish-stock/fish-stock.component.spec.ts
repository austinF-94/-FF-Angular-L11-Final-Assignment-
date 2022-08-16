import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishStockComponent } from './fish-stock.component';

describe('FishStockComponent', () => {
  let component: FishStockComponent;
  let fixture: ComponentFixture<FishStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
