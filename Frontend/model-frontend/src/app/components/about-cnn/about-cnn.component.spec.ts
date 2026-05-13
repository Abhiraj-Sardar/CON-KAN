import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCnnComponent } from './about-cnn.component';

describe('AboutCnnComponent', () => {
  let component: AboutCnnComponent;
  let fixture: ComponentFixture<AboutCnnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCnnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
