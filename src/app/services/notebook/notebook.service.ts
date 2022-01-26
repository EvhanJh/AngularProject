import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {
  list: any;
  constructor() {
    this.list = [];
  }

  getList(): [] {
    let res = localStorage.getItem('notebook');
    if (res != null) this.list = JSON.parse(res);
    return this.list;
  }

  generateId() : number {
    return Date.now();
  }

  getNotebookById(id: number): any {
    return this.list.find((elem: any) => elem.id == id);
  }

  addNotebook(form: any): void {
    const id = this.generateId();
    form.id = id;
    this.list.push(form);
    localStorage.setItem('notebook', JSON.stringify(this.list));
  }

  updateNotebook(form: any): void {
    const id = form.id;
    let elem = this.getNotebookById(id);
    console.log(elem.id);
    if (!elem.id) alert('Erreur lors de la modification');
    else {
      let indice = this.list.indexOf(elem);
      if (indice > -1) this.list[indice] = form;
      localStorage.setItem('notebook', JSON.stringify(this.list));
      this.getList();
    }
  }

  deleteNotebook(id: number): void {
    let elem = this.getNotebookById(id);
    if (!elem.id) alert('Erreur lors de la suppression');
    else {
      let indice = this.list.indexOf(elem);
      this.list.splice(indice, 1);
      localStorage.setItem('notebook', JSON.stringify(this.list));
      this.getList();
    }
  }

}
