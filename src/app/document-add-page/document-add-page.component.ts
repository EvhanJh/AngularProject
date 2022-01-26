import { Component, OnInit } from '@angular/core';
import {NotebookService} from "../services/notebook/notebook.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentService} from "../services/document/document.service";
import * as showdown from 'showdown';


@Component({
  selector: 'app-document-add-page',
  templateUrl: './document-add-page.component.html',
  styleUrls: ['./document-add-page.component.scss']
})
export class DocumentAddPageComponent implements OnInit {
  notebook: any;
  form: any;
  html: any;
  constructor(public notebookService: NotebookService,
              public documentService: DocumentService,
              public router: Router,
              public route: ActivatedRoute) {
    this.form = {
      nom: '',
      category: '',
      content: '',
      notebook_id: ''
    }
  }

  add() {
    this.form.notebook_id = this.notebook.id;
    console.log(this.form);
    this.documentService.addDocument(this.form);
    this.router.navigate(['/notebook/'+ this.notebook.id]);
  }

  displayHtml() {
    let converter = new showdown.Converter()
    this.html      = converter.makeHtml(this.form.content);
    this
    console.log(this.form.content)
  }

  reset(): void {
    this.form = {
      nom: '',
      category: '',
      content: '',
      notebook_id: ''
    }
  }

  ngOnInit(): void {
    let id: any;
    this.notebookService.getList();
    this.route.params.subscribe((params) => (id = params['id']));
    console.log(id);
    this.notebook = this.notebookService.getNotebookById(id);
  }

}
