import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  credentials = {
    name: '',
    email: '',
    password: '',
    index: '',
    regNo: '',
    course: 'bsc-cs'

  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() { }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      console.log('registered');

      this.router.navigateByUrl('/');
    }, (err) => {
      console.error(err);
    });
  }
}
