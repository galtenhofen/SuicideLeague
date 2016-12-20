import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISquad } from './squad';
import { IPlayer } from '../players/player';
import {HomeService} from '../home/home.service';
import { Subscription }   from 'rxjs/Subscription';
import globalVars = require('../global/globals');
import { Auth }       from '../auth.service';

@Component({
    moduleId: module.id,
  selector: 'nfl-squad',
  templateUrl: 'squad.component.html',
  styleUrls: ['squad.component.css']
})
export class SquadComponent implements OnInit {
    addedPlayer: IPlayer; 
    subscription: Subscription;
    squad: ISquad;
    players: IPlayer[] = [];
    QB: IPlayer;
    RB1: IPlayer;
    RB2: IPlayer;
    WR1: IPlayer;
    WR2: IPlayer;
    WR3: IPlayer;
    TE: IPlayer;
    FLX: IPlayer;
    DEF: IPlayer;
    currentSquadIDS:string[] = [];
    currentEntry:ISquad;
    submitted:boolean = false;
    postSquadResponse: string;
    errorMessage: string;
    currentWeek: number;
    currentWeekTEST: number;

  constructor(private _homeService: HomeService, private auth: Auth) {
   
this.addedPlayer = null;
this.currentWeek = 0;
this.currentWeekTEST = 1;

  this.subscription = _homeService.addPlayer$.subscribe(
     player => { 
         this.buildSquad(player);

    });

this.currentWeek = this._homeService.getWeek();
                


  }
ngOnInit(): any{
    console.log('IN  OnInit of Squad Component CURRENT WEEK: ' + this.currentWeek );
    this.getCurrentEntry();
     

    this.canEnableSubmit();

    }

  getCurrentEntryOld(){
      this.currentEntry=this._homeService.getEntry();
      if(this.currentEntry!=null){
      this.QB = this.currentEntry.QB;
      this.RB1 = this.currentEntry.RB1;
      this.RB2 = this.currentEntry.RB2;
      this.WR1 = this.currentEntry.WR1;
      this.WR2 = this.currentEntry.WR2;
      this.WR3 = this.currentEntry.WR3;
      this.TE = this.currentEntry.TE;
      this.FLX = this.currentEntry.FLX;
      this.DEF = this.currentEntry.DEF;
      }
      else{
          this.submitted = false;
      }
  }

    getCurrentEntry(){
        // LOCAL API
           this._homeService.getSquad(this.auth.userProfile['username'])
                .subscribe(
                    response => this.currentEntry = response,
                    error => this.errorMessage = <any>error,
                    () => (this.onRequestComplete()));

        }

       buildSquad(player:IPlayer): void{
        console.log('IN buildSquad' + player);
        var pid = player.id;
        var index = this.currentSquadIDS.indexOf(pid);

        if(index == -1){ 
        console.log('IN buildSquad' + player);
        
        this.currentSquadIDS.push(pid);

        if(player.position == "QB" && this.QB == null){
             this.QB = player;
         }
         else if(player.position == "RB"){
             if(this.RB1 ==null)
                {
                    this.RB1 = player;
                }
                else if(this.RB2 ==null)
                {
                    this.RB2 = player;
                }
                else if(this.FLX ==null)
                {
                    this.FLX= player;
                }
         }
          else if(player.position == "WR"){
             if(this.WR1 ==null)
                {
                    this.WR1 = player;
                }
                else if(this.WR2 ==null)
                {
                    this.WR2 = player;
                }
                else if(this.WR3 ==null)
                {
                    this.WR3 = player;
                }
                else if(this.FLX ==null)
                {
                    this.FLX= player;
                }
         }
         else if(player.position == "TE"){
               if(this.TE ==null)
                {
                    this.TE = player;
                }
             
                else if(this.FLX ==null)
                {
                    this.FLX= player;
                }
         }
         if(player.position == "DEF" && this.DEF == null){
             this.DEF = player;
         }
        }
        else{
            console.log('Leaving buildSquad  PLAYER ALREADY CHOSEN');
        }
        this.canEnableSubmit();
   console.log('Leaving buildSquad  currentSquadIDS:' + this.currentSquadIDS);
  } 
 

