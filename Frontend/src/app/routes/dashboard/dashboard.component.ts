import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../state/auth/auth.reducer'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

  constructor(private store : Store<fromAuth.State>) { }

  token$ = this.store.select(fromAuth.selectToken)
  user$ = this.store.select(fromAuth.selectUser)
  state$ = this.store.select(fromAuth.selectAuthState)

  ngOnInit(): void {
    console.log('token ', this.token$)
    console.log('user ', this.user$)
    console.log('state ', this.state$)
  }

}
