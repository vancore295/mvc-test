import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'MVC Test' } },

    { path: '**', component: PagenotfoundComponent }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { enableTracing: false }) ],
    exports: [ RouterModule ]
  })

  export class RoutingModule {}
