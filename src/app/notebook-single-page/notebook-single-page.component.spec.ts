import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookSinglePageComponent } from './notebook-single-page.component';

describe('NotebookSinglePageComponent', () => {
  let component: NotebookSinglePageComponent;
  let fixture: ComponentFixture<NotebookSinglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookSinglePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
