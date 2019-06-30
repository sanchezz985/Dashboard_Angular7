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

  projectName = "";
  projectDescription = "";
  projectCreationDate = "";
  displayedColumns: String[] = ['name','description','version'];
  projectsDataSource: MatTableDataSource<Project>;

  ngOnInit() {
    this.projectsDataSource = new MatTableDataSource<Project>(this.projects);
    this.projectsDataSource.paginator = this.paginator;
    this.projectsDataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.projectsDataSource.filter = filterValue.trim().toLowerCase();

    if (this.projectsDataSource.paginator) {
      this.projectsDataSource.paginator.firstPage();
    }
  }

}
