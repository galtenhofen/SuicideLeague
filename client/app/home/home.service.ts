import {Component,Injectable,Input,Output,EventEmitter } from '@angular/core';
import {IPlayer} from '../players/player';
import {ISquad} from '../squad/squad';
import {IResponse} from '../players/response';
import {ILoadInfo} from '../players/loadInfo';
import {Http, Request, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';



@Injectable()
export class HomeService {
  private _playerUrl = 'http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2016&week=5&format=json';
  private _localUrl = 'http://localhost:3000/api';
  private _savedEntry= 'app/saved/squad.json'
  private _newSavedEntry= 'app/saved/entry.json'

  loading:boolean; 

  constructor(private _http: Http){ 
          this.loading=false;
          }

  // Observable string sources
  public addedPlayer = new Subject<IPlayer>();
  public currentWeek = new Subject<number>();

  currentWeak: number;

//Removing to use local DB
  currentEntry:ISquad;
  week:number;
  //currentEntryJSON:JSON;

  // Observable string streams
  addPlayer$ = this.addedPlayer.asObservable();
  currentWeek$ = this.currentWeek.asObservable();
  
  
  // Service message commands
  addPlayer(player: IPlayer) {
            console.log('Adding Player: '+ JSON.stringify(player));
          this.addedPlayer.next(player);

          console.log('addedPlayer: '+ this.addedPlayer);
        }


 updateWeek(week: number) {
        console.log('Updating Week: '+ JSON.stringify(week));
        this.currentWeek.next(week);
        
        //using this until it can be replaced with database calls
        this.week = week;

        console.log('Updating Week FOR REAL: '+ this.week);
 
      }


/*  Taking this out to use local DB
  addSquad(squad: ISquad) {
        // console.log('Adding Player: '+ JSON.stringify(player));
        this.addedSquad.next(squad);
        
        //using this until it can be replaced with database calls
        this.currentEntry = squad;
 
      }

  getEntryDB(): Observable<ISquad>{
    console.log('IN getEntry ');
    return this._http.get(this._newSavedEntry) 
    .finally( () => this.loading = false)
                    .map((response: Response) => <ISquad>response.json())
                    //.do(data => console.log("IN getResponse:  " + JSON.stringify(data)))
                    .catch(this.throwStatus)
} 
*/

/*
getEntryDB(): Observable<ISquad>{
      console.log('IN getEntryDB');
      console.log('IN getEntryDB  this is the URL: ' + this._localUrl + '/squads');
      return this._http.get(this._localUrl + '/squads/5807fcf23971d82adca4ef0e') 
      .finally( () => this.loading = false)
                      .map((response: Response) => <ISquad>response.json())
                      .do(data => console.log("IN getEntryDB Response:  " + JSON.stringify(data)))
                      .catch(this.throwStatus)
        }*/

 setSquad(user: string, squad:ISquad){
   console.log('IN setSquad  user: ' + user);
                //let postUrl = this._localUrl+'/'+user+'/squads';
                let postUrl = this._localUrl+'/'+user+'/squads/'+ this.week;
                let body = JSON.stringify(squad);
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });

                return this._http.post(postUrl , body, options)
                    .do(data => console.log("POST Response: " + JSON.stringify(data)))
                    .map(this.checkResponseStatus)
                    .catch(this.throwStatus);
 }

 updateSquad(user:string, squad:ISquad){
   console.log('IN setSquad    user: ' + user);
                let postUrl = this._localUrl+'/'+user+'/squads/'+ this.week;
                let body = JSON.stringify(squad);
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });

                return this._http.put(postUrl , body, options)
                    .do(data => console.log("POST Response: " + JSON.stringify(data)))
                    .map(this.checkResponseStatus)
                    .catch(this.throwStatus);
 }

  setUsed(squad:ISquad){
   console.log('IN setSquad');
                let postUrl = this._localUrl + '/used';
                let body = JSON.stringify(squad);
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });

                return this._http.post(postUrl , body, options)
                    .do(data => console.log("POST Response: " + JSON.stringify(data)))
                    .map(this.checkResponseStatus)
                    .catch(this.throwStatus);
 }

 updateUsed(squad:ISquad){
   console.log('IN setSquad');
                let postUrl = this._localUrl + '/used/' + this.week;
                let body = JSON.stringify(squad);
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });

                return this._http.put(postUrl , body, options)
                    .do(data => console.log("POST Response: " + JSON.stringify(data)))
                    .map(this.checkResponseStatus)
                    .catch(this.throwStatus);
 }

  getEntry():ISquad{
          return this.currentEntry
        } 

 getPreviousSquad(user:string, week:string): Observable<ISquad>{
     console.log("IN getPreviousSquad user: " + user);
   console.log("IN getPreviousSquad - Week parameter passed from somewhere else: " + week);
          console.log("IN getSquad -   URL: " + this._localUrl+'/'+user+'/squads/'+week);
                     return this._http.get(this._localUrl+'/'+user+'/squads/'+week) 
                    .finally( () => this.loading = false)
                    .map((response: Response) => <ISquad>response.json())
                    //.do(data => console.log("IN getSquad:  " + JSON.stringify(data)))
                    .catch(this.throwStatus)
          
        } 

 getSquad(user:string): Observable<ISquad>{
     //USER WEEK TEST BALLS to add previous squads
     //this.week = 7;
     console.log("IN getPreviousSquad user: " + user);
   console.log("IN getSquad - Home Service Week Parameter: " + this.week);
          console.log("IN getSquad -   URL: " + this._localUrl+'/'+user+'/squads/'+ this.week);
                     return this._http.get(this._localUrl+'/'+user+'/squads/'+ this.week) 
                    .finally( () => this.loading = false)
                    .map((response: Response) => <ISquad>response.json())
                    //.do(data => console.log("IN getSquad:  " + JSON.stringify(data)))
                    .catch(this.throwStatus)
          
        } 

  getAllPlayers(): Observable<IResponse>{ 
                     console.log("IN getAllPlayers -   URL: " +this._playerUrl);
                     return this._http.get(this._playerUrl) 
                    .finally( () => this.loading = false)
                    .map((response: Response) => <IResponse>response.json())
                    //.do(data => console.log("IN getResponse:  " + JSON.stringify(data)))
                    .catch(this.throwStatus)
                    

                   }

  getPlayers(): Observable<IPlayer[]>{ 
                     console.log("IN getPlayers -   URL: " +this._localUrl+'/players');
                     return this._http.get(this._localUrl+'/players') 
                    .finally( () => this.loading = false)
                    .map((response: Response) => <IPlayer[]>response.json())
                    //.do(data => console.log("IN getPlayers:  " + JSON.stringify(data)))
                    .catch(this.throwStatus)
                    

                   }

