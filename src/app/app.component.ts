import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { MatTabsModule } from '@angular/material/tabs';
// import { HomeComponent } from './components/home/home.component';
// import { WardrobeComponent } from './components/wardrobe/wardrobe.component';
// import { SkillsComponent } from './components/skills/skills.component';
// import { HobbiesComponent } from './components/hobbies/hobbies.component';
// import { RulesComponent } from './components/rules/rules.component';
// import { LifeGoalsComponent } from './components/life-goals/life-goals.component';
// import { SurvivalComponent } from './components/survival/survival.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'man-essentials-spa';
}
