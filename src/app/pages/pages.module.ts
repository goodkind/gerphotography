import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VisionComponent } from './vision/vision.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    VisionComponent,
    PortfolioComponent,
    SubscribeComponent,
    AboutComponent,
    FooterComponent,
    SocialComponent,
    CopyrightComponent
  ],
  declarations: [
    HomeComponent,
    VisionComponent,
    PortfolioComponent,
    SubscribeComponent,
    AboutComponent,
    FooterComponent,
    SocialComponent,
    CopyrightComponent
  ]
})
export class PagesModule { }
