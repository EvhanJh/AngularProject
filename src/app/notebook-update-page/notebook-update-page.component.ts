import { Component, OnInit } from '@angular/core';
import {NotebookService} from "../services/notebook/notebook.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-notebook-update-page',
  templateUrl: './notebook-update-page.component.html',
  styleUrls: ['./notebook-update-page.component.scss']
})
export class NotebookUpdatePageComponent implements OnInit {
  notebook: any;
  form: any;
  constructor(public notebookService: NotebookService,
              public router: Router,
              public route: ActivatedRoute) {
    this.form = {
      nom: '',
      description: ''
    }
  }

  update(): void {
    this.notebookService.updateNotebook(this.form);
    this.router.navigate(['/notebook']);
  }

  reset(): void {
    this.form = { ...this.notebook};
  }

  ngOnInit(): void {
    let id: any;
    this.notebookService.getList();
    this.route.params.subscribe((params) => (id = params['id']));
    this.notebook = this.notebookService.getNotebookById(id);
    this.form = { ...this.notebook };
  }

}
