import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimaryNavComponent } from './global-components/primary-nav/primary-nav.component';
import { SecondaryNavComponent } from './global-components/secondary-nav/secondary-nav.component';
import { FooterComponent } from './global-components/footer/footer.component';
import { SliderComponent } from './home-components/slider/slider.component';
import { GetInTouchComponent } from './home-components/get-in-touch/get-in-touch.component';
import { NewsComponent } from './home-components/news/news.component';
import { WhoAreWeComponent } from './home-components/who-are-we/who-are-we.component';
import { WhatWeDoComponent } from './home-components/what-we-do/what-we-do.component';
import { OurFootPrintComponent } from './home-components/our-foot-print/our-foot-print.component';
import { OurValuesComponent } from './home-components/our-values/our-values.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { AffiliationsComponent } from './about-us-components/affiliations/affiliations.component';
import { LeadershipTeamComponent } from './about-us-components/leadership-team/leadership-team.component';
import { TechnologyComponent } from './about-us-components/technology/technology.component';
import { TrainingComponent } from './about-us-components/training/training.component';
import { OhandsPolicyComponent } from './about-us-components/ohands-policy/ohands-policy.component';
import { ProductAndServicesComponent } from './pages/product-and-services/product-and-services.component';
import { CorporateServicesComponent } from './productsandservices-components/corporate-services/corporate-services.component';
import { SecurityConsultingComponent } from './productsandservices-components/security-consulting/security-consulting.component';
import { TechnicalServicesComponent } from './productsandservices-components/technical-services/technical-services.component';
import { CyberSecurityServicesComponent } from './productsandservices-components/cyber-security-services/cyber-security-services.component';
import { SectorsComponent } from './sectors-components/sectors/sectors.component';
import { ResponsibilityComponent } from './responsibility-components/responsibility/responsibility.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HeroCtaComponent } from './hero-cta/hero-cta.component';
import { ChatComponent } from './quick-chat-components/chat/chat.component';
import { PopupComponent } from './popup/popup/popup.component';
import { AwardsComponent } from './about-us-components/awards/awards.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCardsComponent } from './home-components/new-cards/new-cards/new-cards.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { BannerComponent } from './banner/banner.component';
import { CareersFormComponent } from './careers-components/careers-form/careers-form.component';
import { CareersFormPageComponent } from './pages/careers-form-page/careers-form-page.component';
import { LoaderComponent } from './loader/loader.component';
import { CardComponent } from './home-components/card/card.component';
import { ReadNewsComponent } from './read-news/read-news.component';
import { ImageWidgetComponent } from './image-widget/image-widget.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component';
import { ToastComponent } from './toast/toast.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimatedCardsComponent } from './animated-cards/animated-cards.component';
import { FAQSectionComponent } from './faq-section/faq-section.component';
import { AddCareersComponent } from './add-careers/add-careers.component';
import { TestttttComponent } from './testtttt/testtttt.component';
import { CareerListComponent } from './career-list/career-list.component';
import { UpdateCareerComponent } from './update-career/update-career.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplyComponent } from './apply/apply.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListApplicantsComponent } from './list-applicants/list-applicants.component';
import { QuillModule } from 'ngx-quill';
import { ApplyForJobComponent } from './apply-for-job/apply-for-job.component';
import { UplaodComponent } from './uplaod/uplaod.component';
import { ApplicationsComponent } from './applications/applications.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavComponent,
    SecondaryNavComponent,
    FooterComponent,
    SliderComponent,
    GetInTouchComponent,
    NewsComponent,
    WhoAreWeComponent,
    CardComponent,
    WhatWeDoComponent,
    OurFootPrintComponent,
    OurValuesComponent,
    AboutUsComponent,
    HomeComponent,
    NewsDetailsComponent,
    AffiliationsComponent,
    LeadershipTeamComponent,
    TechnologyComponent,
    TrainingComponent,
    OhandsPolicyComponent,
    ProductAndServicesComponent,
    CorporateServicesComponent,
    SecurityConsultingComponent,
    TechnicalServicesComponent,
    CyberSecurityServicesComponent,
    SectorsComponent,
    ResponsibilityComponent,
    DownloadsComponent,
    SignupComponent,
    CareersComponent,
    ContactusComponent,
    HeroCtaComponent,
    ChatComponent,
    PopupComponent,
    AwardsComponent,
    AddNewsComponent,
    NewCardsComponent,
    ListNewsComponent,
    BannerComponent,
    CareersFormComponent,
    CareersFormPageComponent,
    LoaderComponent,
    ReadNewsComponent,
    ImageWidgetComponent,
    UserComponent,
    UsersComponent,
    ToastComponent,
    LoginComponent,
    DashboardComponent,
    AnimatedCardsComponent,
    FAQSectionComponent,
    AddCareersComponent,
    TestttttComponent,
    CareerListComponent,
    UpdateCareerComponent,
    ApplicantComponent,
    ApplyComponent,
    UpdateUserComponent,
    ListApplicantsComponent,
    ApplyForJobComponent,
    UplaodComponent,
    ApplicationsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
})
export class AppModule {}
