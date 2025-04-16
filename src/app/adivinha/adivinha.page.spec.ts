import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdivinhaPage } from './adivinha.page';

describe('AdivinhaPage', () => {
  let component: AdivinhaPage;
  let fixture: ComponentFixture<AdivinhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
