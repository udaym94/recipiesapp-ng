import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 *
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
*/
export class AppComponent {
  title = 'Recipies App';
  constructor(afs: AngularFirestore) {
    //
  }
}
