import { Component, OnInit } from '@angular/core';
import {NotebookService} from "../services/notebook/notebook.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentService} from "../services/document/document.service";

@Component({
  selector: 'app-notebook-single-page',
  templateUrl: './notebook-single-page.component.html',
  styleUrls: ['./notebook-single-page.component.scss']
})
export class NotebookSinglePageComponent implements OnInit {
  notebook: any;
  documents: any;
  search: string;
  constructor(public notebookService: NotebookService,
              public documentService: DocumentService,
              public router: Router,
              public route: ActivatedRoute) {
    this.search = '';
  }

  delete(notebookId: number, id: number) {
    let res = confirm('Etes-vous sûr de vouloir supprimer le document ? ');
    if (res) this.documentService.deleteDocument(notebookId, id);
    this.documents = this.documentService.getListDocument(this.notebook.id);
  }

  ngOnInit(): void {
    let id: any;
    this.notebookService.getList();
    this.route.params.subscribe((params) => (id = params['id']));
    this.notebook = this.notebookService.getNotebookById(id);
    this.documents = this.documentService.getListDocument(id);
  }
}
