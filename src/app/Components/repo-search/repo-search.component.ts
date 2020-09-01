import { Component, OnInit } from '@angular/core';
import { SearchGitService } from '../../services/search-git';
import { Repositories } from '../../Model/repositories';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoriesByName } from '../../Model/repositories-by-name';
import { Users } from '../../Model/users';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {
  
  repos:Repositories[];
  user:Users;
  username:string;
  
  constructor( private route: ActivatedRoute, private searchGitService: SearchGitService ) {}

  searchResult(){
    this.username = this.route.snapshot.paramMap.get('username')
    this.searchGitService.userInfoRequest(this.username)
    this.user = this.searchGitService.user
    this.searchGitService.userRepoRequest(this.username)
    this.repos =this.searchGitService.repos
  }

  ngOnInit(){
    this.searchResult()
  }

}
