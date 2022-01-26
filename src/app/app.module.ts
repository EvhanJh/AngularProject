import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotebookPageComponent } from './notebook-page/notebook-page.component';
import { NotebookAddPageComponent } from './notebook-add-page/notebook-add-page.component';
import { NotebookUpdatePageComponent } from './notebook-update-page/notebook-update-page.component';
import { NotebookSinglePageComponent } from './notebook-single-page/notebook-single-page.component';
import { DocumentAddPageComponent } from './document-add-page/document-add-page.component';
import { DocumentUpdatePageComponent } from './document-update-page/document-update-page.component';
import { DocumentPageComponent } from './document-page/document-page.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavbarComponent,
    HomePageComponent,
    NotebookPageComponent,
    NotebookAddPageComponent,
    NotebookUpdatePageComponent,
    NotebookSinglePageComponent,
    DocumentAddPageComponent,
    DocumentUpdatePageComponent,
    DocumentPageComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
