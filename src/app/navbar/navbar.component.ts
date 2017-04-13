import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ps-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  scrollBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }

  constructor() { }

  ngOnInit() {
  }

}
