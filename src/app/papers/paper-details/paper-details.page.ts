import { Component, OnInit, Input } from '@angular/core';
import { Paper } from '../papers.model';
import { ActivatedRoute } from '@angular/router';
import { PapersService } from '../papers.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paper-details',
  templateUrl: './paper-details.page.html',
  styleUrls: ['./paper-details.page.scss'],
})
export class PaperDetailsPage implements OnInit {
  paper: any;

  constructor(
    private route: ActivatedRoute,
    private papersService: PapersService,
    private navCtrl: NavController
  ) { this.paper = [] }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('paperId')) {
        this.navCtrl.navigateBack('/papers');
        return;
      }
      this.paper = this.papersService.getPaper(paramMap.get('paperId'));
    });
  }

}
