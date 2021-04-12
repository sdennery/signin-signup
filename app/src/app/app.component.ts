import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title : string = 'auth';
  isMobile : boolean = false;

  constructor() {
    if (window.screen.width <= 767){
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
  ngOnInit(): void {

  }

  onResize(data:any) {
    if (data.target.innerWidth <= 767){
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}

