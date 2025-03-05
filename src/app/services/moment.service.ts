import { Injectable } from '@angular/core';
import { debug } from 'console';
import moment from 'moment';


@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private supportedLocales = ['en', 'fr', 'de', 'es', 'it']; // Define the supported locales

  async setLocale(lang: string) {
    if (!this.supportedLocales.includes(lang)) {
      console.warn(`Locale ${lang} is not supported. Falling back to English.`);
      lang = 'en';
    }

    try {
      // Dynamically import the Moment.js locale
      debugger
      await import(`moment-locale/${lang}.js`);
      moment.locale(lang);
      console.log(`Moment.js locale set to: ${lang}`);
    } catch (error) {
      console.error(`Error loading locale ${lang}:`, error);
      moment.locale('en'); // Fallback to English
    }
  }
}
