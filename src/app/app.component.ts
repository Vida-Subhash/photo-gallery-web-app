import { Component, OnInit } from '@angular/core';
import {UsersService} from './services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  id: number;
  // userData: any;
  constructor(private user:UsersService, private router: Router, private _Activatedroute:ActivatedRoute) {
    this.data = new Array<any>()

  }
ngOnInit() {
    this.user.getData().subscribe((data) => {
    console.log(data);
    this.data = data
});
}


UserClicked(id: number){
  console.log(id);

  this.router.navigate[('/album/id')];
}

user_album() {
  this.user.getData
}
}
