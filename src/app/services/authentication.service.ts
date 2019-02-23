import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
authUser: any;
registerdUser: any;
  constructor(
    private fireauth: AngularFireAuth,
    private firestore: AngularFirestore
    ) { }

  async handleRegistration(data: any) {
    try {
      console.log('handleRegistration data', data);
      this.authUser = await this.fireauth.auth.createUserWithEmailAndPassword(data.email, data.password);
      console.log('Email & Password Registration Success', this.authUser);
      console.log('Auth User UID', this.authUser.user.uid);
      this.registerdUser = this.firestore.doc(`/users/${this.authUser.user.uid}`).set(data);
      console.log('User Doc Updated with ID');
      // success code here
      return this.registerdUser;
    } catch (error) {
      console.log('Email & Password Registration Error', error);
      return error.json();
    }
  }

  async handleLogin(data: any) {
    //
    try {
      const auth = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    } catch (error) {

    }
  }

  async changePassword(data: any) {
    try {
      const currentUser = this.fireauth.auth.currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, data.oldPassword);
      const authenticated = await currentUser.reauthenticateWithCredential(credential);
      // https://stackoverflow.com/questions/52075138/updating-a-password-in-firebase-angular-5
      // currentUser.reauthenticateWithCredential(credentials).
    } catch (error) {
      return error;
    }
  }

  async signOut() {
    try {
      return await this.fireauth.auth.signOut();
    } catch (error) {
      return error;
    }
  }

}
