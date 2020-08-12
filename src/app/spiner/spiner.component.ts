import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spiner.service';

@Component({
  selector: 'app-spiner',
  templateUrl: './spiner.component.html',
  styleUrls: ['./spiner.component.scss']
})
export class SpinerComponent implements OnInit {

  constructor(public spinnerService: SpinnerService,) { }

  ngOnInit(): void {
  }

}
