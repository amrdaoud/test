import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterModel } from 'src/app/app-models/User';
import { UserService } from 'src/app/app-services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    FirstName: new FormControl(),
    LastName: new FormControl(),
    Username: new FormControl(),
    Email: new FormControl(),
    Password: new FormControl()
  });
  constructor(private user:UserService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  }
  register() {
    this.user.register(this.registerForm.value as RegisterModel).subscribe(x => {
      if(x){
        this.snak.open(x,'dismiss',{duration:3000})
      }
    });
  }

}
