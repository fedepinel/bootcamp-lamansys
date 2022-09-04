import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = 'Fede';

  docElement: HTMLElement;
  isFullScreen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.docElement = document.documentElement;
  }

  fullScreen(){
    if (!this.isFullScreen) {
      this.docElement.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
    this.isFullScreen = !this.isFullScreen;
  }

}
