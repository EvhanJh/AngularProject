import { Component, OnInit } from '@angular/core';
import {NotebookService} from "../services/notebook/notebook.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notebook-add-page',
  templateUrl: './notebook-add-page.component.html',
  styleUrls: ['./notebook-add-page.component.scss']
})
export class NotebookAddPageComponent implements OnInit {
  form: any;
  constructor(public notebookService: NotebookService, public router: Router) {
    this.form = {
      nom: '',
      description: ''
    };
  }

  add(): void {
    this.notebookService.addNotebook(this.form);
    this.router.navigate(['/notebook']);
  }

  reset(): void {
    this.form = {
      nom: '',
      description: ''
    };
  }

  ngOnInit(): void {}
}
