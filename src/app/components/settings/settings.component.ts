import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public card = [
    {
      title: 'Youtube',
      desc: 'My Channel',
      url: 'https://www.youtube.com/channel/UCFMNKxcPyg5odR1BB820ptw?view_as=subscriber'
    },
    {
      title: 'Git',
      desc: 'My Repo',
      url: 'https://github.com/kurtmilla1994'
    },
    {
      title: 'linkedIn',
      desc: 'My LinkedIn',
      url: 'https://www.linkedin.com/in/kurt-miller-63186051/'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
