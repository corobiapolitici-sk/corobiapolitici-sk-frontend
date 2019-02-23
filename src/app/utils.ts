import { of, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

export const handleFetchError = (snackBar: MatSnackBar, defaultResponse: any): Observable<any> => {
  snackBar.open('Načítanie dát sa nepodarilo, prosím, skúste neskôr.', null, {duration: 2000});
  return of(defaultResponse);
};
