import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeHomeComponent } from './receipe-home.component';

describe('ReceipeHomeComponent', () => {
  let component: ReceipeHomeComponent;
  let fixture: ComponentFixture<ReceipeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceipeHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceipeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
