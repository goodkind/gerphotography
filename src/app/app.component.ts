import { Component, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  title = 'app';
  showLoader = true;

  ngAfterContentChecked() {
    this.showLoader = false;
  }
}
