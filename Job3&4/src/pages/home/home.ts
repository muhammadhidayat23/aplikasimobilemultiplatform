import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {
 private myProfil: Profile;
 private status: string;
 constructor(public navCtrl: NavController) {
 this.myProfil = new Profile();
 }
 openAboutPage(){
 this.myProfil.name = "Depandi Enda";
 this.myProfil.updated_time = new Date(Date.now());
 this.myProfil.quote = this.status;
 this.myProfil.like = 0;
 this.myProfil.comments = 0;
 this.myProfil.last_active = 0;
 this.navCtrl.push(AboutPage, {profil: this.myProfil});
 }
}
export class Profile {
 name: string;
 updated_time: Date;
 quote: string;
 like: number;
 comments: number;
 last_active: number;
}