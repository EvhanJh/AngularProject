import { Component, OnInit } from '@angular/core';
import {NotebookService} from "../services/notebook/notebook.service";
import {DocumentService} from "../services/document/document.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as showdown from "showdown";

@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.scss']
})
export class DocumentPageComponent implements OnInit {
  notebook: any;
  document: any;
  html: any;
  constructor(public notebookService: NotebookService,
              public documentService: DocumentService,
              public router: Router,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: any;
    let iddoc: any;
    this.notebookService.getList();
    this.route.params.subscribe((params) => (id = params['id']));
    this.route.params.subscribe((params) => (iddoc = params['iddoc']));
    this.document = this.documentService.getDocumentById(iddoc);
    let converter = new showdown.Converter();
    this.html      = converter.makeHtml(this.document.content);
  }

}
