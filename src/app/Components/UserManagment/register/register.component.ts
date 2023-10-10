import { Component } from '@angular/core';
import{FormControl,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private AuthService:AuthService, private router:Router){}
registerForm:FormGroup=new FormGroup({
 'email' :new FormControl(null,[Validators.required,Validators.email]),
 'DisplayName' :new FormControl(null,[Validators.required , Validators.minLength(4)]),
 'PhoneNumber' :new FormControl(null,[Validators.required]),
 'Password' :new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/)])
});

registerAccount(){
  this.AuthService.regestirNewUser(this.registerForm.value).subscribe((data)=>{
    console.log(data.message);
  })
}
}
