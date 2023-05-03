import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterimgComponent } from './footerimg.component';

describe('FooterimgComponent', () => {
  let component: FooterimgComponent;
  let fixture: ComponentFixture<FooterimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
