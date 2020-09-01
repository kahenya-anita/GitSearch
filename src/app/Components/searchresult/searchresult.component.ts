import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../../Model/users';
import { RepositoriesByName } from '../../Model/repositories-by-name';
import { Repositories } from '../../Model/repositories'; 
import { SearchGitService } from 'src/app/services/search-git';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

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