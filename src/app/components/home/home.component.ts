import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface User { id: String; name: String; email: String; username: String; password: String; }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // private userCollection: AngularFirestoreCollection<User>;
  users: Observable<any[]>;
  constructor(private afs: AngularFirestore) {
    // this.userCollection = this.afs.collection('users');
    // this.users = this.afs.collection('users').valueChanges();
    this.users = this.afs.collection('/users').valueChanges();
    // this.users = this.afs.collection('/users').valueChanges();
    console.log('this.users', this.users);
  }

  ngOnInit() { }

}
