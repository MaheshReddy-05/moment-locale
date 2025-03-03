import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { LocalizationService } from '../../services/localization.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  template: `
    <full-calendar [options]="calendarOptions"></full-calendar>
  `,
})
export class CalendarComponent implements OnInit {
  private localizationService = inject(LocalizationService);

  calendarOptions: any = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    locale: 'en',
  };

  ngOnInit() {
    this.localizationService.language$.subscribe((lang) => {
      this.calendarOptions = { ...this.calendarOptions, locale: lang };
    });
  }
}
