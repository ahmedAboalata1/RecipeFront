import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  islogedin:boolean=false;
  constructor(private router:Router){
    let token=localStorage.getItem('token')
    if(token)
    {this.islogedin=true
    }
    else
    {this.islogedin=false
    }
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login")
  }
}
