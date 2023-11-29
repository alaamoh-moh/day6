import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user={
    color:'red'
  }
  username='';
blue: true;
  usernamecall(username:any){
console.log(username);
  }

  change(){
    this.username="welcome";
  }
}
