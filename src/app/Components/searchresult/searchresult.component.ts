import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../../Model/users';
import { Repositories } from 'src/app/Model/repositories-by-name';
import { Repositories } from 'src/app/models/repositories'; 

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
