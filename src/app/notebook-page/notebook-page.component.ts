import { Component, OnInit } from '@angular/core';
import {NotebookService} from "../services/notebook/notebook.service";

@Component({
  selector: 'app-notebook-page',
  templateUrl: './notebook-page.component.html',
  styleUrls: ['./notebook-page.component.scss']
})
export class NotebookPageComponent implements OnInit {
  list: any;
  search: string;
  constructor(public notebookService: NotebookService) {
    this.search = '';

  }

  ngOnInit(): void {
    this.list = this.notebookService.getList();
  }

  delete(id: number) {
    let res = confirm('Etes-vous sûr de vouloir supprimer le carnet ? ');
    if (res) this.notebookService.deleteNotebook(id);
  }
}
