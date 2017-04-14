import { Component , NgModule } from '@angular/core';


import * as firebase from 'firebase';

@Component({
	moduleId: module.id,
	selector: 'signup',
	templateUrl: 'signup.component.html',
	styleUrls: ['./signup.css']
})

export class SignUpComponent {

public firstname:string;
public email:any;
public password:string;
public confirmpassword:string;
public lastname:string;
public phone:number;
public companyname:string;
public check:boolean;
public type:string= "corporate";

public showCompany:boolean;

public ref:any;
	constructor() {
		this.ref = firebase.database().ref('webUser');
	}

	ngDoCheck(){
		if(this.type == "corporate") {this.showCompany= true; } else {this.showCompany= false; }
	}

	submit(){

		if(this.email == undefined || this.email=="" || this.password == undefined || this.password == "" || this.confirmpassword ==undefined ||
		 this.confirmpassword == "" || this.firstname == undefined || this.firstname == "" || this.lastname == undefined || this.lastname =="" ||
		   this.phone == undefined ){
			alert("Please Enter All Details Properly....");
		 }else{
			 if(this.password == this.confirmpassword){
					if(this.type == "corporate"){
						if(this.companyname == undefined || this.companyname == ""){
							alert("Please Enter Valid your Company Name...");
						}else{
							if(this.check){
								//alert("chacked" + this.check);
								firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then((newUser)=>{

									firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((authenticatedUser) => {
										authenticatedUser.sendEmailVerification().then(function() {
											alert("varification Email Sent to your email.. please varify your email...");
										}, function(error) {});

										this.ref.child(authenticatedUser.uid).update({
											firstname:this.firstname,
											lastname:this.lastname,
											email:this.email,
											mobile:this.phone,
											customer_type:this.type,
											company_name:this.companyname
										})
									});
								}).catch((error)=>{
									//console.log(error);
									if(error.message =="The email address is badly formatted."){alert("Email not valid... please Enter Valid email"); }
									else if ( error.message == "The email address is badly formatted."){alert("Email Already Exist. Please Enter another email.."); }
								})
							}else{ alert("please Accpet all Terms and Conditions.."); }					
						}
					}else{
						if(!this.check){
							alert("please Accpet all Terms and Conditions..");
						}else{
							//alert("chacked" + this.check);
							firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then((newUser)=>{

								firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((authenticatedUser) => {
									authenticatedUser.sendEmailVerification().then(function() {
										alert("varification Email Sent to your email.. please varify your email...");
									}, function(error) { });
								//insert data into firebase
									this.ref.child(authenticatedUser.uid).update({
										firstname:this.firstname,
										lastname:this.lastname,
										email:this.email,
										mobile:this.phone,
										customer_type:this.type
									})
								});
							}).catch((error)=>{
								//console.log(error);
								if(error.message =="The email address is badly formatted."){
									alert("Email not valid... please Enter Valid email");
								}else if ( error.message == "The email address is badly formatted."){
									alert("Email Already Exist. Please Enter another email..");
								}
							})
						}

					}
			 }else{
				alert("password dont match");
			 }




		 }




		console.log(this.firstname, this.lastname, this.email, this.password, this.confirmpassword, this.companyname, this.phone, this.check, this.type);
	}
 }

