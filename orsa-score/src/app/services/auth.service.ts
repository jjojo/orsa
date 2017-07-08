import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  db: AngularFireDatabase;
  isLoggedIn: Boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  login(input: string): Observable<boolean> {
    return this.db.object('/password').map( password => {
      if ( password.$value === input ) {
        this.isLoggedIn = true;
        return true;
      } else {
        this.isLoggedIn = false;
        return false;
      }
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
