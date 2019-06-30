import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Project} from "../entities/Project";
import projects from '../../assets/projects.json';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  title:String;
  projects:Project[];
  displayedColumns: String[] = ['name','description','version'];
  projectsDataSource: MatTableDataSource<Project>;
  selectedProject: Project;

  ngOnInit() {
    this.title = "Projects";
    this.projects = projects;
    this.projectsDataSource = new MatTableDataSource<Project>(this.projects);
    this.projectsDataSource.paginator = this.paginator;
    this.projectsDataSource.sort = this.sort;
    this.selectedProject = new Project();
  }

  /**
   * Filter projects in table
   * @param filterValue
   */
  applyFilter(filterValue: string) {
    this.projectsDataSource.filter = filterValue.trim().toLowerCase();
    if (this.projectsDataSource.paginator) {
      this.projectsDataSource.paginator.firstPage();
    }
  }

  /**
   * Show information of selected project
   * @param event
   * @param project
   */
  showProjectInfo(event, project){
    this.selectedProject = project;
  }

}
