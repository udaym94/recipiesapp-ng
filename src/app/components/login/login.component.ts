import { Component, OnInit } from '@angular/core';
import { FormsModule, Form, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
// import { subscribe, map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// const userData: <Observable>
  constructor(
    private authService: AuthenticationService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() { }

  async Authenticate(data: any) {
    try {
      console.log('Authenticate ', data);
      const auth = await this.authService.handleLogin(data);
      const userData = this.afs.collection('users').doc(auth.user.uid).get();
      console.log('userData', userData);
      console.log('auth', auth);
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }

}
