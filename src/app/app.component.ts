import { Component } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  lat: number = 51.678418;
  lng: number = 7.809007;

    constructor(private router: Router){
      firebase.auth().onAuthStateChanged((user) => {
            if (user) {

              this.router.navigate(['/dashboard/home']);
         /*     let ref = firebase.database().ref('webUser');
              ref.once('value',(snapshot:any)=> {
                  if(snapshot.val()){
                      if(snapshot.val().admin == user.email){
                        this.router.navigate(['/currentbooking']);
                      }else{
                        alert("You are not Admin");
                        firebase.auth().signOut();
                        console.log("code works");
                        // this.router.navigate(['']);
                      }
                  }
              })*/
               // this.router.navigate(['/dashboard']);
            } else {
                this.router.navigate(['']);               
            }
        });
    }



}
 