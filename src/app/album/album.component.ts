import { Component, OnInit } from '@angular/core';
import {AlbumService} from '../services/album.service'
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  data: Array<any>
  constructor(private album: AlbumService ) {
    this.data = new Array<any>()
   }

  ngOnInit() {
    this.album.getData().subscribe((data) => {
      console.log(data);
      this.data = data
});
}
}
