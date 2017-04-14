import { Component, NgModule } from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html',
	styleUrls: ['./login.css']
})

export class LoginComponent { 
	public email:string;
	public password:string;
	
constructor(private router: Router) { }

doLogin(){
	console.log(this.email , this.password);

 if(this.email==undefined || this.password == undefined || this.email == "" || this.password == ""){
        alert("email or password invalid");
    }else{
     firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((authenticatedUser) => {
         console.log("success");
		 alert("successfully login. Please wait .....")
     })
     .catch((error)=>{
         console.log(error);
     });

    }



    /*document.getElementById("bodyId").className =
    document.getElementById("bodyId").className.replace('bodyBack','homeBody');*/
    //this.router.navigate(['./booking-home']);
}

}

