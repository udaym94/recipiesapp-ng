import { Component, OnInit } from '@angular/core';
import { FormsModule, Form, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  Authenticate(data: any) {
    console.log('Authenticate ', data);
  }

}
