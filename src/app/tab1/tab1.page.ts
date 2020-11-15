// core modules
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

// pages
import { ProfilePage } from '../shared/profile/profile.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(
    public modalContrller: ModalController
  ) {}

  async ngOnInit() {
    const modal = await this.modalContrller.create({
      component: ProfilePage
    });
    await modal.present();
  }

}
