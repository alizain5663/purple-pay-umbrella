import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { AboutUsComponent } from './MainComponents/about-us/about-us.component';
import { AgencyComponent } from './MainComponents/agency/agency.component';
import { ConstructionComponent } from './MainComponents/construction/construction.component';
import { ContactUsComponent } from './MainComponents/contact-us/contact-us.component';
import { FooterComponent } from './MainComponents/footer/footer.component';
import { HeaderComponent } from './MainComponents/header/header.component';
import { HomeComponent } from './MainComponents/home/home.component';
import { ModernSlaveryComponent } from './MainComponents/modern-slavery/modern-slavery.component';
import { PayeComponent } from './MainComponents/paye/paye.component';
import { PrivacyPolicyComponent } from './MainComponents/privacy-policy/privacy-policy.component';
import { ServicesComponent } from './MainComponents/services/services.component';
import { StartContractingComponent } from './MainComponents/start-contracting/start-contracting.component';
import { TermsComponent } from './MainComponents/terms/terms.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    AboutUsComponent,
    AgencyComponent,
    ConstructionComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ModernSlaveryComponent,
    PayeComponent,
    PrivacyPolicyComponent,
    ServicesComponent,
    StartContractingComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
