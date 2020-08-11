import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from '../spiner.service';
@Component({
  selector: 'app-spinere',
  templateUrl: './spinere.component.html',
  styleUrls: ['./spinere.component.scss']
})
export class SpinereComponent implements OnInit {
  showSpinner = false;
  constructor(private spinnerService: SpinnerService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.init();
  }
  init() {

    this.spinnerService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = (status === 'start');
      this.cdRef.detectChanges();
    });
  }
}
