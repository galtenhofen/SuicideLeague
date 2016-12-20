import {Component, OnInit} from '@angular/core';
import {HttpModule} from '@angular/http';
import 'rxjs/Rx';  //Load all features
import {BrowserModule} from '@angular/platform-browser';
import {PlayerListComponent}  from '../players/player-list.component';
import {ISquad}  from '../squad/squad';
import { IPlayer } from '../players/player';
import { Subscription }   from 'rxjs/Subscription';
import {HomeService} from '../home/home.service';
import { Auth }       from '../auth.service';

@Component({
     moduleId: module.id,
     selector: 'home-app',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']

})
export class HomeComponent implements OnInit{

highlightHome:string;
highlightCreate:string;
highlightResults:string;
highlightLeader:string;
highlightProfile:string;
homeHighlighted: boolean;
createHighlighted: boolean;
resultsHighlighted: boolean;
leaderHighlighted: boolean;
profileHighlighted: boolean;
players: IPlayer[]=[];
errorMessage: string;
subscription: Subscription;
addedSquad: ISquad;
loadPlayersResponse: string;
currentWeek:number;

public squad:ISquad;


constructor(private _homeService: HomeService, private auth: Auth) { 
    this.highlightHome = 'highlight-class';
    this.highlightCreate = 'nolight-class';
    this.highlightResults = 'nolight-class';
    this.highlightLeader = 'nolight-class';
    this.highlightProfile = 'nolight-class';
    this.homeHighlighted = true;
    this.createHighlighted = false;
    this.resultsHighlighted = false;
    this.leaderHighlighted = false;
    this.profileHighlighted = false;
   
/*  Update Player data instead of retrieving all players?  
 this._homeService.getAllPlayers()
                .subscribe(
                    response => this.players = response.players,
                    error => this.errorMessage = <any>error,
                    () => (this.onRequestComplete()));
*/
  }

   
  viewController: string;
  //isClassHighlighted:boolean = false;



ngOnInit(): any{
console.log('IN OnInit for Home Component.');
this.viewController = "Home";
this.calculateWeek();


}

updateHome(): void {
    this.viewController = "Home"
    console.log('IN updateView  viewController: ' + this.viewController);

    //this.homeHighlighted = !this.homeHighlighted;
    //this.highlightHome = this.homeHighlighted ? 'highlight-class' : 'nolight-class';
  this.highlightHome = 'highlight-class';
  this.highlightCreate = 'nolight-class';
  this.highlightResults= 'nolight-class';
  this.highlightLeader = 'nolight-class';
  this.highlightProfile = 'nolight-class';
}

updateCreate(): void {
    this.viewController = "Create"
    console.log('IN updateView  viewController: ' + this.viewController);

   // this.createHighlighted = !this.createHighlighted;
    //this.highlightCreate = this.createHighlighted ? 'highlight-class' : 'nolight-class';
    this.highlightCreate = 'highlight-class';
    this.highlightHome = 'nolight-class';
    this.highlightResults= 'nolight-class';
    this.highlightLeader = 'nolight-class';
    this.highlightProfile = 'nolight-class';
  
}

updateResults(): void {
    this.viewController = "Results"
    console.log('IN updateView  viewController: ' + this.viewController);

    //this.homeHighlighted = !this.homeHighlighted;
    //this.highlightHome = this.homeHighlighted ? 'highlight-class' : 'nolight-class';
  this.highlightCreate = 'nolight-class';
    this.highlightHome = 'nolight-class';
    this.highlightResults= 'highlight-class';
    this.highlightLeader = 'nolight-class';
    this.highlightProfile = 'nolight-class';
}

updateLeaderboard(): void {
    this.viewController = "Leader"
    console.log('IN updateView  viewController: ' + this.viewController);

this.highlightCreate = 'nolight-class';
    this.highlightHome = 'nolight-class';
    this.highlightResults= 'nolight-class';
    this.highlightLeader = 'highlight-class';
    this.highlightProfile = 'nolight-class';
    //this.homeHighlighted = !this.homeHighlighted;
    //this.highlightHome = this.homeHighlighted ? 'highlight-class' : 'nolight-class';
  
}

updateProfile(): void {
    this.viewController = "Profile"
    console.log('IN updateView  viewController: ' + this.viewController);

this.highlightCreate = 'nolight-class';
    this.highlightHome = 'nolight-class';
    this.highlightResults= 'nolight-class';
    this.highlightLeader = 'nolight-class';
    this.highlightProfile = 'highlight-class';
    //this.homeHighlighted = !this.homeHighlighted;
    //this.highlightHome = this.homeHighlighted ? 'highlight-class' : 'nolight-class';
  
}

/*  Removing in order to use local DB
 addEntry(squad:ISquad): void{
        console.log('IN addEntry - home.component ');
        this.addedSquad = squad;
        //this.QB = this.addedSquad.QB;

 }

newEntry(squad:ISquad): void{
        console.log('IN newEntry - home.component ');
        this.addedSquad = squad;
        console.log('inputSquad: ' + JSON.stringify(squad));

 }*/

calculateWeek(){
var todayDate = new Date();
console.log('Today is:   ' + todayDate);
var week1 = new Date("9/13/2016");
var week2 = new Date("9/20/2016");
var week3 = new Date("9/27/2016");
var week4 = new Date("10/04/2016");
var week5 = new Date("10/11/2016");
var week6 = new Date("10/18/2016");
var week7 = new Date("10/25/2016");
var week8 = new Date("11/01/2016");
var week9 = new Date("11/08/2016");
var week10 = new Date("11/15/2016");
var week11 = new Date("11/22/2016");
var week12 = new Date("11/29/2016");
var week13 = new Date("12/06/2016");
var week14 = new Date("12/13/2016");
var week15 = new Date("12/20/2016");
var week16 = new Date("12/27/2016");
var week17 = new Date("01/03/2017");


if (todayDate < week1){
    this.currentWeek = 1;
}
else if (todayDate < week2){
    this.currentWeek = 2;
}
else if (todayDate < week3){
    this.currentWeek = 3;
}
else if (todayDate < week4){
    this.currentWeek = 4;
}
else if (todayDate < week5){
    this.currentWeek = 5;
}
else if (todayDate < week6){
    this.currentWeek = 6;
}
else if (todayDate < week7){
    this.currentWeek = 7;
}
else if (todayDate < week8){
    this.currentWeek = 8;
}
else if (todayDate < week9){
    this.currentWeek = 9;
}
else if (todayDate < week10){
    this.currentWeek = 10;
}
else if (todayDate < week11){
    this.currentWeek = 11;
}
else if (todayDate < week12){
    this.currentWeek = 12;
}
else if (todayDate < week13){
    this.currentWeek = 13;
}
else if (todayDate < week14){
    this.currentWeek = 14;
}
else if (todayDate < week15){
    this.currentWeek = 15;
}
else if (todayDate < week16){
    this.currentWeek = 16;
}
else if (todayDate < week17){
    this.currentWeek = 17;
}
else{
    this.currentWeek = 1;
}

console.log('IN calculateWeek.  Welcome to week ' + this.currentWeek);

this._homeService.updateWeek(this.currentWeek);

}

onRequestComplete(){
console.log('IN onRequestComplete.  Players Acquired.');

this._homeService.loadPlayers(this.players)
 .subscribe(
            data => this.loadPlayersResponse = JSON.stringify(data), 
            error => this.errorMessage = <any>error);

    }

}