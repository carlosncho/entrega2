import { ComponentFixture, TestBed } from '@angular/core/testing';
import { E404ePage } from './e404e.page';

describe('E404ePage', () => {
  let component: E404ePage;
  let fixture: ComponentFixture<E404ePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(E404ePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
