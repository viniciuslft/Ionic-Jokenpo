import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComForPage } from './com-for.page';

describe('ComForPage', () => {
  let component: ComForPage;
  let fixture: ComponentFixture<ComForPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComForPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
