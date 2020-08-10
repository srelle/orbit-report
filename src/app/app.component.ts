import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[]
  displayList: Satellite[];
   serverUrl: string = 'https://handlers.education.launchcode.org/static/satellites.json';
   

  constructor() {
    this.sourceList = [];
    this.displayList = [];
    window.fetch(this.serverUrl).then(function(response) {
       response.json().then(function(data) {
 
          let satellites = data.satellites;
          for (let i = 0; i < satellites.length; i++){
           let satellite = 
              new Satellite(satellites[i].name, 
              satellites[i].type, 
              satellites[i].launchDate, 
              satellites[i].orbitType, 
              satellites[i].operational);
          
            this.sourceList.push(satellite);

       
               
              }
         this.displayList = this.sourceList.slice(0);  
      }.bind(this));
    }.bind(this));


   }
       
search(searchTerm: string): void {
   let matchingSatellites: Satellite[] = [];
   searchTerm = searchTerm.toLowerCase();
   for(let i=0; i < this.sourceList.length; i++) {
      let name = this.sourceList[i].name.toLowerCase();
      if (name.indexOf(searchTerm) >= 0) {
         matchingSatellites.push(this.sourceList[i]);
      }
   }
             
               // assign this.displayList to be the array of matching satellites
               // this will cause Angular to re-make the table, but now only containing matches
this.displayList = matchingSatellites;


   // assign this.displayList to be the array of matching satellites
   // this will cause Angular to re-make the table, but now only containing matches
       
}
}