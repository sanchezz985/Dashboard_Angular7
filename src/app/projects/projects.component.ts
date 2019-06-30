import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../entities/Project";
import projects from '../../assets/projects.json';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  title:String;
  headers:Array<String>;
  projects:Project;

  ngOnInit() {
    this.title = "Projects";
    this.headers = ["#","Name","Description"];
    this.projects = projects;
  }

}