   onClickRemovePlayer(pos:string, pid:string): void{
    console.log('IN onClickRemovePlayer PlayerId:' + pid);

       this.removeFromArray(pid);

        console.log('IN onClickRemovePlayer from ' + pos);
         if(pos == "Q"){
            this.QB = null;
         }
         if(pos == "R1"){
            this.RB1 = null;
         }
         if(pos == "R2"){
            this.RB2 = null;
         }
         if(pos == "W1"){
            this.WR1 = null;
         }
         if(pos == "W2"){
            this.WR2 = null;
         }
         if(pos == "W3"){
            this.WR3 = null;
         }
         if(pos == "T"){
            this.TE = null;
         }
         if(pos == "F"){
            this.FLX = null;
         }
         if(pos == "D"){
            this.DEF = null;
         }
   this.canEnableSubmit();
  }

  removeFromArray(pid:string): void{
        console.log('Entering removeFromArray  PlayerID: ' + pid);
        var index = this.currentSquadIDS.indexOf(pid);

console.log('IN removeFromArray  Found player at index: ' + index);

        if(index > -1){  
                
                this.currentSquadIDS.splice(index, 1);
            }
            console.log('Leaving   removeFromArray:' + this.currentSquadIDS);
    }

  onClickTest(): void{
        console.log('IN onTest: added players:' + JSON.stringify(this.addedPlayer));

   
  }

  onSubmitTeam(squad:ISquad): void{
        console.log('IN onSubmitTeam');

        //USER WEEK TEST BALLS to add previous squads
        //this.currentWeek = 7;

        this.squad = {
            week: this.currentWeek, 
            //user: "admin",
            user: this.auth.userProfile['username'],
            id: this.auth.userProfile['user_id'] +this.currentWeek +"-2016",
            QB: this.QB,
            RB1: this.RB1,
            RB2: this.RB2,
            WR1: this.WR1,
            WR2: this.WR2,
            WR3: this.WR3,
            TE: this.TE,
            FLX: this.FLX,
            DEF: this.DEF
            }    

            if(this.submitted == false){
                //Team has not been submitted for the week, CALL setSquad
                this.submitted = true;
            this._homeService.setSquad(this.auth.userProfile['username'],this.squad)
            .subscribe(
                        data => this.postSquadResponse = JSON.stringify(data), 
                        error => this.errorMessage = <any>error);
            }
            else{
                //Team has been submitted for the week, call updateSquad
                this._homeService.updateSquad(this.auth.userProfile['username'],this.squad)
            .subscribe(
                        data => this.postSquadResponse = JSON.stringify(data), 
                        error => this.errorMessage = <any>error);
            }
  }

  canEnableSubmit(): void{
console.log("In canEnableSubmit   submitbutton:  "+   document.getElementById('submitTeamBtn'));
console.log("In canEnableSubmit   editbutton:  "+   document.getElementById('editTeamBtn'));

      if(this.QB != null && this.RB1 != null && this.RB2 != null && this.WR1 != null && this.WR2 != null && this.WR3 != null && this.TE != null && this.FLX != null && this.DEF != null){
        if(document.getElementById('submitTeamBtn')!=null){
            (<HTMLInputElement> document.getElementById('submitTeamBtn')).disabled = false;
        }
        else if(document.getElementById('editTeamBtn')!=null){
            (<HTMLInputElement> document.getElementById('editTeamBtn')).disabled = false;
        }
      }
      else{
            if( document.getElementById('submitTeamBtn')!=null){
            (<HTMLInputElement> document.getElementById('submitTeamBtn')).disabled = true;
            }
            else if(document.getElementById('editTeamBtn')!=null){
            (<HTMLInputElement> document.getElementById('editTeamBtn')).disabled = true;
        }
      }
  }

  onRequestComplete(){
       console.log("In onRequestComplete:  currentEntry: " + this.currentEntry); 

      if(this.currentEntry != null){
          console.log("In onRequestComplete: Entry Exists - Assigning Positions"); 
      this.QB = this.currentEntry.QB;
      this.RB1 = this.currentEntry.RB1;
      this.RB2 = this.currentEntry.RB2;
      this.WR1 = this.currentEntry.WR1;
      this.WR2 = this.currentEntry.WR2;
      this.WR3 = this.currentEntry.WR3;
      this.TE = this.currentEntry.TE;
      this.FLX = this.currentEntry.FLX;
      this.DEF = this.currentEntry.DEF;
      this.submitted = true;    
    }
      else{
        console.log("In onRequestComplete:  NO ENTRY");
         this.submitted = false;
      }
    }

 ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}