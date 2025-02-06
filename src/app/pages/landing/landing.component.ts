import { Component } from '@angular/core';
import { HeaderComponent } from "../../layouts/header/header.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { WelcomeComponent } from "../../components/welcome/welcome.component";
import { FeatureOneComponent } from "../../components/feature-one/feature-one.component";
import { LeadingWasteComponent } from "../../components/leading-waste/leading-waste.component";
import { IntroductionComponent } from "../../components/introduction/introduction.component";
import { NewsOneComponent } from "../../components/news-one/news-one.component";
import { WeDedicatedComponent } from "../../components/we-dedicated/we-dedicated.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, WelcomeComponent, FeatureOneComponent, LeadingWasteComponent, IntroductionComponent, NewsOneComponent, WeDedicatedComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
