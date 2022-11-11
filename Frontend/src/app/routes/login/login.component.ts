import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login/login.service';
import { AuthLoginResponse } from '../../models/authLoginResponse.model';
import {Store} from "@ngrx/store"
import * as AuthActions from '../../state/auth/auth.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginUserForm : FormGroup;

  constructor(public router : Router, private loginService : LoginService, private store : Store) {
    this.loginUserForm = new FormGroup({
      username : new FormControl('' , [Validators.required]),
      password : new FormControl('' , [Validators.required])
    })
  }

  authLoginResponse!: AuthLoginResponse;

  ngOnInit(): void {
  }

  async OnSubmit(): Promise<any>{
    const credential = {
      username: this.loginUserForm.value.username,
      password: this.loginUserForm.value.password
    }
    this.store.dispatch(AuthActions.loginRequest({credential}))
    // if(this.loginUserForm.valid){
    //   this.loginService.login(this.loginUserForm.value).subscribe((res : any) => {
    //     if(res && res.status === 'ok') {
    //       console.log(res)
    //       localStorage.setItem('username', res.data.user.username)
    //       localStorage.setItem('name', res.data.user.name)
    //       localStorage.setItem('surname', res.data.user.surname)
    //       localStorage.setItem('email', res.data.user.email)
    //       localStorage.setItem('dob', res.data.user.dob)
    //       localStorage.setItem('token', res.data.token)
    //       this.authLoginResponse = res
    //       console.log("authLoginResponse", this.authLoginResponse)
    //       this.router.navigate(['/dashboard'])
    //     }else {
    //       if (res.data === 'password errata') {
    //         console.log('password errata')
    //         window.alert("password errata")
    //         //window.location.reload()
    //       }
    //       if(res.data === 'utente non trovato'){
    //         console.log('utente non trovato ')
    //         window.alert("utente non trovato")
    //         //window.location.reload()
    //       }
    //     }
    //   })
    // }
  }


}
