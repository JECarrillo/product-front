import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthModule } from '../auth.module';
import { AuthService } from './login.services';
import { User } from '../interfaces/auth.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input() credentials: User ={
    name: '',
    username: '',
    password: ''
  }


  constructor ( private authService: AuthService, private router: Router ){}

  errorStatus:boolean = false;
  errorMsj  ="";

  onSubmit(){

    this.authService.login(this.credentials)
    .subscribe(
      (response) => {
        console.log(response)
        localStorage.setItem("token", response.token)
        this.router.navigate(['crud']);
      },
      (error) => {
        this.errorStatus = true;
        this.errorMsj = error.error_msg; 
      }
    );
    }

    }
