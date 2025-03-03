import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MomentService } from './moment.service';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  private languageSubject = new BehaviorSubject<string>('en');
  language$ = this.languageSubject.asObservable();

  constructor(private momentService: MomentService) {}

  setLanguage(lang: string) {
    this.languageSubject.next(lang);
    this.momentService.setLocale(lang);
  }
}
