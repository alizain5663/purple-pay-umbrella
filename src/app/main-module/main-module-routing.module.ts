import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { AboutUsComponent } from './MainComponents/about-us/about-us.component';
import { AgencyComponent } from './MainComponents/agency/agency.component';
import { ContactUsComponent } from './MainComponents/contact-us/contact-us.component';
import { HomeComponent } from './MainComponents/home/home.component';
import { ModernSlaveryComponent } from './MainComponents/modern-slavery/modern-slavery.component';
import { PayeComponent } from './MainComponents/paye/paye.component';
import { PrivacyPolicyComponent } from './MainComponents/privacy-policy/privacy-policy.component';
import { ServicesComponent } from './MainComponents/services/services.component';
import { StartContractingComponent } from './MainComponents/start-contracting/start-contracting.component';
import { TermsComponent } from './MainComponents/terms/terms.component';

const routes: Routes = [
  { path: '', component: MainModuleComponent,children:[
    {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'service',component:ServicesComponent},
      {path:'contact',component:ContactUsComponent},
      {path:'about',component:AboutUsComponent},
      {path:'agency',component:AgencyComponent},
      {path:'paye',component:PayeComponent},
      {path:'start',component:StartContractingComponent},
      {path:'terms',component:TermsComponent},
      {path:'slavery',component:ModernSlaveryComponent},
      {path:'privacy',component:PrivacyPolicyComponent}
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
