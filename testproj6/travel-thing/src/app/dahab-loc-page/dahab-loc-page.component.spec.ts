import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahabLocPageComponent } from './dahab-loc-page.component';

describe('DahabLocPageComponent', () => {
  let component: DahabLocPageComponent;
  let fixture: ComponentFixture<DahabLocPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DahabLocPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DahabLocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
