import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { ProductAndServicesComponent } from './pages/product-and-services/product-and-services.component';
import { ResponsibilityComponent } from './responsibility-components/responsibility/responsibility.component';
import { SectorsComponent } from './sectors-components/sectors/sectors.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CareersComponent } from './pages/careers/careers.component';
import { NewsComponent } from './pages/news/news.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'news/:id',
    component: NewsDetailsComponent,
  },
  {
    path: 'product-and-services',
    component: ProductAndServicesComponent,
  },
  {
    path: 'sectors',
    component: SectorsComponent,
  },
  {
    path: 'responsibility',
    component: ResponsibilityComponent,
  },
  {
    path: 'downloads',
    component: DownloadsComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'careers',
    component: CareersComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
