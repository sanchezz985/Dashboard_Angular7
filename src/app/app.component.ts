import {Component, OnInit} from '@angular/core';
import navigation from "../assets/navigation.json";
import {Navigation} from "./entities/Navigation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  navigation_sections:Navigation;

  ngOnInit(){
    this.navigation_sections = navigation;
  }

}
