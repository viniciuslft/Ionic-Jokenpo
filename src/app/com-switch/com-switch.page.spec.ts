import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComSwitchPage } from './com-switch.page';

describe('ComSwitchPage', () => {
  let component: ComSwitchPage;
  let fixture: ComponentFixture<ComSwitchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComSwitchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
