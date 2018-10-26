import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = true;;
serverCreationStatus= 'no server was created';
serverName = 'Test Server'
  constructor() {
    setTimeout(() => {
     this.allowNewServer= true
   },1000)

  }// end of constr

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "server was created " +  " name is" + this.serverName;
  }// end of create server
  onUpdateServerName(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value;
  }// end of function

}
