import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public card = [
    {
      title: 'myWeb',
      desc: 'Portfolio',
      url: 'https://www.kurtmillercreate.com'
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
