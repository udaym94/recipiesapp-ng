import { Component, OnInit } from '@angular/core';
import { FormsModule, Form, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userData: any;
  constructor(
    private authService: AuthenticationService,
    private afs: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() { }

  async Authenticate(data: any) {
    try {
      console.log('Authenticate ', data);
      const auth = await this.authService.handleLogin(data);
      const userData = this.afs.collection('users').doc(auth.user.uid).get().subscribe(res => {
        console.log('27', res.data());
        res.data();
        this.router.navigate(['user/dashboard']);
      });
      console.log('userData', userData);
      console.log('auth', auth);
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }

}
