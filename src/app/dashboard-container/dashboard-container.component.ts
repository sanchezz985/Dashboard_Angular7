import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Project} from "../entities/Project";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})

export class DashboardContainerComponent implements OnInit {

  @Input() projects;
  @Input() headers;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: String[] = ['name','description','version'];
  projectsDataSource: MatTableDataSource<Project>;
  selectedProject: Project;

  /**
   * Init components
   */
  ngOnInit() {
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
    console.log(this.selectedProject);
  }

}
