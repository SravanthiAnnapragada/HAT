import { FileUploadComponent } from './file-upload/file-upload.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyClassificationComponent } from './company-classification/company-classification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes : Routes =[ 
  { path: '', pathMatch: 'full', component:LoginComponent},
  { path: 'home', component: DashboardComponent },
  { path: 'classification', component: CompanyClassificationComponent },  
  { path: 'company-list', component: CompanyListComponent },
  { path: 'file_upload', component: FileUploadComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
  
})


export class AppRoutingModule {

 }
