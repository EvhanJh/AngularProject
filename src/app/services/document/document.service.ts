import {Injectable} from '@angular/core';
import {NotebookService} from "../notebook/notebook.service";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: any;
  constructor(public notebookService: NotebookService,
              public route: ActivatedRoute) {
    this.documents = [];
  }

  getListDocument(notebookId : number): [] {
    let res = localStorage.getItem('documents');
    if (res != null) this.documents = JSON.parse(res);
    return this.documents.filter((elem: any) => elem.notebook_id == notebookId);
  }

  generateId() : number {
    return Date.now();
  }

  getDocumentById(id: number): any {
    return this.documents.find((elem: any) => elem.id == id);
  }

  addDocument(form: any): void {
    const id = this.generateId();
    form.id = id;
    this.documents.push(form);
    localStorage.setItem('documents', JSON.stringify(this.documents));
  }

  updateDocument(notebookId : number, form: any): void {
    const id = form.id;
    let elem = this.getDocumentById(id);
    console.log(elem.id);
    if (!elem.id) alert('Erreur lors de la modification');
    else {
      let indice = this.documents.indexOf(elem);
      if (indice > -1) this.documents[indice] = form;
      localStorage.setItem('documents', JSON.stringify(this.documents));
      this.getListDocument(notebookId);
    }
  }

  deleteDocument(notebookId: number, id: number): void {
    let elem = this.getDocumentById(id);
    if (!elem.id) alert('Erreur lors de la suppression');
    else {
      let indice = this.documents.indexOf(elem);
      this.documents.splice(indice, 1);
      localStorage.setItem('documents', JSON.stringify(this.documents));
    }
  }
}
