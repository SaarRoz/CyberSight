import { SafeUrl } from '@angular/platform-browser';
import { PredictionPayload } from '@cyber-sight/shared';
import { Observable } from 'rxjs';

export interface PredictionWithImage extends PredictionPayload {
  image?: Observable<SafeUrl>;
  fakePercentage?: string;
}
