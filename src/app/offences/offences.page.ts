import { Component, OnInit } from '@angular/core';
import { OffencesService } from './offences.service';
import { Offence } from './offence.model';

@Component({
  selector: 'app-offences',
  templateUrl: './offences.page.html',
  styleUrls: ['./offences.page.scss'],
})
export class OffencesPage implements OnInit {
  loadedOffences: any;

  constructor(
    private offencesService: OffencesService
  ) 
  {
    this.loadedOffences = [];
  }

  ngOnInit() {
    this.offencesService.offencesData().subscribe(response => {
      this.loadedOffences = response;
    });
  }

}
