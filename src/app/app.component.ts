import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from "@ionic/angular";

import { PapersService } from "../app/papers/papers.service";
import { OffencesService } from "../app/offences/offences.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  offences : any;
  papers: any;

  constructor(
    private route: ActivatedRoute,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private offenceservice: OffencesService,
    private papersservice: PapersService,
    private navCtrl: NavController
  ) {
    this.initializeApp();
    this.offences = [];
    this.papers = [];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.offences = this.offenceservice.offencesData().subscribe( response => {
      this.offences = response;
    });
    this.route.paramMap.subscribe(paramMap => {
      this.offences = this.offenceservice.getOffence(paramMap.get('offenceId'));
    });

    this.papers = this.papersservice.papersData().subscribe( response => {
      this.papers = response;
    });
    this.route.paramMap.subscribe(paramMap => {
      this.papers = this.papersservice.getPaper(paramMap.get('paperId'));
    });
  }
}
