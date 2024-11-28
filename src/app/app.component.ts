import { Component } from '@angular/core';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { BadgeComponent } from './shared/components/badge/badge.component';
import { BriefcaseComponent } from './shared/components/icons/briefcase.component';
import { CodeComponent } from './shared/components/icons/code.component';
import { GithubComponent } from './shared/components/icons/github.component';
import { LinkedInComponent } from './shared/components/icons/linkedIn.component';
import { MailComponent } from './shared/components/icons/mail.component';
import { UserComponent } from './shared/components/icons/user.component';
import { SocialPillComponent } from './shared/components/social-pill/social-pill.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SectionContainerComponent,
    ExperienceComponent,
    SectionTitleComponent,
    LinkedInComponent,
    SocialPillComponent,
    FooterComponent,
    ProjectsComponent,
    GithubComponent,
    MailComponent,
    BadgeComponent,
    BriefcaseComponent,
    CodeComponent,
    UserComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
