import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { RepoSearchComponent } from './Components/repo-search/repo-search.component';
import { NotFoundComponent } from './Components/not-found/not-found/not-found.component';
import { SearchresultComponent } from './Components/searchresult/searchresult.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavBarComponent,
    RepoSearchComponent,
    NotFoundComponent,
    SearchresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
