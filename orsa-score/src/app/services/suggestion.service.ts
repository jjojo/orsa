import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';



@Injectable()
export class SuggestionService {
  suggestions: FirebaseListObservable<any[]>;
  highscore: FirebaseListObservable<any[]>;
  db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;

    // suggestions list firebase
    this.suggestions = db.list('/suggestions');

    // highscore list firebase
    this.highscore = db.list('/highscore');
  }


  getSuggestions() {
    return this.db.list('/suggestions', {query: {limitToLast: 1000}}).map( list => {
       return list;
     })
  }

  addSuggestion(object: JSON) {
     this.suggestions.push(object).then(_ => {
       return "Success, data added to firebase"
     }).catch( error => {
       return error
     })
   }

   updateSuggestion(key: string, suggestion: JSON) {
    this.suggestions.update(key, suggestion);
  }

  deleteSuggestion(key: string) {
    this.suggestions.remove(key);
  }

  getHighscore() {
    return this.db.list('/highscore', {query: {orderByChild:'points', limitToLast: 1000}}).map( list => {
      return list;
    })
  }

  // Updates the individual score-suggestions sent from admin.component.ts
  updateHighscore(user: string, points: number, suggestionKey: string) {
    this.db.object('/highscore/' + user)
    .take(1)
    .subscribe( data => {
      let p: number = parseInt(data.points) + points
      this.highscore.update(user,{points:p}).then( success => {
        console.log("Highscore updated")
        this.deleteSuggestion(suggestionKey)
      })
    })
  }
    
    
    // })
    //let points = 60
    //const highs = {name:key, points:points}
    //this.highscore.update(key, highs)
    //this.highscore[key] = suggestion['points']
    //this.highscore.update(key, highscore);
  



  // createTeam(name: string): Observable<boolean> {
  //   return this.db.list('/teams', { query: { orderByChild: 'name', equalTo: name}}).map( response => {
  //     if ( response.length === 0 ) {
  //       // Team does not exist, create it
  //       this.db.list('teams').push({name: name, points: 0});
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });

  // }
  // getTeam(teamName: string): Observable<any> {
  //   return this.db.list('/teams', { query: { orderByChild: 'name', equalTo: teamName}} ).map( team => {
  //     return team[0];
  //   })
  // }
  // getTeams(): Observable<any[]> {
  //   return this.teams;
  // }
  // markActivityForTeam(activity: any, team: any): void {
  //   console.log('Shall mark activity');
  //   this.getTeam(team.name).subscribe(t => {
  //     console.log('Fetched team: ');
  //     console.log(t);
  //     if (t.activities) {
  //       for (let a of t.activities) {
  //         if ( a ) {
  //           if (a.id === activity.id) {
  //             console.log('Activity found');
  //             return false;
  //           }
  //         }

  //       }
  //     }
  //     if ( activity) {
  //       console.log('Adding points');
  //       this.db.object('/teams/' + team.$key + '/points').$ref.transaction(points => {
  //         return team.points ? points + activity.points : activity.points;
  //       });
  //       let activities = t.activities;
  //       delete activity.$ref;
  //       delete activity.$key;
  //       if (activities) {
  //         activities.push(activity);
  //       } else {
  //         activities = [activity];
  //       }
  //       console.log(activities);
  //       this.db.object('/teams/' + team.$key).update({activities: activities});
  //     }


  //   });
  // }

}
