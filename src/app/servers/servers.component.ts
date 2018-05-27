import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No sever created';
ServerName = 'Test server';
ServerCrested =  false;
  constructor() {  
 setTimeout(() => { 
  this.allowNewServer = true
 },2000); 
  }

  ngOnInit() {
  }
onServerCreated(){
  this.ServerCrested =  true;

  this.serverCreationStatus = 'Server was created serve neane' + this.ServerName;
}
onUpdateServerName(event: any){

  this.ServerName = event.target.value;
}
}
