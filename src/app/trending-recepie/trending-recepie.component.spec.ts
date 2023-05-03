import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingRecepieComponent } from './trending-recepie.component';

describe('TrendingRecepieComponent', () => {
  let component: TrendingRecepieComponent;
  let fixture: ComponentFixture<TrendingRecepieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingRecepieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingRecepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
