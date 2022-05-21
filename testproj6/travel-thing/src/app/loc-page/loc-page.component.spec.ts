import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocPageComponent } from './loc-page.component';

describe('LocPageComponent', () => {
  let component: LocPageComponent;
  let fixture: ComponentFixture<LocPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
