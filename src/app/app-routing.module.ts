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

import { CareersComponent } from './pages/careers/careers.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { CareersFormComponent } from './careers-components/careers-form/careers-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { ReadNewsComponent } from './read-news/read-news.component';
import { LoginComponent } from './login/login.component';
import { FAQSectionComponent } from './faq-section/faq-section.component';

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
    path: 'careers',
    component: CareersComponent,
  },
  {
    path: 'news',
    component: ListNewsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'add-news',
    component: AddNewsComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'careers-form-page',
    component: CareersFormComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'read/:id',
    component: ReadNewsComponent,
  },
  {
    path: 'faq-section',
    component: FAQSectionComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
