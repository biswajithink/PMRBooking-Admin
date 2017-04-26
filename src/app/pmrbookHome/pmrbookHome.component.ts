import { Component, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
declare var google:any;

/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'pmrbooking-home',
	templateUrl: 'pmrbookHome.component.html',
	styleUrls: ['./pmrbookHome.css']
})

export class pmrBookingHomeComponent { 

pickup : {lat: number, lng: number, add: string };
drop : {lat: number, lng: number, add: string };

distance:any;

constructor(private router: Router) {
	this.pickup={
		lat:null,
		lng: null,
		add: null
	}; 


	this.drop={
		lat: null,
		lng: null,
		add: null
	};
}
//pickup address
 showpickup(){
	         var autocomplete = new google.maps.places.Autocomplete( document.getElementById('pac-input'), {});
        google.maps.event.addListener(autocomplete, 'place_changed', () =>   {
            let address = autocomplete.getPlace();
            let data = {add:null,lat:null,lng:null};
			console.log(address);
			let lat = address.geometry.location.lat();
			let lng = address.geometry.location.lng();
			let add = address.formatted_address;

			this.pickup.lat = lat;
            this.pickup.lng = lng;
            this.pickup.add = add;
			this.setDistance();

        }); 
 }
//drop address
  showdrop(){
	         var autocomplete = new google.maps.places.Autocomplete( document.getElementById('pac-drop'), {});
        google.maps.event.addListener(autocomplete, 'place_changed', () =>   {
            let address = autocomplete.getPlace();
            let data = {add:null,lat:null,lng:null};
			console.log(address);
			let lat = address.geometry.location.lat();
			let lng = address.geometry.location.lng();
			let add = address.formatted_address;

            this.drop.lat = lat;
            this.drop.lng = lng;
            this.drop.add = add;
			this.setDistance();

        }); 
 }


/* setDistance(pick,drop){
	var directionsService = new google.maps.DirectionsService();
	var haight = new google.maps.LatLng(pick.lat, pick.lng);
	var oceanBeach = new google.maps.LatLng(drop.lat,drop.lng);
	var request = {
      origin: haight,
      destination: oceanBeach,
	  travelMode: 'DRIVING'}
	  directionsService.route(request, function(response, status) {
		if (status == 'OK') {
			console.log(response);
		}
	});
	    
}*/
//show distance and others
 setDistance(){
	 if(this.pickup != null && this.drop != null){
		var directionsService = new google.maps.DirectionsService();
		var haight = new google.maps.LatLng(this.pickup.lat, this.pickup.lng);
		var oceanBeach = new google.maps.LatLng(this.drop.lat,this.drop.lng);
		var request = {
			origin: haight,
			destination: oceanBeach,
			travelMode: 'DRIVING'}
			directionsService.route(request, function(response, status) {
				if (status == 'OK') {
					console.log(response);
				}
			});
	 }

	    
}






  leftImage:boolean=false;
  rightImage:boolean=false;

	 toggleImg(index){
		if(index==1){
			this.leftImage=true;
			this.rightImage=false;
			console.log(this.rightImage);
		}
		else {
			this.leftImage=false;
			this.rightImage=true;
			console.log(this.rightImage);       
		}
	}

	goLogin(){
		this.router.navigate(['./login']);
	}

	 goDashboard(){
		this.router.navigate(['./dashboard/home']);
	}

	
}

