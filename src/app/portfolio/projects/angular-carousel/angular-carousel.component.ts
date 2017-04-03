import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Image} from './image';

@Component({
  selector: 'ps-carousel',
  templateUrl: 'angular-carousel.component.html',
  styleUrls: ['angular-carousel.component.css']
})
export class AngularCarouselComponent implements OnInit, OnChanges {
  @Input() showProjectNumber: number;
  showProject;

  public images = IMAGES;

  constructor() {

  }

  ngOnInit() {
    setInterval(() => {
      IMAGES.push(IMAGES.shift());
    }, 5000);
  }

  ngOnChanges() {
    if(this.showProjectNumber == 1){
      this.showProject = true;
    }else {
      this.showProject = false;
    }
  }

}


var IMAGES: Image[] = [
  {"name": "First", "url": "https://placekitten.com/g/2000/1500"},
  {"name": "Second", "url": "https://placekitten.com/g/1400/1100"},
  {"name": "Third", "url": "https://placekitten.com/g/1000/1000"},
  {"name": "Fourth", "url": "https://placekitten.com/g/1200/1500"}
];
