import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Dashboard';
  sections = [
    {
      "name": "Projects",
      "description": "Visualize the list of projects and make basic operations with them.",
      "url":"/projects"
    },{
      "name": "Version control",
      "description": "Visualize every project and its Git version.",
      "url":"/versions"
    },
    {
      "name": "Relationships",
      "description": "Visualize the relationships between projects and its dependencies.",
      "url":"/relationships"
    }
  ];

  ngOnInit() {
  }

}
