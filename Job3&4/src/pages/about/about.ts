import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
 selector: 'page-about',
 templateUrl: 'about.html',
})
export class AboutPage {
 constructor(public navCtrl: NavController, public navParams: NavParams, private toastController: ToastController) {
 }
}
