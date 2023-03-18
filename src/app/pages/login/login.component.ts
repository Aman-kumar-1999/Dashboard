import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/user';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // public loginStatusSubject!:boolean;

  user: User = new User();
  // roletype = { "roleid": { "roleName": "USER" } }
  rolename = {
    "roleid": { "roleId": "", "roleName": "" }
  }


  constructor(
    private snack: MatSnackBar,
    private login: LoginService,
    private router: Router,
    
  ) { }

  ngOnInit(): void { }

  // public findrole() {
  //   this.login.loginDetails(this.user).subscribe((role: any) => {
  //     this.rolename = role;
  //     console.log(this.rolename.roleid.roleName);
      
  //   })
  //   return this.rolename.roleid.roleName;
  // }

  formSubmit() {
    console.log('login btn clicked' + this.user);

    if (
      this.user.username.trim() == '' ||
      this.user.username == null
    ) {
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.user.password.trim() == '' ||
      this.user.password == null
    ) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }


    // console.log("This is User Details" + this.login.loginDetails(this.user));
    // this.login.loginDetails(this.user).subscribe(data => {

    //   this.login.getCurrentUserRole(this.user).subscribe((role:any)=> {
    //      this.rolename= role;
    //     console.log(this.rolename.roleid.roleName);
    //   })

    //   alert("Login Successrully")
    //   this.router.navigate(['user']);
    //   console.log(data);
    //   if (this.rolename.roleid.roleName == "ADMIN") {
    //     //admin dashboard
    //     // window.location.href = '/admin';
    //     this.snack.open('You have an admin role', '', {
    //       duration: 3000,
    //     });
    //     this.router.navigate(['admin']);
    //     // this.login.loginStatusSubject.next(true);
    //   }
    //   else if (this.rolename.roleid.roleName == this.roletype.roleid.roleName) {
    //     //normal user dashbaord
    //     // window.location.href = '/user-dashboard';
    //     this.snack.open('You have a User role', '', {
    //       duration: 3000,
    //     });
    //     this.router.navigate(['user']);
    //     // this.login.loginStatusSubject.next(true);
    //   }



    // }, error => alert("Sorry Please enter correct UserId and Password")
    // )

    //request to server to generate token
    this.login.loginDetails(this.user).subscribe(
      (data: any) => {

        console.log('success');
        console.log(data);
        
        this.login.loginUser(data.USER.username)


        // this.login.getCurrentUserRole(this.user).subscribe((role:any)=> {
        //    this.rolename= role;
        //   console.log(this.rolename.roleid.roleName);
        // })

        // this.login.getCurrentUserRole(this.user).subscribe((user: any) => {
          this.login.loginDetails(this.user).subscribe((user: any) => {
          this.login.setUser(user);
          console.log("This is the value of User:"+user);

          // redirect ...ADMIN: admin-dashboard
          // redirect ...NORMAL:normal-dashboard
          // this.snack.open('Just Before Checking Cridential', '', {
          //   duration: 3000,
          // });
          // console.log("This the value of Role"+this.login.getUserRole())
          if (this.login.getUserRole()== 'Admin') {
            //admin dashboard
            // window.location.href = '/admin';
            this.snack.open('Welcome '+this.login.getUser().firstName, 'You have an Admin Role', {
              duration: 3000,
            });
            this.router.navigate(['admin']);
            this.login.loginStatusSubject.next(true);
          }
          else if (this.login.getUserRole() == 'User') {
            //normal user dashbaord
            // window.location.href = '/user-dashboard';
            this.snack.open('Welcome '+this.login.getUser().firstName, 'You have a User Role', {
              duration: 3000,
            });
            this.router.navigate(['user']);
            this.login.loginStatusSubject.next(true);
          }
          else if (this.login.getUserRole() == 'SuperAdmin') {
            //normal user dashbaord
            // window.location.href = '/user-dashboard';
            this.snack.open('Welcome '+this.login.getUser().firstName, 'You have a Super Admin Role', {
              duration: 3000,
            });
            
            this.router.navigate(['superadmin']);
            this.login.loginStatusSubject.next(true);
          }
          else {
            this.login.logout();
            this.snack.open('Warning', 'Invalid User Name and password Please try again', {
              duration: 3000,
            });
          }

        })
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open('Invalid Details !! Try again', '', {
          duration: 3000,
        });
      }
    );
  }
}
