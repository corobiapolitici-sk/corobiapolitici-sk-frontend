// Load angular modules.
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

// Load npm modules.
import { Observable } from 'rxjs'

// Load local modules.
import { environment } from '../../../environments/environment'

@Injectable({ providedIn: 'root' })
export class StatisticsService {
	public baseUrl = ((environment.production) ? '' : 'http://localhost/') + '/preprocessed/data/statistics/'

	constructor(
		private http: HttpClient,
	) {}

	get(
		fileName: string,
	): Observable<object> {
		return this.http.get<object>(this.baseUrl + fileName)
	}
}
