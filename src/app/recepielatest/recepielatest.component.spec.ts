import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepielatestComponent } from './recepielatest.component';

describe('RecepielatestComponent', () => {
  let component: RecepielatestComponent;
  let fixture: ComponentFixture<RecepielatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepielatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepielatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
