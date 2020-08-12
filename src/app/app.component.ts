import { Component, OnInit } from '@angular/core';
import {UsersService} from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'photo-gallery-web-app';
  showSpinner: boolean;
  messages = ['sdsds', 'sdsds']
  data: Array<any>
  constructor(private user:UsersService) {
    this.data = new Array<any>()
  }
ngOnInit() {
    this.user.getData().subscribe((data) => {
    console.log(data);
    this.data = data
});
}

}
