import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISquad } from '../squad/squad';
import { IPlayer } from '../players/player';
import {HomeService} from '../home/home.service';
import { Subscription }   from 'rxjs/Subscription';
import globalVars = require('../global/globals');
import { Auth }       from '../auth.service';

@Component({
    moduleId: module.id,
  selector: 'nfl-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.css']
})
export class EntryComponent implements OnInit {
    
    addedPlayer: IPlayer; 
    subscription: Subscription;
    addedSquad: ISquad;
    loading: boolean = false;

    entry: ISquad;
    errorMessage: string;
    currentWeek:number;

    QB: IPlayer;
    RB1: IPlayer;
    RB2: IPlayer;
    WR1: IPlayer;
    WR2: IPlayer;
    WR3: IPlayer;
    TE: IPlayer;
    FLX: IPlayer;
    DEF: IPlayer;

    totalPoints: number;

  constructor(private _homeService: HomeService, private auth: Auth) {

    this.loading = true;
          this._homeService.getSquad(this.auth.userProfile['username'])
                .subscribe(
                    response => this.entry = response,
                    error => this.errorMessage = <any>error,
                    //() => (this.loading = this._orfileService.loading));
                    () => (this.onRequestComplete()));

this.currentWeek = this._homeService.getWeek();
  }
ngOnInit(): any{
    console.log('IN  OnInit for Entry Component.  currentWeek: ' + this.currentWeek);
   this.setDefaultWeek();

    }

  ngOnDestroy() {
    console.log('IN  OnDestroy');
  }

/*  Removing to use local DB
 addEntry(squad:ISquad): void{
        //console.log('IN addEntry  SQUAD: '+ JSON.stringify(squad));
        this.addedSquad = squad;
        this.QB = this.addedSquad.QB;

 }*/


 onRequestComplete(){
    this.loading = this._homeService.loading;
    // add up points
    if(this.entry != null){
    this.totalPoints = +(this.entry.QB.weekPts + this.entry.RB1.weekPts + this.entry.RB2.weekPts + this.entry.WR1.weekPts + this.entry.WR2.weekPts + this.entry.WR3.weekPts + this.entry.FLX.weekPts + this.entry.TE.weekPts + this.entry.DEF.weekPts).toFixed(2);
    }
    else{this.totalPoints = 0;}
  }

   onSelectWeek(selectedId:any): void{
        console.log('IN onSelectWeek  Week: ' + selectedId);
        this.loading = true;
          this._homeService.getPreviousSquad(this.auth.userProfile['username'],selectedId)
                .subscribe(
                    response => this.entry = response,
                    error => this.errorMessage = <any>error,
                    //() => (this.loading = this._orfileService.loading));
                    () => (this.onRequestComplete()));
   
  }

  setDefaultWeek(){
                var selection = (this.currentWeek);
                setTimeout(() => 
                            {
                            console.log("SLEEP for a tenth of a second");
                       console.log('IN setDefaultWeek  selectedIndex:' + selection);
   
                        (<HTMLSelectElement>document.getElementById('selectWeek')).selectedIndex = selection;
                             },
                            100);
     
    

    }



}