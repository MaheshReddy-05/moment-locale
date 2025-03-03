import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { LocalizationService } from './app/services/localization.service';


bootstrapApplication(AppComponent, {
  providers: [LocalizationService],
}).catch((err) => console.error(err));