loadPlayers(players:IPlayer[]){
   console.log('IN loadPlayers');
                let postUrl = this._localUrl + '/players';
                let body = JSON.stringify(players);
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });

                return this._http.post(postUrl , body, options)
                    .do(data => console.log("POST Response: " + JSON.stringify(data)))
                    .map(this.checkResponseStatus)
                    .catch(this.throwStatus);
 }

  private throwStatus(error: Response){
            console.log('IN throwStatus  error.status = ' + error.status);
            console.error(error.status);
            return Observable.throw(error.status || 'Server error');

        }

  private checkResponseStatus(res: Response) {
            console.log('IN  checkResponseStatus');
            let status:any;

            // check if empty, before call json
             if (res.status) {
                status = res.status;
                }
            console.log('IN  checkResponseStatus STATUS:' + status);
            return status || {};
        }


getWeek(){
var todayDate = new Date();
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
    this.currentWeak = 1;
}
else if (todayDate < week2){
    this.currentWeak = 2;
}
else if (todayDate < week3){
    this.currentWeak = 3;
}
else if (todayDate < week4){
    this.currentWeak = 4;
}
else if (todayDate < week5){
    this.currentWeak = 5;
}
else if (todayDate < week6){
    this.currentWeak = 6;
}
else if (todayDate < week7){
    this.currentWeak = 7;
}
else if (todayDate < week8){
    this.currentWeak = 8;
}
else if (todayDate < week9){
    this.currentWeak = 9;
}
else if (todayDate < week10){
    this.currentWeak = 10;
}
else if (todayDate < week11){
    this.currentWeak = 11;
}
else if (todayDate < week12){
    this.currentWeak = 12;
}
else if (todayDate < week13){
    this.currentWeak = 13;
}
else if (todayDate < week14){
    this.currentWeak = 14;
}
else if (todayDate < week15){
    this.currentWeak = 15;
}
else if (todayDate < week16){
    this.currentWeak = 16;
}
else if (todayDate < week17){
    this.currentWeak = 17;
}
else{
    this.currentWeak = 1;
}

console.log('IN calculateWeek Home Service.  Welcome to week ' + this.currentWeak);
return this.currentWeak;

}
}