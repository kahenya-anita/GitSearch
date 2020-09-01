import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { MatnavbarModule } from '@angular/material/navbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProfileComponent } from './Components/profile/profile.component';
import { DaysAgoPipe } from './pipe/days-ago';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { RepoSearchComponent } from './Components/repo-search/repo-search.component';
import { NotFoundComponent } from './Components/not-found/not-found/not-found.component';
import { SearchresultComponent } from './Components/searchresult/searchresult.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { VisitedRepositoryDirective } from './Directives/visited-repository.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DaysAgoPipe,
    ProfileComponent,
    NavBarComponent,
    RepoSearchComponent,
    NotFoundComponent,
    VisitedRepositoryDirective,
    SearchresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatnavbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatProgressBarModule,
    FormsModule,
    BrowserAnimationsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
