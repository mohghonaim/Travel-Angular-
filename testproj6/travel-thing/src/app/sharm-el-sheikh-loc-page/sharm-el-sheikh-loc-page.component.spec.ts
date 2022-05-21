import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharmElSheikhLocPageComponent } from './sharm-el-sheikh-loc-page.component';

describe('SharmElSheikhLocPageComponent', () => {
  let component: SharmElSheikhLocPageComponent;
  let fixture: ComponentFixture<SharmElSheikhLocPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharmElSheikhLocPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharmElSheikhLocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
