import { Component } from '@angular/core';
import { UserProviderService } from "./user-provider.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private users;
  private userDetail;

  constructor(private userProvider: UserProviderService,){
    this.userProvider.getAllUsers().subscribe( users => {
      this.users = users;
    })
  }

  showDetail(user){
    
    this.userDetail = user;
  }
}
