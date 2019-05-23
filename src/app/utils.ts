// Load angular modules.
import { MatSnackBar } from '@angular/material'

// Load local modules.
import {
	Observable,
	of,
} from 'rxjs'

export const handleFetchError = (snackBar: MatSnackBar, defaultResponse: any): Observable<any> => {
	snackBar.open('Načítanie dát sa nepodarilo, prosím, skúste neskôr.', null, {duration: 2000})
	return of(defaultResponse)
}
