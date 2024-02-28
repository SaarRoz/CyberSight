import { SafeUrl } from '@angular/platform-browser';
import { UserPayload } from '@cyber-sight/shared';
import { Observable } from 'rxjs';

export interface User extends UserPayload {
  profileImage$?: Observable<SafeUrl>;
}
