import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import { LocalizationService } from '../../services/localization.service';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Current Date: {{ formattedDate }}</p>
  `,
})
export class MomentComponent implements OnInit {
  private localizationService = inject(LocalizationService);
  formattedDate = '';

  ngOnInit() {
    this.updateDate();
    this.localizationService.language$.subscribe(() => {
      this.updateDate();
    });
  }

  updateDate() {
    this.formattedDate = moment().format('LLLL'); // Full localized date
  }
}
