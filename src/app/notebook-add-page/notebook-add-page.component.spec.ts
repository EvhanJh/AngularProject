import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookAddPageComponent } from './notebook-add-page.component';

describe('NotebookAddPageComponent', () => {
  let component: NotebookAddPageComponent;
  let fixture: ComponentFixture<NotebookAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
