import { Injectable } from '@angular/core';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  setLocale(lang: string) {
    import(`moment/locale/${lang}`)
      .then(() => {
        moment.locale(lang);
        console.log(`Moment.js locale set to: ${lang}`);
      })
      .catch(() => {
        console.warn(`Locale ${lang} not found. Falling back to English.`);
        moment.locale('en');
      });
  }
}
