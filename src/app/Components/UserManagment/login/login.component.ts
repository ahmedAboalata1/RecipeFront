import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(private AuthService:AuthService, private router:Router){}
  loginForm:FormGroup=new FormGroup({
    'email' :new FormControl(null,[Validators.required,Validators.email]),
      'Password' :new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/)])
   });
  loginAccount()
  {
   this.AuthService.login(this.loginForm.value).subscribe((data)=>{
    console.log(data)
    localStorage.setItem("token",data.token)
     this.router.navigateByUrl('/home')
   })
  }
}
