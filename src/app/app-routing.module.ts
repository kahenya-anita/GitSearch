import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RepoSearchComponent } from './Components/repo-search/repo-search.component';
import { NotFoundComponent } from './Components/not-found/not-found/not-found.component';
import { SearchresultComponent } from './Components/searchresult/searchresult.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'repo-search/:reponame', component: RepoSearchComponent },
  { path: 'searchresult/:username', component: SearchresultComponent },
  { path: 'not-found', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
