import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromAuth from '../../state/auth/auth.reducer'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token$ = this.store.select(fromAuth.selectToken)
  user$ = this.store.select(fromAuth.selectUser)
  state$ = this.store.select(fromAuth.selectAuthState)

  constructor(private store : Store<fromAuth.State>) { }

  ngOnInit(): void {
  }

}
