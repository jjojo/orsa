﻿import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AdminComponent } from './admin/admin.component'
const routes: Routes = [
   {
       path: '',
       component: HomeComponent
   },
   {
       path: 'dashboard',
       component: DashboardComponent
   },
   {
       path: 'admin',
       component: AdminComponent
   }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, DashboardComponent];