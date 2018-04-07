import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @Input()
  set show(v: boolean) {
    this._show = v;
  }
  get show() {
    return this._show;
  }
  private _show: boolean;

  constructor() { }

  ngOnInit() {
  }

}
