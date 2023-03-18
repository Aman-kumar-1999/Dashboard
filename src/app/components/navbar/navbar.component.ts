import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isloggined = false;
  public user = null;


  constructor(public login: LoginService, public router: Router, private snack: MatSnackBar,) { }

  ngOnInit(): void {
    this.isloggined = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data) => {
      this.isloggined = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });

  }

  public logout() {
    this.snack.open('Thanks ' + this.login.getUser().userName, 'You are Successrully Logout', {
      duration: 3000,
    });
    this.login.logout();
    // this.router.navigate(['login'])
    //   .then(() => {
        // window.location.reload();
    //   });
    // window.location.reload();
    // this.snack.open('Thanks', 'You are Successrully Logout' );  
    this.user = null;     
    this.isloggined = false;
    this.router.navigate(['']);
    // window.location.reload();

  }

}
