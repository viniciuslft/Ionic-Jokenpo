import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParesImparesPage } from './pares-impares.page';

describe('ParesImparesPage', () => {
  let component: ParesImparesPage;
  let fixture: ComponentFixture<ParesImparesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParesImparesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
