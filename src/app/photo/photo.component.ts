import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../services/photos.service';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  data: Array<any>
  constructor(private photo: PhotosService) {
    this.data = new Array<any>()
  }

  ngOnInit() {
    this.photo.getData().subscribe((data) => {
      console.log(data);
      this.data = data
  });
  }

}
