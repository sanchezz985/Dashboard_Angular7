import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { VersionsComponent } from './versions/versions.component';
import { RelationshipsComponent } from './relationships/relationships.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes : Routes = [
  {path: '', redirectTo:"home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'versions', component: VersionsComponent},
  {path: 'relationships', component: RelationshipsComponent}
  //{path: '**', component: HomeComponent} // Crear NotFoundComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    VersionsComponent,
    RelationshipsComponent,
    DashboardContainerComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
