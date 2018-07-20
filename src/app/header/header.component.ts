import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imagePath:string;
  constructor(private _location: Location){} // inject Location into class constructor
  cancel() {
    this._location.back();// <-- go back to previous location on cancel
  }

  ngOnInit() {
  }

}
