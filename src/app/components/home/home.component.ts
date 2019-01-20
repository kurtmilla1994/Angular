import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public settings = true;
  constructor() { }

  ngOnInit() {
  }

  toggleSettings() {
    if (this.settings === true) {
      this.settings = false;
  } else {
    this.settings = true;
  }
}

}
