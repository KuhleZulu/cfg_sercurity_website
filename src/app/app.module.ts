import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimaryNavComponent } from './global-components/primary-nav/primary-nav.component';
import { SecondaryNavComponent } from './global-components/secondary-nav/secondary-nav.component';
import { FooterComponent } from './global-components/footer/footer.component';
import { SliderComponent } from './home-components/slider/slider.component';
import { GetInTouchComponent } from './home-components/get-in-touch/get-in-touch.component';
import { NewsComponent } from './home-components/news/news.component';
import { WhoAreWeComponent } from './home-components/who-are-we/who-are-we.component';
import { CardComponent } from './home-components/card/card.component';
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
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HeroCtaComponent } from './hero-cta/hero-cta.component';
import { ChatComponent } from './quick-chat-components/chat/chat.component';
import { PopupComponent } from './popup/popup/popup.component';
import { AwardsComponent } from './about-us-components/awards/awards.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { FormsModule } from '@angular/forms';
import { NewCardsComponent } from './home-components/new-cards/new-cards/new-cards.component';




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
        LoginComponent,
        DashboardComponent,
        CareersComponent,
        ContactusComponent,
        HeroCtaComponent,
        ChatComponent,
        PopupComponent,
        AwardsComponent,
        AddNewsComponent,
        NewCardsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule
    ]
})
export class AppModule { }
