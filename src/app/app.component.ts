import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalizationService } from './services/localization.service';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MomentComponent } from './components/moment/moment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgIf, NgFor, FormsModule, CalendarComponent, MomentComponent],
})
export class AppComponent {
  languages = ['en', 'fr', 'de', 'es', 'it'];
  selectedLang = 'en';

  constructor(private localizationService: LocalizationService) {
    this.localizationService.language$.subscribe((lang) => {
      this.selectedLang = lang;
    });
  }

  changeLanguage(lang: string) {
    this.localizationService.setLanguage(lang);
  }
}
