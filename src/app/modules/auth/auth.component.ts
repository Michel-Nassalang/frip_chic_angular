import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent  implements OnInit{

  loginForm: FormGroup;
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
    this.signupForm = this.formBuilder.group({
      usersign: ['', Validators.required],
      passsign: ['', Validators.required],
      confirmpass: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }
  login(){
    const loginVal = this.loginForm.value;
    if(loginVal.user!=null && loginVal.pass!=null){
      this.authService.login(loginVal.user, loginVal.pass);
      this.router.navigateByUrl('/home');
    }
  }
  signup(){}
}
