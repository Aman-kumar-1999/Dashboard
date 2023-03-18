import { Component, OnInit, NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
// import swal from 'sweetalert';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  public user = {
    username: '',
    firstName: '',
    password: '',
    lastName: '',
    email: '',
    phone: '',
  }


  constructor(private userService: UserService, private _snac: MatSnackBar) { }


  ngOnInit(): void {
  }

  formSubmit() {

    if (this.user.email == '' || this.user.email == null) {
      // alert("Email Id need be field");
      this._snac.open("Email Id need be field", "OK");
      return;
    }
    if (this.user.username == '' || this.user.username == null) {
      // alert("User name need be field");
      this._snac.open("User name need be field", '', { duration: 3000, verticalPosition: 'top' });
      return;
    }
    if (this.user.password == '' || this.user.password == null) {
      alert("Password need be field");
      return;
    }
    console.log(this.user);


    this.userService.createUser(this.user).subscribe(
      (data: any) => {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully Sing up your accoun", '', { duration: 3000 });
        // swal("Conguration !"+data.firstName+" "+ data.lastName+ "You are Successfully Sing up your account", "success");
        // alert("Success");

      },
      (error) => {
        // error
        console.log(error);
        alert("Something went wrong !!!");
      }
    )

    // alert("Form Submit");
  }
  cleardata() {

    {
      // code for accessing each element goes here
    }
    // return(this.user);
  }

}
