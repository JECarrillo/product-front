import { Component, Input } from '@angular/core';
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

  @Input() credentials: User = {
    name: '',
    username: '',
    password: ''
  }


  constructor(private authService: AuthService, private router: Router) { }

  errorStatus: boolean = false;
  errorMsj = "";

  onSubmit() {

    this.authService.login(this.credentials)
      .subscribe(
        (response) => {

          localStorage.setItem("token", response.token)
          this.router.navigate(['crud']);
        },
        (error) => {
          console.log('Error Response:', error);
          this.errorStatus = true;
          this.errorMsj = error.error.error;
        }
      );
  }

}
