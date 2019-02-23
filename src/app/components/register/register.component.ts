import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user: any;
  constructor(
    private auth: AngularFireAuth,
    private authService: AuthenticationService,
    private firestore: AngularFirestore
    ) { }

  ngOnInit() {
  }

  Authenticate(data: any) {
    console.log('Authenticate data', data);
    // return this.authService.handleRegistration(data).subscribe( (response) => this.user = response);
    this.user = this.authService.handleRegistration(data);
    this.firestore.doc(`/users/${this.user.user.uid}`).set(data);
    // this.auth.auth.app.database('/users');
  }
}
