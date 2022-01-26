import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookUpdatePageComponent } from './notebook-update-page.component';

describe('NotebookUpdatePageComponent', () => {
  let component: NotebookUpdatePageComponent;
  let fixture: ComponentFixture<NotebookUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookUpdatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
