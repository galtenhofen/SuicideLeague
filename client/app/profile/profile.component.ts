import {Component, OnInit} from '@angular/core';
import {HttpModule} from '@angular/http';
import 'rxjs/Rx';  //Load all features
import {BrowserModule} from '@angular/platform-browser';
import { Auth }       from '../auth.service';


@Component({
     moduleId: module.id,
     selector: 'nfl-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']

})
export class ProfileComponent implements OnInit {

       constructor(private auth: Auth) {}

ngOnInit(): any{
    console.log('IN  OnInit of Profile Component Profile: ' + JSON.stringify(this.auth.userProfile));
console.log('IN  OnInit of Profile Component Profile: ' + JSON.stringify(this.auth.userProfile['username']));
    }

}