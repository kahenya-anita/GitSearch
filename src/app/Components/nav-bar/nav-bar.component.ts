import { Component, OnInit } from '@angular/core';
import { SearchGitService } from '../../services/search-git';
import { Users } from '../../Model/users';
import { Repositories } from '../../Model/repositories';
import { Router } from '@angular/router';
import { SearchresultComponent } from '../searchresult/searchresult.component';
import { RepositoriesByName } from '../../Model/repositories-by-name';
import { NumberOfRepos } from '../../Model/number-of-repos';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  username:string;
  user:Users;
  repos:Repositories[];
  searchResult: SearchresultComponent;
  reposByName:RepositoriesByName[];
  reponame:string;
  isShowUserForm = false;
  isShowRepoForm = false; 
  numberOfRepos: NumberOfRepos;
  
  constructor( private router: Router, private searchGitService: SearchGitService ) {}

  toggleUserForm(){
    this.isShowUserForm = !this.isShowUserForm;
  }

  toggleRepoForm(){
    this.isShowRepoForm = !this.isShowRepoForm;
  }

  findProfile(){
    this.router.navigate(['/search-result',this.username]);
    this.searchGitService.userInfoRequest(this.username)
    this.user = this.searchGitService.user
    this.searchGitService.userRepoRequest(this.username)
    this.repos =this.searchGitService.repos
  }

  findRepos(){
    this.router.navigate(['/repo-result',this.reponame]);
    this.searchGitService.repoByNameRequest(this.reponame);
    this.reposByName =this.searchGitService.reposByName;
    this.searchGitService.repoByNameNumberRequest(this.reponame);
    this.numberOfRepos =this.searchGitService.numberOfRepos;
  } 


  ngOnInit(){
  }

}
