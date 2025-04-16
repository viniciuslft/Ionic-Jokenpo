import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokenpoPage } from './jokenpo.page';

describe('JokenpoPage', () => {
  let component: JokenpoPage;
  let fixture: ComponentFixture<JokenpoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JokenpoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
