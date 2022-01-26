import { Component, OnInit } from '@angular/core';
import {NotebookService} from "../services/notebook/notebook.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentService} from "../services/document/document.service";
import * as showdown from "showdown";

@Component({
  selector: 'app-document-update-page',
  templateUrl: './document-update-page.component.html',
  styleUrls: ['./document-update-page.component.scss']
})
export class DocumentUpdatePageComponent implements OnInit {
  document: any;
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

  update(): void {
    this.documentService.updateDocument(this.notebook.id, this.form);
    this.router.navigate(['/notebook/'+ this.notebook.id]);
  }

  displayHtml() {
    let converter = new showdown.Converter()
    this.html      = converter.makeHtml(this.form.content);
    console.log(this.form.content)
  }

  reset(): void {
    this.form = { ...this.document};
  }

  ngOnInit(): void {
    let id: any;
    let iddoc: any;
    this.notebookService.getList();
    this.route.params.subscribe((params) => (id = params['id']));
    this.route.params.subscribe((params) => (iddoc = params['iddoc']));
    this.notebook = this.notebookService.getNotebookById(id);
    this.document = this.documentService.getDocumentById(iddoc);
    this.form = { ...this.document };
    let converter = new showdown.Converter()
    this.html      = converter.makeHtml(this.form.content);

  }
}
