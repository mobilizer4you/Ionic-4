import { Component, OnInit } from '@angular/core';
import { Paper } from './papers.model';
import { PapersService } from './papers.service';


@Component({
  selector: 'app-papers',
  templateUrl: './papers.page.html',
  styleUrls: ['./papers.page.scss'],
})
export class PapersPage implements OnInit {
  loadedPapers: any;

  constructor(
    private papersService: PapersService
  )
  { 
    this.loadedPapers = [];
  }
  
  ngOnInit() {
    this.papersService.papersData().subscribe(response => {
      this.loadedPapers = response;
    });
  }
}
