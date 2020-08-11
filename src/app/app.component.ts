import { Component } from '@angular/core';
import {UsersService} from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photo-gallery-web-app';
  data: Array<any>
  constructor(private user:UsersService) {
    this.data = new Array<any>()
   }


  getDataFromAPI() {
    this.user.getData().subscribe((data) => {
      console.log(data);
      this.data = data
    })
  }
}
