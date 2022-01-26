import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {NotebookPageComponent} from "./notebook-page/notebook-page.component";
import {NotebookAddPageComponent} from "./notebook-add-page/notebook-add-page.component";
import {NotebookUpdatePageComponent} from "./notebook-update-page/notebook-update-page.component";
import {NotebookSinglePageComponent} from "./notebook-single-page/notebook-single-page.component";
import {DocumentAddPageComponent} from "./document-add-page/document-add-page.component";
import {DocumentUpdatePageComponent} from "./document-update-page/document-update-page.component";
import {DocumentPageComponent} from "./document-page/document-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'notebook', component: NotebookPageComponent },
  { path: 'notebook/add', component: NotebookAddPageComponent },
  { path: 'notebook/update/:id', component: NotebookUpdatePageComponent },
  { path: 'notebook/:id', component: NotebookSinglePageComponent },
  { path: 'notebook/:id/add', component: DocumentAddPageComponent },
  { path: 'notebook/:id/:iddoc/update', component: DocumentUpdatePageComponent },
  { path: 'notebook/:id/:iddoc', component: DocumentPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
