import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffencesService } from '../offences.service';
import { NavController } from '@ionic/angular';
import { PapersService } from "../../papers/papers.service";
import { Offence } from '../offence.model';

@Component({
  selector: 'app-offence-details',
  templateUrl: './offence-details.page.html',
  styleUrls: ['./offence-details.page.scss'],
})
export class OffenceDetailsPage implements OnInit {
  offence: any;
  paperinfo: any;

  constructor(
    private route: ActivatedRoute,
    private offencesService: OffencesService,
    private papersService: PapersService,
    private navCtrl: NavController
    ) { 
        this.offence = [],
        this.paperinfo = []
      }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('offenceId')) {
        this.navCtrl.navigateBack('/offences');
        return;
      }
      this.offence = this.offencesService.getOffence(paramMap.get('offenceId'));
    });

    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('paperId')) {
        this.offence = this.offencesService.getOffence(paramMap.get('offenceId'));
        return;
      }
      this.paperinfo = this.papersService.getPaper(paramMap.get('paperId'));
    });
  }

}
