import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowKanComponent } from './know-kan.component';

describe('KnowKanComponent', () => {
  let component: KnowKanComponent;
  let fixture: ComponentFixture<KnowKanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowKanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowKanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
