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

  constructor() {  
 setTimeout(() => { 
  this.allowNewServer = true
 },2000); 
  }

  ngOnInit() {
  }
onServerCreated(){
  this.serverCreationStatus = 'Server was created';
}
onUpdateServerName(event: any){

  this.ServerName = event.target.value;
}
}
