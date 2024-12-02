import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDoleraComponent } from './welcome-dolera.component';

describe('WelcomeDoleraComponent', () => {
  let component: WelcomeDoleraComponent;
  let fixture: ComponentFixture<WelcomeDoleraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeDoleraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeDoleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
